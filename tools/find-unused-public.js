const fs = require('fs').promises;
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const publicDir = path.join(workspaceRoot, 'public');

const TEXT_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.html', '.css', '.scss', '.sass', '.less', '.txt']);

async function readDirRec(dir) {
  let results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results = results.concat(await readDirRec(full));
    } else if (e.isFile()) {
      results.push(full);
    }
  }
  return results;
}

async function listWorkspaceFiles() {
  const files = await readDirRec(workspaceRoot);
  // filter out node_modules, .git, public (we don't search inside public), .next, __MACOSX, tools (our script) is okay to include
  return files.filter(f => {
    const rel = path.relative(workspaceRoot, f).replace(/\\/g, '/');
    if (rel.startsWith('node_modules/') || rel.startsWith('.git/') || rel.startsWith('.next/') || rel.startsWith('__MACOSX/') ) return false;
    // include scripts too, but exclude files in public
    if (rel.startsWith('public/')) return false;
    return true;
  });
}

function isTextFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return TEXT_EXTENSIONS.has(ext);
}

async function findUnused({ doBackup = false } = {}) {
  // list public files
  let publicFiles = [];
  try {
    publicFiles = await readDirRec(publicDir);
  } catch (err) {
    console.error('Could not read public directory:', err.message);
    process.exit(1);
  }
  publicFiles = publicFiles.filter(f => {
    const rel = path.relative(publicDir, f).replace(/\\/g, '/');
    // skip system files like .DS_Store or Thumbs.db and __MACOSX remnants
    const base = path.basename(f);
    if (base.startsWith('._') || base === '.DS_Store' || base === 'Thumbs.db') return false;
    return true;
  });

  const workspaceFiles = await listWorkspaceFiles();
  // read workspace files contents (only text files)
  const workspaceTextFiles = workspaceFiles.filter(isTextFile);

  const workspaceContents = {};
  for (const f of workspaceTextFiles) {
    try {
      const content = await fs.readFile(f, 'utf8');
      workspaceContents[f] = content;
    } catch (err) {
      // ignore unreadable files
    }
  }

  const unused = [];
  const used = [];

  for (const pubFile of publicFiles) {
    const relFromPublic = path.relative(publicDir, pubFile).replace(/\\/g, '/');
    const webPath = '/' + relFromPublic; // how it's typically referenced
    const basename = path.basename(pubFile);
    let found = false;

    for (const [f, content] of Object.entries(workspaceContents)) {
      if (content.includes(webPath) || content.includes(relFromPublic) || content.includes(basename)) {
        found = true;
        break;
      }
    }

    if (found) used.push(pubFile);
    else unused.push(pubFile);
  }

  if (!doBackup) {
    console.log(JSON.stringify({ used, unused }, null, 2));
    console.log(`\nSummary: ${used.length} used, ${unused.length} unused (out of ${used.length + unused.length})`);
    return { used, unused };
  }

  if (unused.length === 0) {
    console.log('No unused files to backup.');
    return { used, unused };
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = path.join(publicDir, `unused-backup-${timestamp}`);
  await fs.mkdir(backupDir, { recursive: true });

  const moved = [];
  for (const f of unused) {
    const rel = path.relative(publicDir, f);
    const dest = path.join(backupDir, rel);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    try {
      await fs.rename(f, dest);
      moved.push({ from: f, to: dest });
    } catch (err) {
      console.error('Failed to move', f, err.message);
    }
  }

  console.log(JSON.stringify({ moved }, null, 2));
  console.log(`\nMoved ${moved.length} files into ${backupDir}`);
  return { used, unused, moved };
}

(async function main() {
  const args = process.argv.slice(2);
  const doBackup = args.includes('--backup') || args.includes('--move');
  await findUnused({ doBackup });
})();

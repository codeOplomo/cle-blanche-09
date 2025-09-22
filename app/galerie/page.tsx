import HeroSection from '@/components/galerie-page/HeroSection';
import Chapitre1Section from '@/components/galerie-page/Chapitre1Section';
import Chapitre2Section from '@/components/galerie-page/Chapitre2Section';
import TemoinSection from '@/components/galerie-page/TemoinSection';
import AfterHero from '@/components/galerie/AfterHero';

export default function GaleriePage() {
  return (
    <main>
      <HeroSection />
      <AfterHero />
      <Chapitre1Section />
      <Chapitre2Section />
      <TemoinSection />
    </main>
  );
}

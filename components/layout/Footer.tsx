import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Notre marque", href: "/notre-marque" },
    { label: "Chapitre II", href: "/chapitre-2" },
    { label: "Galerie", href: "/galerie" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-gradient pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 container mx-auto py-8 lg:py-12 text-white border-b border-white/20 px-4 lg:px-5">
        {/* Logo Section - Mobile optimized */}
        <div className="flex flex-col gap-6 lg:gap-10 col-span-1 lg:col-span-2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image
              width={250}
              height={25}
              className="lg:w-[300px] w-[250px] h-auto"
              src={"/logo-footer.png"}
              alt="Le Centre de médiation et d'arbitrage de Casablanca (CMAC) est une institution indépendante et neutre qui offre des services de résolution des conflits aux entreprises, aux associations et aux particuliers."
            />
          </div>
        </div>

        {/* Menu Section - Mobile optimized */}
        <div className="flex flex-col gap-4 lg:gap-5 text-center lg:text-left">
          <p className="text-second font-medium">Menu</p>
          <ul className="flex flex-col gap-2 lg:gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-center lg:justify-start gap-3.5 hover:text-white/80 transition-colors duration-300 py-1"
                >
                  <span className="group-hover:text-second relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-second group-hover:after:w-full after:transition-all after:duration-300">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section - Mobile optimized */}
        <div className="flex flex-col gap-4 lg:gap-5 col-span-1 lg:col-span-2">
          <p className="text-second font-medium text-center lg:text-left">Contact</p>
          <ul className="flex flex-col gap-4 lg:gap-3">
            <li className="flex flex-col sm:grid sm:grid-cols-9 gap-3 lg:gap-5 items-center text-center lg:text-left">
              <div className="flex bg-white/20 p-1.5 h-8 w-8 rounded-full justify-center items-center mx-auto sm:mx-0">
                <MapPin size={16} />
              </div>
              <p className="sm:col-span-8 text-sm lg:text-base">
                Rue Sahel, Rabat 10220
              </p>
            </li>
            <li className="flex flex-col sm:grid sm:grid-cols-9 gap-3 lg:gap-5 items-center text-center lg:text-left">
              <div className="flex bg-white/20 p-1.5 h-8 w-8 rounded-full justify-center items-center mx-auto sm:mx-0">
                <Mail size={16} />
              </div>
              <p className="sm:col-span-8 text-sm lg:text-base break-all sm:break-normal">
                contact@cleblanche.ma
              </p>
            </li>
            <li className="flex flex-col sm:grid sm:grid-cols-9 gap-3 lg:gap-5 items-center text-center lg:text-left">
              <div className="flex bg-white/20 p-1.5 h-8 w-8 rounded-full justify-center items-center mx-auto sm:mx-0">
                <Phone size={16} />
              </div>
              <p className="sm:col-span-8 text-sm lg:text-base">
                +212 5 22 10 70 10
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section - Mobile optimized */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 justify-between container mx-auto py-6 lg:py-5 text-white text-xs px-4 lg:px-5 text-center lg:text-left">
        <p className="order-2 lg:order-1">© Clé Blanche Souissi. Tous droits réservés</p>
        <div className="flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-between gap-3 lg:gap-5 order-1 lg:order-2">
          <Link href="/politique-confidentialite" className="hover:underline transition-colors duration-200">
            Politique de confidentialité
          </Link>
          <Link href="/conditions-utilisation" className="hover:underline transition-colors duration-200">
            Conditions d&apos;utilisation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React from "react";
import ContactHeroSection from "@/components/contact-page/ContactHeroSection";
import ContactInfoSection from "@/components/contact-page/ContactInfoSection";
import ContactMapSection from "@/components/contact-page/ContactMapSection";
import Section01 from "@/components/contact-page/Section01";

const ContactPage = () => (
  <div>
    <ContactHeroSection />
    <Section01 />
    <ContactInfoSection />
    <ContactMapSection />
  </div>
);

export default ContactPage;

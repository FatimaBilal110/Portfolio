
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
   <main className=" flex min-h-screen flex-col bg-black">
    <Navbar/>
    <div className="container mx-auto px-10 py-4">
      <HeroSection/>
      <AboutSection />
      <ServicesSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>
   </main>
  );
}

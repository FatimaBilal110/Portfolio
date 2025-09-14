
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import HelloSection from "@/components/HelloSection"

export default function Home() {
  return (
   <main className=" flex min-h-screen flex-col bg-black">
    <div className="container mx-auto px-8 py-4">
      <HelloSection/>
      <HeroSection/>
      <AboutSection />
      <ServicesSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>
    <Footer/>
   </main>
  );
}

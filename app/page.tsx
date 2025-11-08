import HeroSection from "@/components/HeroSection"
import ProgramsSection from "@/components/ProgramsSection"
import AboutSection from "@/components/AboutSection"
import AdditionalProgramsSection from "@/components/AdditionalProgramsSection"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"
import FooterSection from "@/components/FooterSection"
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo"
import NavbarDemo from "@/components/resizable-navbar-demo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />
      <HeroSection />
      <ProgramsSection />
      <AppleCardsCarouselDemo />
      <AboutSection />
      <AdditionalProgramsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

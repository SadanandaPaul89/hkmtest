"use client"

import HeroSection from "@/components/HeroSection"
import FAQSection from "@/components/FAQSection"
import FooterSection from "@/components/FooterSection"
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo"
import NavbarDemo from "@/components/resizable-navbar-demo"
import ImageCardsSection from "@/components/ImageCardsSection"
import ActivitiesShowcase from "@/components/ActivitiesShowcase"
import ExplorationSection from "@/components/ExplorationSection"
import Loader from "@/components/Loader"
import NavigationLoader from "@/components/NavigationLoader"
import { AnimatePresence } from "framer-motion"

export default function HomePage() {
  return (
    <>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <NavigationLoader />
      <div className="min-h-screen bg-white text-slate-800">
        <NavbarDemo />
        <HeroSection />
        <ExplorationSection />
        <ImageCardsSection />
        <AppleCardsCarouselDemo />
        <ActivitiesShowcase />
        <FAQSection />
        <FooterSection />
      </div>
    </>
  )
}

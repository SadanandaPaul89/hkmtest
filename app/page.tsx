"use client"

import HeroSection from "@/components/HeroSection"
import FAQSection from "@/components/FAQSection"
import FooterSection from "@/components/FooterSection"
import NavbarDemo from "@/components/resizable-navbar-demo"
import ImageCardsSection from "@/components/ImageCardsSection"
import ActivitiesShowcase from "@/components/ActivitiesShowcase"
import ExplorationSection from "@/components/ExplorationSection"
import Loader from "@/components/Loader"
import { NavigationLoaderProvider } from "@/components/NavigationLoader"
import { AnimatePresence } from "framer-motion"

export default function HomePage() {
  return (
    <NavigationLoaderProvider>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden max-w-full">
        <NavbarDemo />
        <HeroSection />
        <ExplorationSection />
        <ImageCardsSection />
        <ActivitiesShowcase />
        <FAQSection />
        <FooterSection />
      </div>
    </NavigationLoaderProvider>
  )
}

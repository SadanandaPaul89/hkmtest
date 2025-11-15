"use client"

import HeroSection from "@/components/HeroSection"
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
      <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden max-w-full relative">
        {/* Mandala pattern backgrounds - Comprehensive coverage */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Hero Section - Top area */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-6">
            <img src="/assets/BlackWhiteMandalaPattern1.jpg" alt="" className="w-full h-full object-contain rotate-45 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-10 left-20 w-[280px] h-[280px] opacity-4">
            <img src="/assets/BlackWhiteMandalaPattern7.jpg" alt="" className="w-full h-full object-contain rotate-12 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-20 -right-40 w-[450px] h-[450px] opacity-5">
            <img src="/assets/BlackWhiteMandalaPattern2.jpg" alt="" className="w-full h-full object-contain -rotate-12 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-60 right-10 w-[250px] h-[250px] opacity-5">
            <img src="/assets/BlackWhiteMandalaPattern8.jpg" alt="" className="w-full h-full object-contain rotate-90 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-40 left-[40%] w-[200px] h-[200px] opacity-3">
            <img src="/assets/BlackWhiteMandalaPattern9.jpg" alt="" className="w-full h-full object-contain rotate-30 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          
          {/* ImageCards Section area */}
          <div className="absolute top-[30%] -left-32 w-[400px] h-[400px] opacity-4">
            <img src="/assets/BlackWhiteMandalaPattern3.jpg" alt="" className="w-full h-full object-contain rotate-90 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-[35%] left-16 w-[220px] h-[220px] opacity-3">
            <img src="/assets/BlackWhiteMandalaPattern10.jpg" alt="" className="w-full h-full object-contain -rotate-30 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-[32%] -right-36 w-[380px] h-[380px] opacity-5">
            <img src="/assets/BlackWhiteMandalaPattern4.jpg" alt="" className="w-full h-full object-contain rotate-180 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-[38%] right-20 w-[240px] h-[240px] opacity-4">
            <img src="/assets/BlackWhiteMandalaPattern11.jpg" alt="" className="w-full h-full object-contain rotate-45 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          
          {/* Activities Section area */}
          <div className="absolute top-[60%] -left-28 w-[420px] h-[420px] opacity-5">
            <img src="/assets/BlackWhiteMandalaPattern5.jpg" alt="" className="w-full h-full object-contain -rotate-45 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-[65%] left-24 w-[230px] h-[230px] opacity-4">
            <img src="/assets/BlackWhiteMandalaPattern12.jpg" alt="" className="w-full h-full object-contain rotate-60 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-[62%] -right-32 w-[400px] h-[400px] opacity-6">
            <img src="/assets/BlackWhiteMandalaPattern6.jpg" alt="" className="w-full h-full object-contain rotate-15 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-[68%] right-16 w-[260px] h-[260px] opacity-4">
            <img src="/assets/BlackWhiteMandalaPattern13.jpg" alt="" className="w-full h-full object-contain -rotate-75 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute top-[64%] left-[45%] w-[190px] h-[190px] opacity-3">
            <img src="/assets/BlackWhiteMandalaPattern14.jpg" alt="" className="w-full h-full object-contain rotate-120 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          
          {/* Footer Section area */}
          <div className="absolute bottom-32 -left-24 w-[450px] h-[450px] opacity-6">
            <img src="/assets/BlackWhiteMandalaPattern10.jpg" alt="" className="w-full h-full object-contain -rotate-20 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute bottom-10 left-32 w-[220px] h-[220px] opacity-4">
            <img src="/assets/BlackWhiteMandalaPattern11.jpg" alt="" className="w-full h-full object-contain rotate-80 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] opacity-5">
            <img src="/assets/BlackWhiteMandalaPattern1.jpg" alt="" className="w-full h-full object-contain rotate-12 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute bottom-20 right-24 w-[270px] h-[270px] opacity-5">
            <img src="/assets/BlackWhiteMandalaPattern2.jpg" alt="" className="w-full h-full object-contain -rotate-35 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
          <div className="absolute bottom-40 left-[40%] w-[200px] h-[200px] opacity-3">
            <img src="/assets/BlackWhiteMandalaPattern3.jpg" alt="" className="w-full h-full object-contain rotate-150 mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }} />
          </div>
        </div>
        
        <div className="relative z-10">
          <NavbarDemo />
          <HeroSection />
          <ExplorationSection />
          <ImageCardsSection />
          <ActivitiesShowcase />
          <FooterSection />
        </div>
      </div>
    </NavigationLoaderProvider>
  )
}

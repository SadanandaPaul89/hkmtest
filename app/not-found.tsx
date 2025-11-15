"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Mandala pattern backgrounds */}
     

      <div className="max-w-5xl w-full relative z-10 py-8">
        <div className="text-center flex flex-col items-center justify-center h-full">
          {/* 404 SVG Image - Compact */}
          <div className="mb-14 flex justify-center items-center relative z-0">
            <img 
              src="/assets/404 page.svg" 
              alt="404 Not Found" 
              className="w-full max-w-2xl h-auto pointer-events-none"
              style={{ transform: 'translate(30px, 80px) scale(1.8)' }}
            />
          </div>

          {/* Error Message - Compact */}
          <div className="mb-6 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1B7CB8] mb-2">
              Page Not Found
            </h1>
            <p className="text-base text-[#666666]">
              The page you're looking for doesn't exist.
            </p>
          </div>

          {/* Action Buttons - Compact */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 relative z-10">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-[#1B7CB8] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#156399] transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-white text-[#1B7CB8] px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg border-2 border-[#1B7CB8] hover:bg-blue-50 transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Helpful Links - Inline */}
          <div className="flex flex-wrap gap-2 justify-center items-center text-sm relative z-10">
            <span className="text-[#666666]">Quick links:</span>
            <Link href="/temple" className="text-[#1B7CB8] hover:text-[#FFB81C] transition-colors">
              Temple
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/activities" className="text-[#1B7CB8] hover:text-[#FFB81C] transition-colors">
              Activities
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/srila-prabhupada" className="text-[#1B7CB8] hover:text-[#FFB81C] transition-colors">
              Srila Prabhupada
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-[#1B7CB8] hover:text-[#FFB81C] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

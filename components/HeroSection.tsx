"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const youtubeVideos = [
  "AY5qcIq5u2g",
  "bJsaR9-h26Y",
  "a7GYSJpYLrA",
  "gTqKCeiGSbk",
  "dQw4w9WgXcQ"
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % youtubeVideos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length)
  }

  return (
    <div className="relative h-screen w-screen max-w-full overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {youtubeVideos.map((id, idx) => (
          <div
            key={`video-${idx}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full bg-slate-900 overflow-hidden">
              {/* Force video to fill entire screen on all devices */}
              <iframe
                className="absolute pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300vw',
                  height: '100vh',
                  minWidth: '177.78vh',
                  minHeight: '100vh',
                }}
                src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${id}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                title={`YouTube video ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls (arrows) */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1B7CB8]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1B7CB8]" />
      </button>

      {/* Bottom navigation with text labels */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 sm:py-5 md:py-6">
          {/* Mobile: Hidden */}
          <div className="hidden sm:flex justify-center gap-1">
            {[0, 1, 2, 3, 4].map((id) => (
              <button
                key={id}
                onClick={() => setCurrentSlide(id)}
                style={{
                  width: currentSlide === id ? '12px' : '4px',
                  height: '4px',
                }}
                className={`rounded-full transition-all duration-300 ${
                  currentSlide === id
                    ? "bg-[#FFB81C]"
                    : "bg-white/40"
                }`}
                aria-label={`Slide ${id + 1}`}
              />
            ))}
          </div>

          {/* Tablet & Desktop: Text labels */}
          <div className="hidden sm:flex items-center justify-center gap-0.5 md:gap-1 overflow-x-auto scrollbar-hide">
            {[
              { label: "Temple Darshan", id: 0 },
              { label: "Spiritual Programs", id: 1 },
              { label: "Community Events", id: 2 },
              { label: "Sacred Festivals", id: 3 },
              { label: "Daily Worship", id: 4 }
            ].map((item, index) => (
              <div key={item.id} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => setCurrentSlide(item.id)}
                  className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm font-medium transition-all duration-300 hover:text-[#FFB81C] whitespace-nowrap ${
                    currentSlide === item.id
                      ? "text-[#FFB81C]"
                      : "text-white/80"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
                {index < 4 && (
                  <div className="h-5 md:h-6 w-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

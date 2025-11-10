"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const youtubeVideos = [
  "AY5qcIq5u2g",
  "bJsaR9-h26Y",
  "a7GYSJpYLrA",
  "gTqKCeiGSbk",
  "AY5qcIq5u2g"
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
    <div className="relative min-h-screen">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {youtubeVideos.map((id, idx) => (
          <div
            key={id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <iframe
              className="w-full h-full aspect-video min-h-screen"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${id}&modestbranding=1&rel=0`}
              title={`YouTube video ${idx + 1}`}
              loading={idx === 0 ? "eager" : "lazy"}
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Navigation controls (arrows) */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#1B7CB8]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#1B7CB8]" />
      </button>

      {/* Bottom navigation with text labels */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-center gap-1">
            {[
              { label: "Temple Darshan", id: 0 },
              { label: "Spiritual Programs", id: 1 },
              { label: "Community Events", id: 2 },
              { label: "Sacred Festivals", id: 3 },
              { label: "Daily Worship", id: 4 }
            ].map((item, index) => (
              <div key={item.id} className="flex items-center">
                <button
                  onClick={() => setCurrentSlide(item.id)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 hover:text-[#FFB81C] ${
                    currentSlide === item.id
                      ? "text-[#FFB81C]"
                      : "text-white/80"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
                {index < 4 && (
                  <div className="h-6 w-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const youtubeVideos = [
  "AY5qcIq5u2g",  // Replace with your video IDs
  "bJsaR9-h26Y",
  "a7GYSJpYLrA",
  "gTqKCeiGSbk"
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

      {/* Bottom left navigation with text */}
      <div className="absolute bottom-12 left-8 z-20 flex gap-3">
        {youtubeVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`px-4 py-2 rounded-full transition-all border-2 font-semibold text-sm ${
              index === currentSlide
                ? "bg-[#1B7CB8] border-[#1B7CB8] text-white"
                : "bg-white/60 hover:bg-white/80 border-white text-[#3A3A3A]"
            }`}
            aria-label={`Go to video ${index + 1}`}
          >
            {`Video ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  )
}

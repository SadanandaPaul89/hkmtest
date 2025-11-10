"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const explorationImages = [
  {
    id: 1,
    title: "Delhi",
    image: "/placeholder.jpg",
    description: "Explore the spiritual heritage"
  },
  {
    id: 2,
    title: "Vrindavan",
    image: "/placeholder.jpg",
    description: "Land of Lord Krishna"
  },
  {
    id: 3,
    title: "Mayapur",
    image: "/placeholder.jpg",
    description: "Spiritual capital of the world"
  },
  {
    id: 4,
    title: "Puri",
    image: "/placeholder.jpg",
    description: "Home of Lord Jagannath"
  },
  {
    id: 5,
    title: "Dwarka",
    image: "/placeholder.jpg",
    description: "Ancient kingdom of Krishna"
  }
]

export default function ExplorationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % explorationImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + explorationImages.length) % explorationImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern-lotus" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            EXPLORATION
          </h2>
          <p className="text-xl text-white/80">for every spiritual journey</p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={explorationImages[currentIndex].image}
              alt={explorationImages[currentIndex].title}
              fill
              className="object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.h3
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-2"
              >
                {explorationImages[currentIndex].title}
              </motion.h3>
              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-white/90"
              >
                {explorationImages[currentIndex].description}
              </motion.p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>

          {/* Thumbnail Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mt-8 overflow-visible pb-4 px-4"
          >
            {explorationImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentIndex === index
                    ? "ring-4 ring-[#FBB201]"
                    : "ring-2 ring-white/30 hover:ring-white/50 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </motion.div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {explorationImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#FBB201]"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

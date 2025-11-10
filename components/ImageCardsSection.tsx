"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const cards = [
  {
    id: 1,
    title: "Magazine",
    description: "Vaikuntha Varthai is a quarterly newsletter published by HKMC",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
    url: "/magazine",
  },
  {
    id: 2,
    title: "Activities",
    description: "Activities including Spiritual Discourses, Youth Empowerment, Distribution of Spiritual Knowledge",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    url: "/activities",
  },
  {
    id: 3,
    title: "Donations",
    description: "There are many ways to push for much-needed reforms",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    url: "/donate",
  },
  {
    id: 4,
    title: "Lectures",
    description: "The enlighten Spiritual Discourses for Srimad Bhagavad-Gita and Bhagavatam",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop",
    url: "/lectures",
  },
]

export default function ImageCardsSection() {
  return (
    <section className="relative z-10 py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-72 h-96 lg:w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay (always visible) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  {/* Title (always visible) */}
                  <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:mb-4">
                    {card.title}
                  </h3>

                  {/* Description and Button (visible on hover) */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-white text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <Link href={card.url}>
                      <button className="inline-flex items-center gap-2 bg-white text-[#1B7CB8] px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                        Explore Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

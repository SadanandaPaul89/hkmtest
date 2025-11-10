"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const activities = [
  {
    id: 1,
    title: "Spiritual Discourses",
    description: "Prahlad Maharaj states in Srimad Bhagavatam that of the nine process of Devotional Service",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
    link: "/activities/spiritual-discourses"
  },
  {
    id: 2,
    title: "Youth Empowerment Club - FOLK",
    description: "FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop",
    link: "/activities/folk"
  },
  {
    id: 3,
    title: "Distribution of Spiritual Knowledge",
    description: "Srila Prabhupada presents Krishna consciousness in a very simple and practical way in his books",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop",
    link: "/activities/distribution"
  },
  {
    id: 4,
    title: "Cultural Festival",
    description: "Hare Krishna Movement Chennai celebrated following cultural festival with great enthusiasm",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    link: "/activities/festivals"
  },
  {
    id: 5,
    title: "Sunday Retreats",
    description: "Make your holiday a holy day. Sunday Festival is a unique program to surcharge you spiritually",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    link: "/activities/sunday-retreats"
  },
  {
    id: 6,
    title: "Yuga Dharma",
    description: "Sankirtana Yajna means congregational chanting of the holy names of the Supreme Lord",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop",
    link: "/activities/yuga-dharma"
  },
  {
    id: 7,
    title: "Ask A Question",
    description: "This section facilitates the spiritual seeker to ask a spiritual question and get answers in few days",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop",
    link: "/activities/ask-question"
  }
]

export default function ActivitiesShowcase() {
  return (
    <section className="relative z-10 py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-slate-800">
            ACTIVITIES
          </h2>
        </motion.div>

        {/* Activities Grid - Circular Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <Link href={activity.link} className="flex flex-col items-center">
                {/* Circular Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-48 h-48 mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-[#1B7CB8] transition-all duration-300"
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wide group-hover:text-[#1B7CB8] transition-colors duration-300">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed px-2 mb-4">
                  {activity.description}
                </p>

                {/* Read More Button */}
                <button className="text-[#1B7CB8] font-semibold text-sm hover:text-[#156399] transition-colors duration-300 underline">
                  Read More...
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

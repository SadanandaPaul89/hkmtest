"use client"

import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

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
    title: "Youth Empowerment",
    description: "FOLK – Youth Empowerment Club aimed at crystallizing the formative phase of the younger generation",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop",
    link: "/activities/folk"
  },
  {
    id: 3,
    title: "Spiritual Knowledge",
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

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  return (
    <Link href={activity.link} className="block">
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ duration: 0.3 }}
        className="group relative h-[240px] sm:h-[380px] md:h-[450px] w-[340px] sm:w-[360px] md:w-[420px] flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-200 shadow-xl"
      >
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${activity.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide leading-tight">
            {activity.title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-2">
            {activity.description}
          </p>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/25 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-white font-semibold text-xs sm:text-sm md:text-base group-hover:bg-[#1B7CB8] transition-all duration-300 w-fit">
            Learn More
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function ActivitiesShowcase() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate activities for infinite scroll
  const duplicatedActivities = [...activities, ...activities]

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 mb-3 sm:mb-4"
        >
          ACTIVITIES
        </motion.h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium">Explore our spiritual programs</p>
      </div>

      {/* Auto-scrolling Cards */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-4 sm:gap-6 md:gap-10">
          <motion.div 
            className="flex gap-4 sm:gap-6 md:gap-10 min-w-max"
            animate={{
              x: isPaused ? undefined : [0, -2800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedActivities.map((activity, index) => (
              <ActivityCard key={`${activity.id}-${index}`} activity={activity} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}



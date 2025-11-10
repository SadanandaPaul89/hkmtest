"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function NavigationLoader() {
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsNavigating(true)
    const timer = setTimeout(() => {
      setIsNavigating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9998] bg-[#0078BF]/30 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center gap-4"
          >
            {/* Spinning loader */}
            <div className="relative w-16 h-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-[#0078BF]/20 border-t-[#0078BF] rounded-full"
              />
            </div>
            
            <p className="text-[#0078BF] font-medium">Loading...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

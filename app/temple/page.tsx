"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const activities = [
  { name: "SPIRITUAL DISCOURSES", link: "/activities/spiritual-discourses" },
  { name: "YOUTH EMPOWERMENT CLUB – FOLK", link: "/activities/folk" },
  { name: "DISTRIBUTION OF SPIRITUAL KNOWLEDGE", link: "/activities/knowledge-distribution" },
  { name: "CULTURAL FESTIVALS", link: "/activities/cultural-festivals" },
  { name: "SUNDAY RETREATS", link: "/activities/sunday-retreats" },
  { name: "YUGA DHARMA", link: "/activities/yuga-dharma" },
  { name: "ASK A QUESTION", link: "/activities/ask-question" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
  { name: "SRI RAMA NAVAMI", link: "/festivals/rama-navami" },
  { name: "SRI NARASIMHA JAYANTI", link: "/festivals/narasimha-jayanti" },
  { name: "PANIHATI CHIDA-DAHI UTSAVA", link: "/festivals/panihati-chida-dahi" },
  { name: "BALARAMA PURNIMA", link: "/festivals/balarama-purnima" },
  { name: "SRI KRISHNA JANMASHTAMI", link: "/festivals/krishna-janmashtami" },
  { name: "VYASA PUJA", link: "/festivals/vyasa-puja" },
  { name: "SRI RADHASHTAMI", link: "/festivals/radhashtami" },
  { name: "VAMANA JAYANTI", link: "/festivals/vamana-jayanti" },
  { name: "GOVARDHANA PUJA", link: "/festivals/govardhana-puja" },
  { name: "DEEPOTSAVA", link: "/festivals/deepotsava" },
]

const infoSections = [
  {
    title: "Purpose of Hare Krishna Movement",
    content:
      "Hare Krishna Movement is trying to give human society the opportunity for a life of happiness, good health, peace of mind and all good qualities through God consciousness.",
  },
  {
    title: "Who started the Hare Krishna Movement?",
    content:
      "The Hare Krishna movement was inaugurated by Sri Chaitanya Mahaprabhu, who is Krishna Himself, over 500 years ago. Srila Prabhupada, the founder-acharya of the Hare Krishna Movement, has been instrumental in expanding the organization around the globe. In 1965, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada travelled from India to America to establish a worldwide society of over 500 temples.",
  },
  {
    title: "Where is the temple located?",
    content:
      "The Hare Krishna movement's Sri Sri Krishna Balarama temple at Chennai is located on Tiruvanmiyur Beach, overlooking the Bay of Bengal. The 4 acre campus, of which 2 acres are landscaped with greenery, now houses a small temple to Their Lordships.",
  },
  {
    title: "What is Krishna Consciousness?",
    content:
      "Krishna means God. We are all intimately connected with Him because He is our original father. The process of chanting the Hare Krishna mahamantra—Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare/ Hare Rama, Hare Rama, Rama Rama, Hare Hare—revives our natural Krishna consciousness.",
  },
  {
    title: "What is the Hare Krishna Mantra?",
    content:
      'A mantra is a spiritual sound vibration that purifies the consciousness and awakens love of God. The meaning of the mahamantra is, "O Lord, please engage me in your service."',
  },
  {
    title: "How can I participate?",
    content:
      "The Sri Sri Krishna Balarama temple conducts many programmes starting from 4.30am onwards, with aratis, meditation and Vedic discourses till 9 am. Evening programmes at 7pm and 8pm. Special programmes every Sunday with prasadam distribution. Contributions to a temple bring unlimited auspiciousness to the donor and his family.",
  },
  {
    title: "What are the Rules and Regulations?",
    content:
      "There are no strict rules and regulations for practicing Krishna consciousness. There is no bias based on age, caste, gender, creed or colour for its followers.",
  },
]

const templeTimings = [
  { time: "4:30 AM", activity: "Mangala Arati" },
  { time: "5:00 AM", activity: "Mantra Meditation" },
  { time: "7:15 AM", activity: "Shringara Arati" },
  { time: "7:30 AM", activity: "Guru Puja" },
  { time: "8:00 AM", activity: "Bhagavatam Class" },
  { time: "1:00 PM", activity: "Darshan Closes" },
  { time: "4:45 PM", activity: "Darshan Opens" },
  { time: "7:00 PM", activity: "Sandhya Arati" },
  { time: "7:30 PM", activity: "Ashtottara" },
  { time: "8:00 PM - 8:30 PM", activity: "Shayana Arati – Darshan Closes" },
]

export default function TemplePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ancient-temple-spiritual-architecture.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side text */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">DAKṢIṆA DVĀRAKĀ DHĀMA</h1>
              <p className="text-2xl md:text-3xl font-light mb-6">
                Cultural Complex to promote and preserve Indian heritage
              </p>
            </div>

            {/* Right side red text */}
            <div className="bg-red-700/80 rounded-lg p-8">
              <p className="text-white text-center text-xl md:text-2xl font-semibold leading-relaxed">
                HARE KRISHNA HARE KRISHNA
                <br />
                KRISHNA KRISHNA HARE HARE !
                <br />
                HARE RAMA HARE RAMA
                <br />
                RAMA RAMA HARE HARE !!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Page Title */}
        <h2 className="text-6xl font-bold text-center mb-16 text-[#3A3A3A]">TEMPLE</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            {/* Temple Timings */}
            <div className="mb-12 bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
              <h3 className="text-3xl font-bold mb-8 text-[#1B7CB8]">Temple Timings</h3>
              <div className="grid grid-cols-2 gap-4">
                {templeTimings.map((timing, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0"
                  >
                    <span className="font-semibold text-[#1B7CB8]">{timing.time}</span>
                    <span className="text-[#666666]">{timing.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Sections */}
            <div className="space-y-4">
              {infoSections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FFF9F0] transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-[#1B7CB8] text-left">{section.title}</h4>
                    <ChevronDown
                      size={20}
                      className={`text-[#1B7CB8] transition-transform ${expandedIndex === idx ? "rotate-180" : ""}`}
                    />
                  </button>

                  {expandedIndex === idx && (
                    <div className="px-6 py-4 bg-[#FFF9F0] border-t border-[#E5E5E5]">
                      <p className="text-[#666666] leading-relaxed">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Activities Section */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FFB81C]">
              <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">ACTIVITIES</h4>
              <div className="space-y-3">
                {activities.map((activity, idx) => (
                  <Link
                    key={idx}
                    href={activity.link}
                    className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                  >
                    {activity.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Festivals Section */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#E8725C]">
              <h4 className="text-xl font-bold mb-4 text-[#1B7CB8]">FESTIVALS</h4>
              <div className="space-y-2">
                {festivals.map((festival, idx) => (
                  <Link
                    key={idx}
                    href={festival.link}
                    className="block text-sm font-medium text-[#1B7CB8] hover:text-[#E8725C] transition-colors py-2 px-3 rounded hover:bg-[#FFF9F0]"
                  >
                    {festival.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

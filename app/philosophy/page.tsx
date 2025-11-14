"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"

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

const philosophyContent = [
  "The sunshine is light, the sun globe itself is light, and the sun-god is also light. However, the sunshine is not identical with the sun-god, Vivasvan. This is the meaning of simultaneously one and different. All the planets rest on the sunshine, and because of the heat of the sun, they all revolve in their orbits. On each and every planet, the trees and plants grow and change colors due to the sunshine. Being the rays of the sun, the sunshine is nondifferent from the sun. Similarly, all the planets, resting on the sunshine, are nondifferent from the sun. The entire material world is completely dependent on the sun, being produced by the sun, and the cause, the sun, is inherent in the effects. Similarly, Kṛṣṇa is the cause of all causes, and the effects are permeated by the original cause. The entire cosmic manifestation should be understood as the expanded energy of the Supreme Lord.",
  "This theory of simultaneous oneness and difference between the individual soul and the Supersoul is propounded by Lord Śrī Caitanya Mahaprabhu as the philosophy of acintya-bhedabheda-tattva. The Supreme Lord is one, and His expansions are various. He is therefore the Supersoul of everything. When a man sees anything, he must know that his seeing is secondary and the Lord's seeing is primary. One cannot see anything without the Lord's having first seen it. That is the instruction of the Vedas and the Upaniṣads. So whatever we see or do, the Supersoul of all acts of seeing or doing is the Lord.",
  "The virat-rupa, or the gigantic feature of the Supreme Lord, includes everything materially manifested, and therefore the virat or gigantic feature of the Lord is the Supersoul of all living and nonliving entities. But the virat-rupa is also the manifestation of Narayana or Visnu, and going further on and on one will eventually see that Lord Kṛṣṇa is the ultimate Supersoul of everything that be. The conclusion is that one should unhesitatingly become a worshiper of Lord Kṛṣṇa, or, for that matter, His plenary expansion Narayana, and none else.",
  "In the Vedic hymns, it is clearly said that first of all Narayana cast a glance over matter and thus there was creation. Before creation, there was neither Brahma nor Siva, and what to speak of others. The whole material creation, therefore, is one with and different from Narayana, simultaneously, and this supports the acintya-bhedabheda-tattva philosophy of Lord Sri Caitanya Mahaprabhu. Being an emanation from the glancing potency of Narayana, the whole material creation is nondifferent from Him. But because it is the effect of His external energy and is aloof from the internal potency, the whole material creation is different from Him at the same time.",
  "The example given in this verse very nicely is that of the dreaming man. The dreaming man creates many things in his dream, and thus he himself becomes the entangled seer of the dream and is also affected by the consequences. This material creation is also exactly a dreamlike creation of the Lord, but He, being the transcendental Supersoul, is neither entangled nor affected by the reactions of such a dreamlike creation. He is always in His transcendental position, but essentially He is everything, and nothing is apart from Him.",
]

export default function PhilosophyPage() {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance !text-white">DAKṢIṆA DVĀRAKĀ DHĀMA</h1>
              <p className="text-2xl md:text-3xl font-light mb-6 !text-white">
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
        <h2 className="text-6xl font-bold text-center mb-16 text-[#3A3A3A]">PHILOSOPHY</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-lg p-8 border border-[#E5E5E5]">
              {/* Om symbol watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text
                    x="200"
                    y="240"
                    fontSize="200"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="#1B7CB8"
                    fontFamily="Georgia, serif"
                  >
                    ॐ
                  </text>
                </svg>
              </div>

              {/* Text content */}
              <div className="relative z-10 space-y-6">
                {philosophyContent.map((paragraph, idx) => (
                  <p key={idx} className="text-[#666666] leading-relaxed text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
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

"use client"

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import Link from "next/link"

const activities = [
  { name: "ACTIVITIES", link: "/activities/" },
  { name: "FESTIVALS", link: "/festivals/" },
]

const festivals = [
  { name: "RATHA YATRA", link: "/festivals/ratha-yatra" },
  { name: "SRI NITYANANDA TRAYODASHI", link: "/festivals/nityananda-trayodashi" },
  { name: "SRI GAURA PURNIMA", link: "/festivals/gaura-purnima" },
]

const galleryImages = [
  { id: 1, alt: "Krishna temple deity" },
  { id: 2, alt: "Temple interior" },
  { id: 3, alt: "Festival celebration" },
  { id: 4, alt: "Spiritual gathering" },
  { id: 5, alt: "Temple decoration" },
  { id: 6, alt: "Community event" },
]

export default function GalleryPage() {
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
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">DAKṢIṆA DVĀRAKĀ DHĀMA</h1>
              <p className="text-2xl md:text-3xl font-light mb-6">
                Cultural Complex to promote and preserve Indian heritage
              </p>
            </div>
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
        <h2 className="text-6xl font-bold text-center mb-16 text-[#3A3A3A]">GALLERY</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            {/* Gallery Grid 2x3 */}
            <div className="grid grid-cols-2 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="relative h-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-[#1B7CB8] to-[#E8725C]"
                >
                  <img
                    src={`/.jpg?key=j2v4h&height=288&width=288&query=${encodeURIComponent(image.alt)}`}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
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

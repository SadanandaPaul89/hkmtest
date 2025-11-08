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

const biographyContent = [
  'His Divine Grace A. C. Bhaktivedanta Swami Prabhupada is the founder Acharya of ISKCON. He travelled to New York in 1965 at the age of 69, to spread the teachings of Lord Chaitanya. Srila Prabhupada visited Chennai in 1972 and 1975 and began the Chennai chapter of ISKCON. He specifically told his disciples to build a "gorgeous temple" in Chennai.',
  "His Divine Grace A. C. Bhaktivedanta Swami Prabhupada was born in 1896 in Calcutta, India. He first met his spiritual master, Srila Bhaktisiddhanta Sarasvati Gosvami, in Calcutta in 1922. Bhaktisiddhanta Sarasvati, a prominent devotional scholar and the founder of sixty-four branches of Gaudiya Mathas (Vedic institutes), liked this educated young man and convinced him to dedicate his life to teaching Vedic knowledge in the Western world. Srila Prabhupada became his student, and eleven years later (1933) at Allahabad, he became his formally initiated disciple.",
  "At their first meeting, in 1922, Srila Bhaktisiddhanta Sarasvati Thakura requested Srila Prabhupada to broadcast Vedic knowledge through the English language. In the years that followed, Srila Prabhupada wrote a commentary on the Bhagavad-gita and in 1944, without assistance, started an English fortnightly magazine.",
  "Recognizing Srila Prabhupada's philosophical learning and devotion, the Gaudiya Vaisnava Society honored him in 1947 with the title \"Bhaktivedanta.\" In 1950, at the age of fifty-four, Srila Prabhupada retired from married life, and four years later he adopted the vanaprastha (retired) order to devote more time to his studies and writing. Srila Prabhupada traveled to the holy city of Vrndavana, where he lived in very humble circumstances in the historic medieval temple of Radha-Damodara. There he engaged for several years in deep study and writing. He accepted the renounced order of life (sannyasa) in 1959. At Radha-Damodara, Srila Prabhupada began work on his life's masterpiece: a multivolume translation and commentary on the 18,000-verse Srimad-Bhagavatam (Bhagavata Purana). He also wrote Easy Journey to Other Planets.",
  "After publishing three volumes of Bhagavatam, Srila Prabhupada came to the United States, in 1965, to fulfill the mission of his spiritual master. Since that time, His Divine Grace has written over sixty volumes of authoritative translations, commentaries and summary studies of the philosophical and religious classics of India.",
  "In 1965, when he first arrived by freighter in New York City, Srila Prabhupada was practically penniless. It was after almost a year of great difficulty that he established the International Society for Krishna Consciousness in July of 1966. Under his careful guidance, the Society grew within a decade to a worldwide confederation of almost one hundred asramas, schools, temples, institutes and farm communities.",
  "In 1968, Srila Prabhupada created New Vrndavana, an experimental Vedic community in the hills of West Virginia. Inspired by the success of New Vrndavana, then a thriving farm community of more than one thousand acres, his students founded several similar communities in the United States and abroad.",
  "In 1972, His Divine Grace introduced the Vedic system of primary and secondary education in the West by founding the Gurukula school in Dallas, Texas. The school began with three children in 1972, and by the beginning of 1975 the enrollment had grown to one hundred fifty.",
  "Srila Prabhupada also inspired the construction of a large international center at Sridhama Mayapur in West Bengal, India, which is also the site for a planned Institute of Vedic Studies. A similar project is the magnificent Krsna-Balarama Temple and International Guest House in Vrndavana, India. These are centers where Westerners can live to gain firsthand experience of Vedic culture.",
  "Srila Prabhupada's most significant contribution, however, is his books. Highly respected by the academic community for their authoritativeness, depth and clarity, they are used as standard textbooks in numerous universities. His writings have been translated into over eighty languages. The Bhaktivedanta Book Trust, established in 1972 exclusively to publish the works of His Divine Grace, has thus become the world's largest publisher of books in the field of Indian religion and philosophy.",
  "Srila Prabhupada left us a veritable library of Vedic philosophy and culture. Highly respected by scholars for their authority, depth, and clarity, his books are used at colleges and universities around the world.",
]

export default function SrilaPrabhupadaPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

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
        <h2 className="text-6xl font-bold text-center mb-16 text-[#3A3A3A]">SRILA PRABHUPADA</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            <div className="mb-12 flex justify-center">
              <img
                src="/placeholder.svg?key=fm4rb"
                alt="Srila Prabhupada"
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>

            <div className="space-y-6">
              {biographyContent.map((paragraph, idx) => (
                <p key={idx} className="text-[#666666] leading-relaxed text-justify">
                  {paragraph}
                </p>
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

import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const donationOptions = [
  {
    title: "How to Donate",
    description: "Learn about different ways to support our mission",
    link: "/donate/how-to-donate",
    icon: "💳",
  },
  {
    title: "Recent Causes",
    description: "See where your donations are making a difference",
    link: "/donate/recent-causes",
    icon: "❤️",
  },
  {
    title: "FAQs",
    description: "Common questions about donations and giving",
    link: "/donate/faqs",
    icon: "❓",
  },
  {
    title: "SevaKartas",
    description: "Join our recurring giving program",
    link: "/donate/sevakartas",
    icon: "🙏",
  },
]

const paymentMethods = [
  {
    name: "Pandava Seva",
    description: "Monthly giving program",
    link: "/donate/pandava-seva",
  },
  {
    name: "Sudama Seva",
    description: "Quarterly giving program",
    link: "/donate/sudama-seva",
  },
  {
    name: "Gopala Seva",
    description: "Annual giving program",
    link: "/donate/gopala-seva",
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A]">
      <NavbarDemo />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?key=donate')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Support Our Mission</h1>
          <p className="text-xl md:text-2xl text-gray-100">Help Spread Krishna Consciousness</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Introduction */}
        <div className="mb-12 bg-white rounded-lg p-8 border-l-4 border-[#FFB81C]">
          <h2 className="text-2xl font-bold mb-4 text-[#1B7CB8]">Your Generosity Makes a Difference</h2>
          <p className="text-[#666666] leading-relaxed mb-4">
            The Hare Krishna Movement Chennai relies on the generous support of devotees and well-wishers to continue
            our spiritual programs, community service, and outreach activities. Your donation helps us spread Krishna
            Consciousness and serve humanity with compassion.
          </p>
          <p className="text-[#666666] leading-relaxed">
            Every contribution, no matter the size, is deeply appreciated and used responsibly to further our mission.
            We maintain the highest standards of transparency and accountability in managing donations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationOptions.map((option) => (
            <Link key={option.link} href={option.link}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-[#FFB81C] hover:border-[#E8725C]">
                <CardHeader className="bg-gradient-to-br from-[#FFF9F0] to-white">
                  <div className="text-4xl mb-2">{option.icon}</div>
                  <CardTitle className="text-[#1B7CB8]">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-[#666666] text-sm">{option.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Giving Programs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-[#1B7CB8]">Recurring Giving Programs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <Link key={method.link} href={method.link}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-[#E8725C] border-2">
                  <CardHeader className="bg-[#FFF9F0]">
                    <CardTitle className="text-[#1B7CB8]">{method.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-[#666666]">{method.description}</p>
                    <button className="w-full px-4 py-2 bg-[#1B7CB8] text-white rounded hover:bg-[#E8725C] transition-colors">
                      Learn More
                    </button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Donate */}
        <div className="bg-gradient-to-r from-[#FFF9F0] to-white rounded-lg p-8 border-2 border-[#FFB81C]">
          <h3 className="text-2xl font-bold mb-6 text-[#1B7CB8]">Where Your Donation Goes</h3>
          <div className="grid md:grid-cols-2 gap-6 text-[#666666]">
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Spiritual Programs</p>
                <p>Supporting classes, discourses, and meditation sessions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Community Service</p>
                <p>Funding outreach programs and charitable initiatives.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Youth Programs</p>
                <p>Supporting FOLK and youth empowerment initiatives.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#E8725C] font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-[#3A3A3A] mb-1">Temple Operations</p>
                <p>Maintaining our sacred space and daily activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

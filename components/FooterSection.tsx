import { Button } from "@/components/ui/button"
import { Compass } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative z-10 py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#1B7CB8] p-12 shadow-sm">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Compass className="w-6 h-6 text-[#FFB81C]" />
                <span className="text-xl font-semibold text-white">Hare Krishna Movement, Chennai</span>
              </div>
              <p className="text-white/90 leading-relaxed text-pretty">
                An affiliate of Srila Prabhupada's ISKCON, spreading the timeless wisdom of the Bhagavad-gita through a variety of spiritual and social initiatives across Chennai.
              </p>
            </div>

            {/* Programs Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">PROGRAMS</h3>
              <ul className="space-y-3">
                {["Gita Life", "ICVK (For Kids)", "FOLK (For Youth)", "Srila Prabhupada Ashray"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#FFB81C] transition-colors text-sm leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">ABOUT</h3>
              <ul className="space-y-3">
                {["Our Mission", "Srila Prabhupada", "Our Team", "Spiritual Guidance"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#FFB81C] transition-colors text-sm leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">RESOURCES</h3>
              <ul className="space-y-3">
                {["Help Center", "Contact Us", "FAQ", "Donate"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#FFB81C] transition-colors text-sm leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/20 pt-12 mb-12">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold mb-4 text-white">Get Spiritual Updates</h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 ring-1 ring-white/20 border-0 text-white placeholder:text-white/60 focus:ring-2 focus:ring-[#FFB81C] focus:outline-none"
                />
                <Button className="bg-[#FFB81C] text-[#3A3A3A] hover:bg-[#E5A519] rounded-lg px-6 h-[50px] shadow-lg font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70 text-sm text-center">© 2025 Hare Krishna Movement, Chennai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

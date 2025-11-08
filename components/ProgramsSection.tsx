import { Sparkles, ShieldCheck, Wallet, Leaf } from "lucide-react"

export default function ProgramsSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Gita Life */}
          <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1B7CB8]/10 ring-1 ring-[#1B7CB8]/20 mb-6">
              <Sparkles className="w-6 h-6 text-[#1B7CB8]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">Gita Life</h3>
            <p className="text-[#666666] leading-relaxed">Bhagavad Gita Sessions on Sunday evening, 5:00 pm to 7:00 pm, at Chennai.</p>
          </div>

          {/* ICVK (For Kids) */}
          <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFB81C]/10 ring-1 ring-[#FFB81C]/20 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#FFB81C]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">ICVK (For Kids)</h3>
            <p className="text-[#666666] leading-relaxed">India Culture and values for kids - ICVK offers a spiritual dimension.</p>
          </div>

          {/* FOLK (For Youth) */}
          <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8725C]/10 ring-1 ring-[#E8725C]/20 mb-6">
              <Wallet className="w-6 h-6 text-[#E8725C]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">FOLK (For Youth)</h3>
            <p className="text-[#666666] leading-relaxed">Youth wing of the Hare Krishna Movement, Chennai empowering youth spiritually.</p>
          </div>

          {/* Srila Prabhupada Ashray */}
          <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1B7CB8]/10 ring-1 ring-[#1B7CB8]/20 mb-6">
              <Leaf className="w-6 h-6 text-[#1B7CB8]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">Srila Prabhupada Ashray</h3>
            <p className="text-[#666666] leading-relaxed">HKM Chennai provides a great opportunity to receive shelter of a pure devotee.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

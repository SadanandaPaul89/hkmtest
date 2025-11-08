import { Button } from "@/components/ui/button"

export default function AdditionalProgramsSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white ring-1 ring-[#E5E5E5] p-12 shadow-sm">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-[#3A3A3A]">
              More at HKM Chennai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Anna-daan Program */}
            <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 h-80 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="text-3xl font-bold text-[#1B7CB8] mb-4">01.</div>
                <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">Anna-daan Program</h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Extend support for our free food distribution initiative bringing nourishment to those in need across Chennai.
                </p>
              </div>
            </div>

            {/* House Kirtan */}
            <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 h-80 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="text-3xl font-bold text-[#FFB81C] mb-4">02.</div>
                <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">House Kirtan</h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Host kirtan and katha at your home, inviting Sadhus to create a sacred atmosphere for your family and community.
                </p>
              </div>
            </div>

            {/* Dham Yatra */}
            <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 h-80 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="text-3xl font-bold text-[#E8725C] mb-4">03.</div>
                <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">Dham Yatra</h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Join Tirth Yatra at sacred places like Vrindavan, Mayapur, Dwarka, Srirangam and experience divine pilgrimage.
                </p>
              </div>
            </div>

            {/* Festivals */}
            <div className="rounded-2xl bg-white ring-1 ring-[#E5E5E5] p-8 h-80 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="text-3xl font-bold text-[#1B7CB8] mb-4">04.</div>
                <h3 className="text-xl font-semibold mb-4 text-[#3A3A3A]">Festivals</h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  Participate in upcoming festival celebrations including Janmashtami, Radhastami, and other sacred occasions.
                </p>
              </div>
            </div>
          </div>

          {/* Check Availability Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#1B7CB8] text-white hover:bg-[#156399] rounded-full px-12 py-4 text-lg font-semibold shadow-lg"
            >
              Join Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

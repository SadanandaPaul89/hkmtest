"use client"
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import logo from "@/public/hkmlogo.jpg"

export default function NavbarDemo() {
  const router = useRouter()

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Temple",
      link: "/temple",
    },
    {
      name: "Srila Prabhupada",
      link: "/srila-prabhupada",
    },
    {
      name: "Philosophy",
      link: "/philosophy",
    },
    {
      name: "Activities",
      link: "/activities",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)

  return (
    <Navbar>
      <NavBody>
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <CustomNavbarLogo />
          <DesktopNavItems items={navItems} />
          <div className="flex items-center gap-4 flex-shrink-0">
            <NavbarButton
              as="button"
              variant="primary"
              className="bg-[#1B7CB8] text-white hover:bg-[#156399] shadow-[0_4px_14px_0_rgba(27,124,184,0.4)] hover:shadow-[0_6px_20px_0_rgba(27,124,184,0.6)] transition-all duration-200"
              onClick={() => router.push("/donate")}
            >
              DONATE NOW
            </NavbarButton>
          </div>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <CustomNavbarLogo />
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <div key={`mobile-link-${idx}`} className="w-full">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => setExpandedSubmenu(expandedSubmenu === item.name ? null : item.name)}
                    className="flex w-full items-center justify-between py-2 text-[#3A3A3A] font-medium"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedSubmenu === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedSubmenu === item.name && (
                    <div className="ml-4 space-y-2 border-l-2 border-[#FFFFFF] pl-4">
                      {item.submenu.map((subitem, subidx) => (
                        <Link
                          key={`mobile-sublink-${subidx}`}
                          href={subitem.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-[#666666] hover:text-[#1B7CB8]"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#FFFFFF] font-medium hover:text-[#FFFFFF] hover:scale-105 transition-all duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="flex w-full flex-col gap-4 border-t border-[#E5E5E5] pt-4">
            <NavbarButton
              as="button"
              variant="primary"
              className="w-full bg-[#1B7CB8] text-white hover:bg-[#156399] shadow-[0_4px_14px_0_rgba(27,124,184,0.4)] hover:shadow-[0_6px_20px_0_rgba(27,124,184,0.6)] transition-all duration-200"
              onClick={() => {
                router.push("/donate")
                setIsMobileMenuOpen(false)
              }}
            >
              DONATE NOW
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}

const DesktopNavItems = ({
  items,
}: {
  items: Array<{
    name: string
    link: string
    submenu?: Array<{ name: string; link: string }>
  }>
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="hidden flex-1 flex-row items-center justify-center gap-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex">
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link
            href={item.link}
            className="relative px-3 py-2 text-[#FFFFFF] flex items-center gap-1 hover:text-[#FFFFFF] hover:scale-110 whitespace-nowrap transition-all duration-200"
          >
            {item.name}
            {item.submenu && (
              <ChevronDown
                className={`w-4 h-4 transition-transform ${hoveredItem === item.name ? "rotate-180" : ""}`}
              />
            )}
          </Link>

          {item.submenu && hoveredItem === item.name && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-[#E5E5E5] py-2 z-50">
              {item.submenu.map((subitem, subidx) => (
                <Link
                  key={`sublink-${subidx}`}
                  href={subitem.link}
                  className="block px-4 py-2 text-[#666666] hover:bg-[#FFF9F0] hover:text-[#1B7CB8] transition-colors"
                >
                  {subitem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const CustomNavbarLogo = () => {
  return (
    <Link href="/" className="relative z-20 flex-shrink-0 flex items-center gap-2 px-2 py-1 text-sm font-normal">
      <img src={logo.src || "/placeholder.svg"} alt="HKM Logo" className="h-10 w-auto" loading="eager" />
    </Link>
  )
}

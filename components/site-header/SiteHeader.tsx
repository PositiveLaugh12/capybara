'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Capys', href: '#capys' },
]

export default function SiteHeader() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderHidden(true)
      } else {
        setIsHeaderHidden(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-300 ease-in-out sm:px-6 lg:px-8 ${
        isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <header className="mx-auto flex w-full max-w-6xl items-center gap-4 rounded-[2rem] bg-[#123C69] px-4 py-4 shadow-[0_18px_50px_rgba(18,60,105,0.2)] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#eee2dc] ring-4 ring-[#ac3b61]/25 transition-transform duration-300 ease-out hover:scale-105"
          aria-label="Capybara logo"
        >
          <Image
            src="/image/capybara-color-flat-icon-digital-260nw-2666687199.webp"
            alt="Capybara logo"
            width={56}
            height={56}
            className="h-full w-full object-cover"
            priority
          />
        </a>

        <div className="hidden min-w-0 flex-1 items-center gap-3 md:flex">
          <div className="h-px flex-1 bg-[#eee2dc]/20" />
          <div className="rounded-full border border-[#eee2dc]/15 bg-[#eee2dc]/10 px-4 py-2 text-sm font-medium text-[#eee2dc]">
            Today you will discover the world of capybaras
          </div>
          <div className="h-px flex-1 bg-[#eee2dc]/20" />
        </div>

        <nav aria-label="Main navigation" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-2 rounded-full bg-[#eee2dc] p-2 shadow-sm ring-1 ring-[#bab2b5]/40">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-[#123C69] transition-colors hover:bg-[#edc7b7] hover:text-[#ac3b61]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}
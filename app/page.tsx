'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import SiteHeader from '../components/site-header/SiteHeader'
import SiteFooter from '../components/site-footer/SiteFooter'
import TopSection from '../components/sections/top/TopSection'
import AboutSection from '../components/sections/about/AboutSection'
import GallerySection from '../components/sections/gallery/GallerySection'
import CapysSection from '../components/sections/capys/CapysSection'

export default function Page() {
  const [currentHash, setCurrentHash] = useState('')

  const background = (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Image
        src="/image/Gemini_Generated_Image_7xqd4v7xqd4v7xqd.png"
        alt="Capybara themed background"
        fill
        priority
        className="scale-105 object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-[#123C69]/12" />
    </div>
  )

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash)
    }

    updateHash()
    window.addEventListener('hashchange', updateHash)

    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  if (currentHash === '#gallery') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#eee2dc] text-[#123C69]">
        {background}
        <SiteHeader />
        <main className="relative z-10">
          <GallerySection />
        </main>
        <SiteFooter />
      </div>
    )
  }

  if (currentHash === '#about') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#eee2dc] text-[#123C69]">
        {background}
        <SiteHeader />
        <main className="relative z-10">
          <AboutSection />
        </main>
        <SiteFooter />
      </div>
    )
  }

  if (currentHash === '#capys') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#eee2dc] text-[#123C69]">
        {background}
        <SiteHeader />
        <main className="relative z-10">
          <CapysSection />
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eee2dc] text-[#123C69]">
      {background}
      <SiteHeader />

      <main className="relative z-10">
        <TopSection />
        <AboutSection />
        <GallerySection />
        <CapysSection />
      </main>
      <SiteFooter />
    </div>
  )
}

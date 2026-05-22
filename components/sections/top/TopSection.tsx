'use client'

import { useEffect, useRef, useState } from 'react'
import SectionDetailGrid from '../../section-detail-grid/SectionDetailGrid'
import SectionFooter from '../../section-footer/SectionFooter'

const sectionCards = [
  {
    title: 'About Capybaras',
    desc: 'Meet the world’s largest rodent: calm, social, and surprisingly curious. Learn how they live and thrive in their habitats.',
    href: '#about',
  },
  {
    title: 'Gallery',
    desc: 'A gentle collection of capybara moments: relaxed, playful, and beautifully candid.',
    href: '#gallery',
  },
  {
    title: 'Our Capys',
    desc: 'Quick facts and traits about capybaras — social habits, favorite foods, and why they charm so many people.',
    href: '#capys',
  },
]

const cardGradients = [
  'from-[#f7efe9] to-[#efe1d8]',
  'from-[#e6eef6] to-[#d6e6ee]',
  'from-[#f7d2cf] to-[#edc7b7]',
]

export default function TopSection() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isCardsVisible, setIsCardsVisible] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const heroElement = heroRef.current

    if (!heroElement) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true)
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(heroElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const cardsElement = cardsRef.current

    if (!cardsElement) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    observer.observe(cardsElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="top" className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 scroll-mt-36">
      <section
        ref={heroRef}
        className={`group relative mt-20 overflow-hidden rounded-[2.25rem] px-6 py-10 transition-[transform,opacity,box-shadow] duration-1000 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(18,60,105,0.18)] sm:mt-24 sm:px-10 sm:py-14 lg:mt-28 lg:px-14 lg:py-16 ${
          isHeroVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{
          transform: isHeroVisible ? 'translateY(0) scale(1)' : 'translateY(1.75rem) scale(0.96)',
        }}
      >
        <div className="absolute inset-0 rounded-[2.25rem] bg-[#edc7b7] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_24px_60px_rgba(18,60,105,0.16)]" />
        <div className="absolute inset-2.5 rounded-[1.9rem] border border-[#eee2dc]/70 bg-[#edc7b7]/35" />
        <div className="absolute right-6 top-6 h-24 w-24 rounded-3xl bg-[#eee2dc] opacity-85 shadow-[0_14px_26px_rgba(18,60,105,0.14)] transition-transform duration-500 group-hover:scale-110 sm:right-8 sm:top-8 sm:h-28 sm:w-28" />
        <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-4xl bg-[#ac3b61] opacity-15 transition-all duration-500 group-hover:opacity-25 sm:h-40 sm:w-40" />

        <div className="relative max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-[#eee2dc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#ac3b61] shadow-[0_10px_24px_rgba(18,60,105,0.08)]">
            Today you will discover
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#123C69] sm:text-5xl lg:text-6xl">
            The world of capybaras: what they love and why they are so interesting
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#3b312c] sm:text-lg">
            A calm and elegant look at how capybaras live, what they enjoy, and why
            these gentle animals are so memorable.
          </p>
        </div>
      </section>

        <section ref={cardsRef} className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid gap-7 md:grid-cols-3 lg:gap-10">
            {sectionCards.map((item, index) => (
              <article
                key={item.href}
                aria-labelledby={`card-${index}-title`}
                className={`group h-52 rounded-4xl border border-[#e6dcd8] bg-linear-to-br ${cardGradients[index]} shadow-[0_20px_48px_rgba(18,60,105,0.06)] p-6 flex flex-col justify-between transition-[transform,opacity,box-shadow,filter] duration-350 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_26px_60px_rgba(18,60,105,0.14)] hover:brightness-105 sm:h-60 lg:h-72 ${
                  isCardsVisible
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none translate-y-6 scale-[1.14] opacity-0'
                } hover:-translate-y-2 hover:scale-105 hover:shadow-[0_26px_60px_rgba(18,60,105,0.12)] focus:outline-none`}
                style={{
                  transitionDelay: isCardsVisible ? `${index * 140}ms` : '0ms',
                }}
              >
                <div>
                  <h3 id={`card-${index}-title`} className="text-2xl font-semibold text-[#123C69] transition-colors duration-300 group-hover:text-[#ac3b61] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#3b312c] transition-transform duration-300 group-hover:translate-x-0.5 sm:text-lg">{item.desc}</p>
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#ac3b61] px-3 py-1 text-xs font-medium text-white shadow-sm transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#8f304f]"
                  >
                    Learn
                  </a>
                </div>
              </article>
            ))}
          </div>

          <SectionDetailGrid
            eyebrow="More to explore"
            title="A few extra notes for the top section"
            note="These little cards keep the opening section feeling fuller while staying in the same calm visual style."
            items={[
              {
                title: 'Slow pace',
                text: 'Everything starts gently, with soft spacing and warm color blocks.',
                background: 'bg-[#f7efe9]',
              },
              {
                title: 'Water calm',
                text: 'Capybaras stay relaxed near water, so the layout feels spacious.',
                background: 'bg-[#e6eef6]',
              },
              {
                title: 'Group energy',
                text: 'The page keeps a friendly, social rhythm from section to section.',
                background: 'bg-[#edc7b7]',
              },
            ]}
          />

          <SectionFooter
            label="Top section"
            note="A quick start for the capybara story — jump into the next section when you’re ready."
            href="#about"
            linkLabel="Go to About"
          />
        </section>
    </section>
  )
}
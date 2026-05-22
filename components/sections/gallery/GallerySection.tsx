import Image from 'next/image'
import SectionDetailGrid from '../../section-detail-grid/SectionDetailGrid'

const galleryImages = [
  {
    src: '/image/GettyImages-460739676.0.0.1447444357.webp',
    alt: 'Capybara resting near water',
  },
  {
    src: '/image/Hydrochoeris_hydrochaeris_in_Brazil_in_Petrópolis,_Rio_de_Janeiro,_Brazil_09.jpg',
    alt: 'Capybara in a natural setting',
  },
  {
    src: '/image/capibara-graast-gras-aquazoo-leeuwarden.jpg',
    alt: 'Capybara grazing in grass',
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl scroll-mt-36 px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="group relative overflow-hidden rounded-[2.25rem] border border-[#d7e2ea] bg-[#e6eef6]/90 p-6 shadow-[0_20px_48px_rgba(18,60,105,0.08)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(18,60,105,0.12)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -left-4 top-10 h-20 w-20 rounded-3xl bg-[#123C69] opacity-10 transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24" />
        <div className="pointer-events-none absolute right-8 top-8 h-14 w-14 rounded-[1.2rem] bg-[#ac3b61] opacity-15 transition-all duration-500 group-hover:opacity-25 group-hover:scale-110 sm:h-16 sm:w-16" />
        <div className="pointer-events-none absolute bottom-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-[1.25rem] bg-[#edc7b7] opacity-45 transition-all duration-500 group-hover:scale-125 group-hover:opacity-60 sm:h-20 sm:w-20" />
        <div className="pointer-events-none absolute -right-6 bottom-14 h-24 w-24 rounded-[1.75rem] bg-[#123C69] opacity-8 transition-transform duration-500 group-hover:scale-110 sm:h-28 sm:w-28" />

        <div className="relative max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-[#123C69] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#eee2dc]">
            Gallery
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#123C69] sm:text-4xl">
            Quiet moments from the capybara world
          </h2>
          <p className="mt-4 text-base leading-7 text-[#3b312c] sm:text-lg">
            A small visual set that keeps the page anchored to the gallery section and
            gives each image enough space to breathe.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="group overflow-hidden rounded-[1.75rem] border border-[#d7e2ea] bg-white shadow-[0_16px_38px_rgba(18,60,105,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_48px_rgba(18,60,105,0.14)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1800}
                height={900}
                  className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-72 lg:h-80"
              />
            </figure>
          ))}
        </div>

        <SectionDetailGrid
          eyebrow="Visual notes"
          title="Small design details for the gallery"
          note="These blocks make the section feel more complete while keeping the images as the main focus."
          items={[
            {
              title: 'Soft light',
              text: 'Bright, airy tones help the photos feel calm and natural.',
              background: 'bg-[#f7efe9]',
            },
            {
              title: 'Rounded frames',
              text: 'The larger radius matches the cozy capybara mood.',
              background: 'bg-[#eee2dc]',
            },
            {
              title: 'Warm accents',
              text: 'A few colored squares keep the layout from feeling flat.',
              background: 'bg-[#edc7b7]',
            },
          ]}
        />

      </div>
    </section>
  )
}
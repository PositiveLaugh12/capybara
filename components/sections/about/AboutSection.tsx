import SectionDetailGrid from '../../section-detail-grid/SectionDetailGrid'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-36 px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="group grid gap-8 rounded-[2.25rem] border border-[#e6dcd8] bg-[#f7efe9]/90 p-6 shadow-[0_20px_48px_rgba(18,60,105,0.08)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(18,60,105,0.12)] sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-[#123C69] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#eee2dc]">
            About capybaras
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#123C69] sm:text-4xl">
            Calm, social, and easy to recognize
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#3b312c] sm:text-lg">
            Capybaras are the largest rodents in the world. They live near water, enjoy
            company, and spend a lot of time resting, swimming, and grazing. That mix
            of calm behavior and strong social habits is what makes them feel so unique.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <article className="rounded-[1.5rem] bg-[#edc7b7] p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_34px_rgba(18,60,105,0.10)]">
            <h3 className="text-lg font-semibold text-[#123C69]">Habitat</h3>
            <p className="mt-2 text-sm leading-6 text-[#3b312c]">
              Wetlands, riverbanks, and grassy areas close to water.
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[#eee2dc] p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_34px_rgba(18,60,105,0.10)]">
            <h3 className="text-lg font-semibold text-[#123C69]">Social life</h3>
            <p className="mt-2 text-sm leading-6 text-[#3b312c]">
              They usually travel in groups and are very comfortable around others.
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[#f7d2cf] p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_34px_rgba(18,60,105,0.10)]">
            <h3 className="text-lg font-semibold text-[#123C69]">Diet</h3>
            <p className="mt-2 text-sm leading-6 text-[#3b312c]">
              Mostly grasses, aquatic plants, and other fresh greenery.
            </p>
          </article>
        </div>

        <SectionDetailGrid
          eyebrow="Extra details"
          title="A second layer of information"
          note="This gives the about section a fuller look without breaking the soft, editorial layout."
          items={[
            {
              title: 'Mostly herbivores',
              text: 'Their simple diet keeps the section grounded and easy to scan.',
              background: 'bg-[#eee2dc]',
            },
            {
              title: 'Built for water',
              text: 'Their bodies are made for swimming and staying cool.',
              background: 'bg-[#f7efe9]',
            },
            {
              title: 'Group animals',
              text: 'They feel more natural when shown as part of a gentle cluster.',
              background: 'bg-[#e6eef6]',
            },
          ]}
        />

      </div>
    </section>
  )
}
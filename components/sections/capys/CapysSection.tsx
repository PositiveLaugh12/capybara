import SectionDetailGrid from '../../section-detail-grid/SectionDetailGrid'

export default function CapysSection() {
  return (
    <section id="capys" className="mx-auto w-full max-w-6xl scroll-mt-36 px-4 pb-28 pt-36 sm:px-6 lg:px-8">
      <div className="group grid gap-8 rounded-[2.25rem] border border-[#e6dcd8] bg-[#f7d2cf]/85 p-6 shadow-[0_20px_48px_rgba(18,60,105,0.08)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(18,60,105,0.12)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="rounded-[1.75rem] bg-[#123C69] p-6 text-[#eee2dc] shadow-[0_18px_40px_rgba(18,60,105,0.18)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_22px_48px_rgba(18,60,105,0.24)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#edc7b7]">
            Our Capys
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Gentle animals with a big personality
          </h2>
          <p className="mt-4 text-base leading-7 text-[#eee2dc]/90">
            Capybaras are famous for their relaxed nature, their love of water, and the
            way they seem to get along with everyone around them.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <article className="rounded-3xl bg-[#eee2dc] p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_34px_rgba(18,60,105,0.10)]">
            <h3 className="text-lg font-semibold text-[#123C69]">Favorite place</h3>
            <p className="mt-2 text-sm leading-6 text-[#3b312c]">
              Near water, where they can cool off and stay calm.
            </p>
          </article>
          <article className="rounded-3xl bg-[#edc7b7] p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_34px_rgba(18,60,105,0.10)]">
            <h3 className="text-lg font-semibold text-[#123C69]">Favorite mood</h3>
            <p className="mt-2 text-sm leading-6 text-[#3b312c]">
              Peaceful, social, and content to stay close to the group.
            </p>
          </article>
          <article className="rounded-3xl bg-[#f7efe9] p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_34px_rgba(18,60,105,0.10)]">
            <h3 className="text-lg font-semibold text-[#123C69]">Why people like them</h3>
            <p className="mt-2 text-sm leading-6 text-[#3b312c]">
              Their calm presence and friendly look make them memorable.
            </p>
          </article>
        </div>

        <SectionDetailGrid
          eyebrow="Extra facts"
          title="A slightly fuller closing block"
          note="This adds one more layer under the capybara facts so the section feels more complete."
          items={[
            {
              title: 'Friendly energy',
              text: 'The final section keeps the tone gentle and welcoming.',
              background: 'bg-[#eee2dc]',
            },
            {
              title: 'Nature focus',
              text: 'It stays aligned with the natural colors and soft blocks above.',
              background: 'bg-[#f7efe9]',
            },
            {
              title: 'Clean finish',
              text: 'The last row makes the page feel more finished and deliberate.',
              background: 'bg-[#e6eef6]',
            },
          ]}
        />

      </div>
    </section>
  )
}
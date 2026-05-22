type SectionDetailGridProps = {
  eyebrow: string
  title: string
  note: string
  items: Array<{
    title: string
    text: string
    background: string
  }>
}

export default function SectionDetailGrid({ eyebrow, title, note, items }: SectionDetailGridProps) {
  return (
    <section className="group mt-8 rounded-4xl border border-white/60 bg-white/55 p-5 shadow-[0_16px_34px_rgba(18,60,105,0.06)] backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(18,60,105,0.10)] sm:p-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ac3b61]">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#123C69] sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#3b312c] sm:text-base">{note}</p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className={`group rounded-3xl border border-[#e6dcd8] p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_34px_rgba(18,60,105,0.10)] ${item.background}`}
          >
            <div className="mb-4 h-3 w-14 rounded-full bg-[#123C69]/15 transition-all duration-300 group-hover:w-20 group-hover:bg-[#123C69]/25" />
            <h4 className="text-lg font-semibold text-[#123C69]">{item.title}</h4>
            <p className="mt-2 text-sm leading-6 text-[#3b312c]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
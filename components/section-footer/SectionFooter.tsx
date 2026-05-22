type SectionFooterProps = {
  label: string
  note: string
  href: string
  linkLabel: string
}

export default function SectionFooter({ label, note, href, linkLabel }: SectionFooterProps) {
  return (
    <footer className="mt-8 flex flex-col gap-4 border-t border-[#e6dcd8] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ac3b61]">{label}</p>
        <p className="mt-2 text-sm leading-6 text-[#3b312c]">{note}</p>
      </div>

      <a
        href={href}
        className="inline-flex items-center justify-center rounded-full bg-[#123C69] px-4 py-2 text-sm font-medium text-[#eee2dc] shadow-[0_10px_24px_rgba(18,60,105,0.14)] transition-transform duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#0f3257]"
      >
        {linkLabel}
      </a>
    </footer>
  )
}
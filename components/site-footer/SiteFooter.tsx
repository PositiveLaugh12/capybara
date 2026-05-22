export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505] px-4 py-8 text-[#eee2dc] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
            Capybara World
          </p>
          <p className="mt-2 text-sm leading-6 text-white/75">
            Calm visuals, soft colors, and a quiet capybara mood.
          </p>
        </div>

        <p className="text-sm text-white/50">© 2026</p>
      </div>
    </footer>
  )
}
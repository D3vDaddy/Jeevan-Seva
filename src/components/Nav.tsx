import { useEffect, useState } from 'react'
import Logo from './Logo'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
          <span className="text-lg font-bold tracking-tight text-slate-900">Jeevan Seva</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="#download"
            className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 hover:bg-brand-700 transition"
          >
            Download app
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-brand-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-brand-700"
            >
              Download app
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

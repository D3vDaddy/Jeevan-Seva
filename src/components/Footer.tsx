import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight text-slate-900">Jeevan Seva</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Your complete healthcare ecosystem — trusted doctors, secure records, family
              profiles, and emergency support, all in one app.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#features" className="hover:text-slate-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-slate-900">
                  How it works
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-slate-900">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#about" className="hover:text-slate-900">
                  About
                </a>
              </li>
              <li>
                <a href="mailto:support@jeevanseva.app" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Jeevan Seva. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="Twitter" className="hover:text-slate-900">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21l-6.52 7.45L22 22h-6.742l-4.72-6.17L4.8 22H2.04l6.98-7.98L2 2h6.91l4.27 5.66L18.244 2zm-2.37 18.27h1.86L8.2 3.63H6.25l9.624 16.64z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-slate-900">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.47 2.43-.26.66-.6 1.22-1.15 1.77-.55.55-1.11.89-1.77 1.15-.64.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.47a4.92 4.92 0 01-1.77-1.15 4.92 4.92 0 01-1.15-1.77c-.25-.64-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77.55-.55 1.11-.89 1.77-1.15.64-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-2.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-900">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.64h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21H18v-5.36c0-1.28-.03-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V21h-4V9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

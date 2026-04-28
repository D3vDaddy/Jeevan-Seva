type Props = {
  className?: string
  variant?: 'dark' | 'light'
}

export default function StoreButtons({ className = '', variant = 'dark' }: Props) {
  const base =
    variant === 'dark'
      ? 'bg-slate-900 text-white hover:bg-slate-800'
      : 'bg-white text-slate-900 hover:bg-slate-100 ring-1 ring-slate-200'

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href="#"
        className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 transition ${base}`}
        aria-label="Download on the App Store"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="currentColor">
          <path d="M16.365 1.43c0 1.14-.46 2.23-1.21 3.02-.78.83-2.04 1.47-3.18 1.38-.13-1.11.42-2.27 1.17-3.03.82-.83 2.22-1.45 3.22-1.37zM20.5 17.34c-.55 1.27-.82 1.83-1.52 2.95-.98 1.54-2.36 3.46-4.07 3.48-1.52.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.02.98-1.71-.02-3.02-1.76-4-3.3-2.74-4.3-3.03-9.35-1.34-12.03 1.2-1.9 3.1-3.01 4.88-3.01 1.82 0 2.96 1 4.46 1 1.45 0 2.34-1 4.45-1 1.59 0 3.27.87 4.47 2.37-3.93 2.15-3.29 7.78.7 8.54z" />
        </svg>
        <div className="flex flex-col leading-tight text-left">
          <span className="text-[10px] uppercase tracking-wider opacity-80">Download on the</span>
          <span className="text-lg font-semibold">App Store</span>
        </div>
      </a>
      <a
        href="#"
        className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 transition ${base}`}
        aria-label="Get it on Google Play"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
          <path fill="#34a853" d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l9.9-9.7-9.9-9.7z" opacity="0" />
          <path fill="#4285f4" d="M13.5 12L4 21.7c.4 0 .8-.1 1.1-.3l10.7-6.1-2.3-3.3z" opacity="0" />
          <path fill="currentColor" d="M3.6 2.3C3.2 2.7 3 3.3 3 4.1v15.8c0 .8.2 1.4.6 1.8l.1.1 9-9v-.4l-9-9-.1-.1zm12.9 12.1l-3-3 3-3 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 1.6zm.3.3l-3.3-3.3-9.2 9.2c.4.4 1 .4 1.7.1l10.8-6zm-10.9-.3l9.2-9.2-10.8-6c-.7-.4-1.3-.3-1.7.1l3.3 15.1z" />
        </svg>
        <div className="flex flex-col leading-tight text-left">
          <span className="text-[10px] uppercase tracking-wider opacity-80">Get it on</span>
          <span className="text-lg font-semibold">Google Play</span>
        </div>
      </a>
    </div>
  )
}

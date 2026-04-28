import PhoneMockup from './PhoneMockup'
import StoreButtons from './StoreButtons'

export default function Hero() {
  return (
    <section id="download" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-mint-500 animate-pulse" />
              Your health companion — now on iOS &amp; Android
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              All your healthcare needs,{' '}
              <span className="bg-gradient-to-r from-brand-600 to-mint-600 bg-clip-text text-transparent">
                seamlessly connected.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Find trusted doctors, manage appointments, secure health records, and access
              emergency support — all in one intuitive app for you and your family.
            </p>

            <StoreButtons className="mt-8" />

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Stars />
                <span>
                  <strong className="text-slate-900">4.8</strong> · 25k+ reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon />
                <span>HIPAA-ready · end-to-end encrypted</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stars() {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.644 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-mint-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5l7-3z"
      />
    </svg>
  )
}

const benefits = [
  {
    title: 'Unmatched convenience',
    body: 'All your healthcare needs consolidated into one easy-to-use app.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: 'Enhanced accessibility',
    body: 'Access quality medical care regardless of location or time of day.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Peace of mind',
    body: 'Stay prepared for emergencies with organized, secure records.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Empowered decisions',
    body: 'Make informed choices with comprehensive data and trusted providers.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
  {
    title: 'Time & cost savings',
    body: 'Streamline appointments, reduce travel, and avoid misplaced records.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Privacy-first',
    body: 'End-to-end encrypted records, granular sharing, and full data control.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why Jeevan Seva
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built around how real families live.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  {b.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

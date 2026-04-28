const steps = [
  {
    n: '01',
    title: 'Download',
    body: 'Get the Jeevan Seva app from your preferred app store — free to install.',
  },
  {
    n: '02',
    title: 'Create profile',
    body: 'Set up personal and family health profiles in just a few minutes.',
  },
  {
    n: '03',
    title: 'Connect & care',
    body: 'Explore services, book appointments, and manage health with ease.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative isolate overflow-hidden bg-slate-900 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,_rgba(38,128,255,0.25),_transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Up and running in under three minutes.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <span className="text-5xl font-extrabold bg-gradient-to-br from-brand-400 to-mint-300 bg-clip-text text-transparent">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

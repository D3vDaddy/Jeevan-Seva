import { features } from '../data/features'

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need for better health.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Nine powerful tools that work together to simplify how you find, access, and manage
            care for yourself and the people you love.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-sm`}
              >
                <span className="h-6 w-6">{f.icon}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

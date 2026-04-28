export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              About us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Care that reaches further — and goes deeper.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Jeevan Seva was built on a simple belief: healthcare should meet people where they
              are. We started with families navigating overlapping appointments, lost reports, and
              the stress of emergencies. Our mission is to bring trust, care, and convenience to
              your fingertips — so the right help is always one tap away.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Today we work with verified clinicians, hospitals, pharmacies, and labs to give you a
              connected, private, and genuinely useful health companion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { k: '1M+', v: 'App downloads' },
              { k: '12k+', v: 'Verified doctors' },
              { k: '1,800+', v: 'Clinics & hospitals' },
              { k: '4.8★', v: 'Average rating' },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-extrabold bg-gradient-to-r from-brand-600 to-mint-600 bg-clip-text text-transparent">
                  {s.k}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

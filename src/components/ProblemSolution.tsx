const problems = [
  {
    title: 'Struggling to find the right doctor?',
    body: 'Endless searching, unclear reviews, and no visibility into fees or availability.',
  },
  {
    title: 'Appointments and records everywhere?',
    body: 'Paper prescriptions, scattered reports, and missed follow-ups create real risk.',
  },
  {
    title: 'Worried about family emergencies?',
    body: 'In a crisis, every second counts — yet critical info is rarely at your fingertips.',
  },
]

export default function ProblemSolution() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            The problem
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Healthcare today is fragmented. We make it simple.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Jeevan Seva puts a complete healthcare ecosystem in your pocket — connecting you with
            verified professionals, digitizing your health journey, and giving peace of mind.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 3h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-br from-brand-600 to-mint-600 p-8 text-center text-white shadow-lg sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
            The solution
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">
            One app for doctors, appointments, pharmacies, labs, records, family profiles, and
            emergencies — trusted, secure, and always a tap away.
          </p>
        </div>
      </div>
    </section>
  )
}

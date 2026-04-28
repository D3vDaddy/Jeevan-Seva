const testimonials = [
  {
    quote:
      'Jeevan Seva changed how I manage my family’s health — finding the right doctor and keeping records in one place is indispensable.',
    name: 'Anjali Verma',
    role: 'Parent of two, Bengaluru',
  },
  {
    quote:
      'The emergency locator helped us find the nearest hospital with an ambulance in minutes. That feature alone made me recommend it to everyone.',
    name: 'Rahul Iyer',
    role: 'Product manager, Mumbai',
  },
  {
    quote:
      'Booking lab tests with home collection and getting digital reports back instantly is a total game-changer for senior care.',
    name: 'Dr. Meera Nair',
    role: 'General physician',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Loved by users
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by thousands of families.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-brand-300"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6v-6H5.5c0-1.66 1.34-3 3-3V6h-1.33zM17.17 6A5.17 5.17 0 0012 11.17V18h6v-6h-2.5c0-1.66 1.34-3 3-3V6h-1.33z" />
              </svg>
              <blockquote className="mt-3 flex-1 text-base leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

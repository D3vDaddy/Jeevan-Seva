import StoreButtons from './StoreButtons'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-mint-700 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.18),_transparent_55%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to take charge of your health?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          Download Jeevan Seva today and bring your entire healthcare ecosystem into one trusted
          app.
        </p>

        <StoreButtons className="mt-8 justify-center items-center flex-col sm:flex-row" variant="light" />

        <p className="mt-6 text-xs text-white/70">
          Free to download · Available on iOS &amp; Android · No credit card required
        </p>
      </div>
    </section>
  )
}

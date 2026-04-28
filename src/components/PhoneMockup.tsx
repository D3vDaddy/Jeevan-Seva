type Props = { className?: string }

export default function PhoneMockup({ className = '' }: Props) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-[280px] sm:w-[320px]">
        {/* Decorative halo */}
        <div
          aria-hidden="true"
          className="absolute -inset-10 -z-10 rounded-[48px] bg-gradient-to-br from-brand-200/60 via-white to-mint-100/70 blur-2xl"
        />

        {/* Phone frame */}
        <div className="relative rounded-[44px] bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-900/10">
          <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
          <div className="overflow-hidden rounded-[32px] bg-white">
            {/* Status bar */}
            <div className="flex items-center justify-between bg-white px-5 pt-3 pb-1 text-[10px] font-semibold text-slate-500">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="h-2 w-2 rounded-full bg-slate-400" />
              </div>
            </div>

            {/* App header */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-500 px-5 pt-3 pb-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-white/80">Good morning,</p>
                  <p className="text-base font-semibold">Priya Sharma</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-white/20 ring-2 ring-white/30" />
              </div>
              <div className="mt-4 rounded-xl bg-white/15 px-3 py-2 text-sm text-white/90 ring-1 ring-white/20">
                Search doctors, labs, pharmacies…
              </div>
            </div>

            {/* Quick actions */}
            <div className="-mt-5 mx-4 grid grid-cols-4 gap-2 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-100">
              {[
                { label: 'Doctor', color: 'bg-brand-100 text-brand-700' },
                { label: 'Lab', color: 'bg-mint-100 text-mint-700' },
                { label: 'Meds', color: 'bg-amber-100 text-amber-700' },
                { label: 'SOS', color: 'bg-rose-100 text-rose-700' },
              ].map((q) => (
                <div key={q.label} className="flex flex-col items-center gap-1">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${q.color}`}>
                    <span className="text-xs font-bold">{q.label[0]}</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-600">{q.label}</span>
                </div>
              ))}
            </div>

            {/* Upcoming appointment */}
            <div className="mx-4 mt-4">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Upcoming
              </p>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold">
                  DR
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">Dr. Rohan Mehta</p>
                  <p className="text-[11px] text-slate-500">Cardiologist · Today, 4:30 PM</p>
                </div>
                <span className="rounded-full bg-mint-100 px-2 py-0.5 text-[10px] font-semibold text-mint-700">
                  Online
                </span>
              </div>
            </div>

            {/* Family card */}
            <div className="mx-4 mt-3 mb-5">
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-br from-mint-50 to-brand-50 p-3 ring-1 ring-slate-100">
                <div>
                  <p className="text-xs font-semibold text-slate-900">Family profiles</p>
                  <p className="text-[10px] text-slate-500">4 members · all records synced</p>
                </div>
                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full bg-brand-300 ring-2 ring-white" />
                  <span className="h-7 w-7 rounded-full bg-mint-300 ring-2 ring-white" />
                  <span className="h-7 w-7 rounded-full bg-amber-300 ring-2 ring-white" />
                  <span className="h-7 w-7 rounded-full bg-rose-300 ring-2 ring-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = { className?: string }

export default function Logo({ className = 'h-8 w-8' }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2680ff" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#logoGradient)" />
      <path d="M26 14h12v12h12v12H38v12H26V38H14V26h12z" fill="#ffffff" />
    </svg>
  )
}

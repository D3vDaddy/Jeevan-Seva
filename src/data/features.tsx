import type { ReactNode } from 'react'

export type Feature = {
  title: string
  description: string
  icon: ReactNode
  accent: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const features: Feature[] = [
  {
    title: 'Find & Book Doctors',
    description:
      'Search specialists by location, specialty, experience, and fees. View detailed profiles, read reviews, and book instantly — online or in-person.',
    accent: 'from-brand-500 to-brand-700',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20c.8-3.5 4-5.5 7.5-5.5s6.7 2 7.5 5.5" />
      </svg>
    ),
  },
  {
    title: 'Hospital & Clinic Locator',
    description:
      'Discover hospitals, clinics, and nursing homes near you. Filter by type, services, and check for emergency facilities and ambulance availability.',
    accent: 'from-mint-500 to-mint-700',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 21s-7-4.35-7-10a7 7 0 1114 0c0 5.65-7 10-7 10z" />
        <path d="M12 8v5M9.5 10.5h5" />
      </svg>
    ),
  },
  {
    title: 'Pharmacy & Medicine Orders',
    description:
      'Locate pharmacies, upload prescriptions, and order medicines for home delivery. Check operating hours and available services.',
    accent: 'from-amber-500 to-orange-600',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="7" width="18" height="4" rx="1" />
        <path d="M5 11v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
  {
    title: 'Lab Tests & Diagnostics',
    description:
      'Book diagnostic tests with ease. Choose home sample collection and access digital reports the moment they are ready.',
    accent: 'from-violet-500 to-purple-700',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 001.7 3h10.6a2 2 0 001.7-3l-5-9V3" />
        <path d="M7.5 15h9" />
      </svg>
    ),
  },
  {
    title: 'Secure Health Records',
    description:
      'Digitize and store prescriptions, lab reports, and imaging securely. Access anywhere and share with providers in seconds.',
    accent: 'from-sky-500 to-cyan-700',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M6 3h9l4 4v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: 'Family Health Profiles',
    description:
      'Manage everyone you care for from one account. Create individual profiles, track records, and book appointments on their behalf.',
    accent: 'from-pink-500 to-rose-600',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="8" cy="9" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M2.5 20c.7-3 3-5 5.5-5s4.8 2 5.5 5" />
        <path d="M14.5 20c.5-2.3 2-3.8 4-3.8s3.5 1.5 4 3.8" />
      </svg>
    ),
  },
  {
    title: 'Emergency & Alerts',
    description:
      'One-tap access to 108 / 112, instant location sharing with trusted contacts, and quick locator for ambulance-equipped hospitals.',
    accent: 'from-rose-500 to-red-700',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
        <path d="M12 8v4l2.5 2" />
      </svg>
    ),
  },
  {
    title: 'Online Consultations',
    description:
      'Connect with doctors by video for virtual consultations from home — saving time, travel, and stress.',
    accent: 'from-indigo-500 to-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    title: 'Personalized Profile',
    description:
      'Customize language, notifications, and personal health details. Your preferences follow you across every visit.',
    accent: 'from-slate-500 to-slate-700',
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="9" r="3.5" />
        <path d="M5 20c.9-3.2 3.8-5 7-5s6.1 1.8 7 5" />
      </svg>
    ),
  },
]

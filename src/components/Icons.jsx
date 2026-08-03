export function MountainIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M4 24L12 10L16 16L20 8L28 24H4Z" fill="currentColor" />
      <g stroke="var(--color-bg-primary)" strokeWidth="1.3" strokeLinecap="round" fill="none">
        <circle cx="12.2" cy="12.1" r="1.1" fill="var(--color-bg-primary)" stroke="none" />
        <path d="M12.2 13.2v2.3M12.2 13.6l-1.7 1.6M12.2 14.4l1.9 1.1M12.2 15.5l-1.3 2M12.2 15.5l1.5 2" />
      </g>
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ className = "w-5 h-5", open = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`${className} transition-transform duration-300 ${open ? "rotate-45" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronIcon({ className = "w-5 h-5", open = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`${className} transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20.2s-7.5-4.6-10-9.3C.4 7.7 2 4 5.6 3.4c2-.3 3.9.6 5 2.3l1.4 2 1.4-2c1.1-1.7 3-2.6 5-2.3C22 4 23.6 7.7 22 10.9c-2.5 4.7-10 9.3-10 9.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompassIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15.3 8.7l-2 4.6-4.6 2 2-4.6 4.6-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartUpIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 19h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 16.5l5-5.5 3.5 3 6.5-7.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6.2h4.5v4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BriefcaseIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M3 12.8h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LeafIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 19.5c-.7-8 3.7-14.3 14.7-15.3.6 9.6-5.7 14.6-13.4 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 18c2-3.3 5-6.6 11.5-11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.3 15.3L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BrokenChainIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse
        cx="7.2"
        cy="7.8"
        rx="3.8"
        ry="5"
        transform="rotate(-25 7.2 7.8)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="16.8"
        cy="16.2"
        rx="3.8"
        ry="5"
        transform="rotate(-25 16.8 16.2)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function FlagIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5.5 21V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M5.5 4l13 2.7-13 3.1V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.85.5 3.55 1.36 5.03L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.23h.01c5.49 0 9.94-4.45 9.94-9.94S17.53 2 12.04 2Zm5.83 14.16c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.24.2-3.6-.78-2.87-1.19-4.72-4.08-4.86-4.27-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.25-.27.54-.34.72-.34.18 0 .37 0 .53.01.18.01.4-.07.62.48.25.6.85 2.07.92 2.22.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.28 1.66 2.08 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.06.18-.19.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.34.07.13.07.72-.18 1.42Z" />
    </svg>
  );
}

export function SealIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2l2.2 1.6 2.7-.3 1 2.5 2.5 1-.3 2.7L22 12l-1.9 2.5.3 2.7-2.5 1-1 2.5-2.7-.3L12 22l-2.2-1.6-2.7.3-1-2.5-2.5-1 .3-2.7L2 12l1.9-2.5-.3-2.7 2.5-1 1-2.5 2.7.3L12 2Z"
        fill="currentColor"
      />
      <path
        d="M8.5 12.3l2.2 2.2 4.3-4.8"
        stroke="var(--color-bg-primary)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

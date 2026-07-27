export default function Avatar({ className = "" }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <rect width="96" height="96" fill="#14213a" />
      <circle cx="48" cy="38" r="18" fill="#d9b89a" />
      <path
        d="M14 96c0-22 15.2-34 34-34s34 12 34 34"
        fill="#1f3a63"
      />
      <path d="M32 64c6 6 26 6 32 0l4 8c-13 8-27 8-40 0z" fill="#0d1a2e" />
    </svg>
  );
}

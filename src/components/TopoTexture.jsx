export default function TopoTexture() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M-50 500 Q 200 420 400 480 T 850 460" />
        <path d="M-50 420 Q 220 340 420 400 T 850 380" />
        <path d="M-50 340 Q 240 260 440 320 T 850 300" />
        <path d="M-50 560 Q 180 500 400 550 T 850 540" />
        <path d="M-50 260 Q 260 180 460 240 T 850 220" />
      </g>
    </svg>
  );
}

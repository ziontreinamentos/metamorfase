export default function Eyebrow({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-accent-primary/60" aria-hidden="true" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

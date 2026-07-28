export default function Eyebrow({ children, className = "", light = false }) {
  return (
    <div className={className}>
      <span className={`eyebrow ${light ? "eyebrow-on-light" : ""}`}>{children}</span>
    </div>
  );
}

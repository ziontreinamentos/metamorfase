import { ArrowRightIcon } from "./Icons";

export default function Button({
  children,
  href = "#precos",
  size = "lg",
  className = "",
  showArrow = false,
}) {
  const sizeClasses =
    size === "sm"
      ? "px-6 py-2.5 text-sm"
      : "px-8 py-4 text-base md:text-[17px]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-cta-green font-semibold text-cta-text transition-all duration-200 hover:scale-[1.02] hover:bg-cta-green-hover ${sizeClasses} ${className}`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRightIcon className="h-4 w-4 shrink-0" />}
    </a>
  );
}

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-08-28T09:00:00-03:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    seg: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Dias", value: time.dias },
    { label: "Horas", value: time.horas },
    { label: "Min", value: time.min },
    { label: "Seg", value: time.seg },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-4">
          <div className="flex w-[72px] flex-col items-center rounded-xl border border-border-subtle bg-bg-card py-4 md:w-[88px] md:py-5">
            <span className="font-serif text-[32px] leading-none text-accent-primary md:text-[40px]">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="hidden font-serif text-2xl text-text-muted sm:block" aria-hidden="true">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

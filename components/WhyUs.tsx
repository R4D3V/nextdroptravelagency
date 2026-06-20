import Link from "next/link";
import { SectionHeading } from "./Services";

const STATS = [
  { value: 98, suffix: "%", label: "Visa approval rate", color: "var(--brand-red-deep)" },
  { value: 1000, suffix: "+", label: "Trips booked", color: "var(--brand-blue-deep)" },
  { value: 24, suffix: "/7", label: "Support availability", color: "var(--accent-amber)" },
  { value: 40, suffix: "+", label: "Destinations served", color: "var(--accent-green)" },
];

const REASONS = [
  {
    title: "One office, every booking",
    desc: "Visa, flight, hotel and cargo handled under one roof — no juggling multiple agencies for one trip.",
  },
  {
    title: "Honest, upfront pricing",
    desc: "You see exactly what you're paying for before you commit — no hidden service charges at checkout.",
  },
  {
    title: "We answer the phone",
    desc: "Real people on +256 769 730 001, not a call centre. Talk to someone who knows your booking by name.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Next Drop"
          title="Built for travellers who want it handled properly"
          align="center"
          desc="Numbers earned across years of getting Ugandan travellers where they need to be, on time and with the right paperwork."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatRing key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="neu-inset reveal p-7 sm:p-8">
              <h3 className="font-display text-lg font-bold text-ink">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <Link
            href="/why-us"
            className="neu-raised-sm neu-press inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-blue-deep"
          >
            More reasons to book with us
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatRing({
  value,
  suffix,
  label,
  color,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(value, 100) / 100;
  const dash = suffix === "%" ? circumference * pct : circumference * 0.74;

  return (
    <div className="reveal flex flex-col items-center text-center">
      <div className="relative h-32 w-32">
        <div className="neu-dial absolute inset-0" />
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeOpacity="0.18"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
        </svg>
        <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full" style={{ background: "var(--base)" }}>
          <span className="font-display text-xl font-extrabold text-ink">
            {value}
            {suffix}
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-ink-soft">{label}</p>
    </div>
  );
}

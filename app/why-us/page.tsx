import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/Services";

export const metadata: Metadata = {
  title: "Why Next Drop | Next Drop Travel Agency",
  description:
    "Built for travellers who want it handled properly — why Next Drop Travel Agency is trusted for visas, hotels, flights and cargo out of Kampala.",
};

const STATS = [
  { value: 98, suffix: "%", label: "Visa approval rate", color: "var(--brand-red-deep)", note: "Built on getting documentation right the first time, for every embassy we work with." },
  { value: 1000, suffix: "+", label: "Trips booked", color: "var(--brand-blue-deep)", note: "Tourist, business and family trips coordinated end to end since we opened." },
  { value: 24, suffix: "/7", label: "Support availability", color: "var(--accent-amber)", note: "Real people answer the phone, including on travel days when plans change." },
  { value: 40, suffix: "+", label: "Destinations served", color: "var(--accent-green)", note: "From regional East African routes to long-haul bookings worldwide." },
];

const REASONS = [
  {
    title: "One office, every booking",
    desc: "Visa, flight, hotel and cargo handled under one roof — no juggling multiple agencies for one trip.",
    expanded:
      "Most trips need more than one of these pieces. Booking them separately means re-explaining your plans to a different person each time, and hoping the dates line up. We coordinate everything as a single file, so a delayed visa doesn't leave you holding a flight ticket you can't use.",
  },
  {
    title: "Honest, upfront pricing",
    desc: "You see exactly what you're paying for before you commit — no hidden service charges at checkout.",
    expanded:
      "Before you pay anything, we walk you through the full cost breakdown — base fare or rate, any service fee, and what's included. If a hotel rate excludes breakfast or a fare excludes checked baggage, you'll know before you book, not after.",
  },
  {
    title: "We answer the phone",
    desc: "Real people on +256 769 730 001, not a call centre. Talk to someone who knows your booking by name.",
    expanded:
      "If your flight changes at the last minute or your visa needs an extra document, you're not navigating an automated menu — you're speaking to the same team that booked your trip, who already has your file in front of them.",
  },
];

export default function WhyUsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Why Us" }]} />
      <PageHero
        eyebrow="Why Next Drop"
        title="Built for travellers who want it handled properly"
        desc="Numbers earned across years of getting Ugandan travellers where they need to be, on time and with the right paperwork."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The Reasons"
            title="What you actually get by booking with us"
          />
          <div className="mt-12 space-y-6">
            {REASONS.map((reason, i) => (
              <div
                key={reason.title}
                className={`neu-raised grid gap-5 p-7 sm:p-9 lg:grid-cols-[1.2fr_2fr] lg:items-center ${
                  i % 2 === 0 ? "reveal-left" : "reveal-right"
                }`}
              >
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  {reason.title}
                </h3>
                <div>
                  <p className="text-sm font-medium text-ink-soft sm:text-base">{reason.desc}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-faint">{reason.expanded}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="neu-raised reveal-scale overflow-hidden px-7 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              See it for yourself — talk to the team
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              No call centre, no automated menu — just the people handling your trip.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="tel:+256769730001"
                className="neu-raised-sm neu-press inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-blue-deep"
              >
                Call +256 769 730 001
              </Link>
              <Link
                href="/contact"
                className="neu-inset inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-red-deep"
              >
                View Contact Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function StatCard({
  value,
  suffix,
  label,
  color,
  note,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
  note: string;
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(value, 100) / 100;
  const dash = suffix === "%" ? circumference * pct : circumference * 0.74;

  return (
    <div className="reveal-scale neu-raised flex flex-col items-center p-6 text-center">
      <div className="relative h-28 w-28">
        <div className="neu-dial absolute inset-0" />
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden="true">
          <circle cx="50" cy="50" r={radius} fill="none" stroke={color} strokeOpacity="0.18" strokeWidth="6" />
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
        <div
          className="absolute inset-3 flex flex-col items-center justify-center rounded-full"
          style={{ background: "var(--base)" }}
        >
          <span className="font-display text-lg font-extrabold text-ink">
            {value}
            {suffix}
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold text-ink">{label}</p>
      <p className="mt-2 text-xs leading-relaxed text-ink-faint">{note}</p>
    </div>
  );
}

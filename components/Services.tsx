import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { ServiceIcon } from "./icons/ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything your journey needs, in one office"
            desc="Four core services, handled with the same attention to detail — whether you're flying out for business or shipping cargo across borders."
          />
          <Link
            href="/services"
            className="neu-raised-sm neu-press reveal hidden shrink-0 items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-blue-deep sm:inline-flex"
          >
            View all services
            <ArrowIcon />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              className={`neu-raised group p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                i % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
            >
              <div className="neu-dial flex h-14 w-14 items-center justify-center">
                <ServiceIcon name={service.icon} color={service.color} />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {service.summary}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity group-hover:opacity-80"
                style={{ color: service.color }}
              >
                Learn more
                <ArrowIcon />
              </Link>
            </div>
          ))}
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

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="brand-bar" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{desc}</p>
      )}
    </div>
  );
}

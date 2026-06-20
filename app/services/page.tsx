import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/Services";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services | Next Drop Travel Agency",
  description:
    "Visa services, hotel booking, air ticket booking and air cargo services — explore everything Next Drop Travel Agency handles for your journey.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <PageHero
        eyebrow="What We Do"
        title="Four services. One office. Every detail covered."
        desc="From the first stamp in your passport to the last mile of a cargo shipment, we handle the parts of travel that usually mean dealing with five different people. Tap into any service below for the full picture."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`neu-raised group block p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                  i % 2 === 0 ? "reveal-left" : "reveal-right"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="neu-dial flex h-16 w-16 shrink-0 items-center justify-center">
                    <ServiceIcon name={service.icon} color={service.color} size={28} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.stats.slice(0, 1).map((stat) => (
                      <span
                        key={stat.label}
                        className="neu-flat rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ color: service.color }}
                      >
                        {stat.value} {stat.label}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="mt-6 font-display text-2xl font-bold text-ink">
                  {service.title}
                </h2>
                <p className="mt-1 text-sm font-medium" style={{ color: service.color }}>
                  {service.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {service.summary}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.highlights.slice(0, 3).map((h) => (
                    <li key={h.title} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CheckIcon color={service.color} />
                      {h.title}
                    </li>
                  ))}
                </ul>

                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity group-hover:opacity-80"
                  style={{ color: service.color }}
                >
                  Explore {service.shortTitle.toLowerCase()}
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Not Sure Where To Start"
            title="One call covers all four services"
            align="center"
            desc="Most trips touch more than one of our services — a visa and a flight, a hotel and onward cargo. Tell us the full picture and we'll coordinate it as a single booking."
          />
          <div className="reveal-scale mt-10 flex justify-center">
            <Link
              href="/contact"
              className="neu-raised neu-press inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm font-semibold text-brand-blue-deep"
            >
              Talk to our team
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke={color} strokeWidth="1.3" opacity="0.35" />
      <path d="M5 8.2 7.1 10.3 11 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

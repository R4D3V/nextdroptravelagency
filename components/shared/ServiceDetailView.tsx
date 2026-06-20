import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/Services";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { SERVICES, type ServiceDetail } from "@/lib/services-data";

export default function ServiceDetailView({ service }: { service: ServiceDetail }) {
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />
      <PageHero eyebrow={service.tagline} title={service.title} desc={service.summary} />

      {/* Stats strip */}
      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {service.stats.map((stat) => (
              <div key={stat.label} className="neu-inset reveal-scale flex items-center gap-4 p-6">
                <div className="neu-dial flex h-14 w-14 shrink-0 items-center justify-center">
                  <ServiceIcon name={service.icon} color={service.color} size={22} />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="text-xs text-ink-faint">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal-left neu-raised p-7 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink">
              What this service covers
            </h2>
            <div className="mt-5 space-y-4">
              {service.description.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="reveal-right neu-dial-inset flex flex-col items-center justify-center gap-5 p-10 text-center">
            <div className="neu-raised flex h-24 w-24 items-center justify-center rounded-full">
              <ServiceIcon name={service.icon} color={service.color} size={40} />
            </div>
            <p className="font-display text-lg font-bold text-ink">
              Ready to get started?
            </p>
            <p className="text-sm text-ink-soft">
              Call, email, or walk into Room A26 — we'll take it from there.
            </p>
            <Link
              href="/contact"
              className="neu-raised-sm neu-press inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              style={{ color: service.color }}
            >
              Enquire about {service.shortTitle.toLowerCase()}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What's Included"
            title="The details we handle for you"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.highlights.map((h, i) => (
              <div
                key={h.title}
                className={`neu-raised p-6 sm:p-7 ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              >
                <div
                  className="neu-flat flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold"
                  style={{ color: service.color }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The Process" title="How it works, step by step" />
          <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-9 hidden h-px lg:block"
              style={{ background: service.color, opacity: 0.2 }}
              aria-hidden="true"
            />
            {service.process.map((step, i) => (
              <div key={step.title} className="reveal relative">
                <div className="neu-dial flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                  <span className="font-display text-xl font-bold" style={{ color: service.color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Common Questions" title="Frequently asked" align="center" />
          <div className="mt-10 space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.q}
                className="neu-raised reveal group p-6 open:pb-6 sm:p-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    className="neu-flat flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm transition-transform group-open:rotate-45"
                    style={{ color: service.color }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Also Available" title="Other services you might need" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="neu-raised reveal-scale group flex flex-col gap-3 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="neu-dial flex h-11 w-11 items-center justify-center">
                  <ServiceIcon name={s.icon} color={s.color} size={18} />
                </div>
                <h3 className="font-display text-base font-bold text-ink">{s.title}</h3>
                <p className="text-xs leading-relaxed text-ink-soft">{s.tagline}</p>
              </Link>
            ))}
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

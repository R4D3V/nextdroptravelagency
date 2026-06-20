import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/Services";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "How It Works | Next Drop Travel Agency",
  description:
    "A straightforward four-step process from your first call to your boarding pass — how Next Drop Travel Agency gets you travelling.",
};

const STEPS = [
  {
    n: "01",
    title: "Tell us your plan",
    desc: "Walk into Room A26 or call/email us with your destination, dates and what you need — visa, ticket, hotel or cargo.",
    detail:
      "This first conversation is the most important one. The more specific you can be about dates, budget and purpose of travel, the faster we can put together accurate options. No detail is too small — even a tight connection time or a dietary need for a hotel stay is worth mentioning upfront.",
  },
  {
    n: "02",
    title: "We prepare your options",
    desc: "Our team checks visa requirements, compares fares and hotel rates, and puts together options that fit your budget.",
    detail:
      "Behind the scenes, this is where we do the comparison work you'd otherwise spend hours on yourself — cross-checking airline fares, confirming current embassy document requirements, and shortlisting hotels that actually match your brief rather than just the highest-rated option.",
  },
  {
    n: "03",
    title: "You confirm & pay",
    desc: "Pick the option that works, we process payment and lock in your booking or submit your visa application.",
    detail:
      "Once you've chosen, we move immediately — flights are ticketed, hotel rooms are confirmed, and visa applications are submitted to the embassy or visa centre, all within the same day wherever possible to avoid rate or availability changes.",
  },
  {
    n: "04",
    title: "You travel, sorted",
    desc: "Tickets, visa approval and hotel confirmation land in your hands well ahead of your departure date.",
    detail:
      "We don't disappear after booking. If a flight time changes, a visa needs extra documentation, or your plans shift, we're the same team you spoke to from day one — reachable on the same phone number, right up to your departure.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "How It Works" }]} />
      <PageHero
        eyebrow="The Process"
        title="From first call to boarding pass"
        desc="A straightforward four-step process, the same one we've used to get hundreds of travellers out the door on time. Here's exactly what happens at each stage."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-8">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className={`neu-raised grid gap-6 p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-start ${
                i % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
            >
              <div className="neu-dial flex h-20 w-20 shrink-0 items-center justify-center">
                <span className="font-display text-2xl font-bold text-brand-blue-deep">
                  {step.n}
                </span>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-ink-soft sm:text-base">
                  {step.desc}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-faint">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Wherever You're Headed"
            title="The same process, across every service"
            align="center"
            desc="Whether it's a visa, a flight, a hotel or a cargo shipment, the four steps stay the same — only the details change."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="neu-raised reveal-scale group flex flex-col items-center gap-3 p-6 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="neu-dial flex h-12 w-12 items-center justify-center">
                  <ServiceIcon name={s.icon} color={s.color} size={20} />
                </div>
                <h3 className="font-display text-sm font-bold text-ink">{s.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="neu-raised reveal-scale overflow-hidden px-7 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Start with step one — tell us your plan
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              One phone call is all it takes to get the process moving.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="neu-raised-sm neu-press inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-blue-deep"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

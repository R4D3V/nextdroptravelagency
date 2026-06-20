import Link from "next/link";
import { SectionHeading } from "./Services";

const STEPS = [
  {
    n: "01",
    title: "Tell us your plan",
    desc: "Walk into Room A26 or call/email us with your destination, dates and what you need — visa, ticket, hotel or cargo.",
  },
  {
    n: "02",
    title: "We prepare your options",
    desc: "Our team checks visa requirements, compares fares and hotel rates, and puts together options that fit your budget.",
  },
  {
    n: "03",
    title: "You confirm & pay",
    desc: "Pick the option that works, we process payment and lock in your booking or submit your visa application.",
  },
  {
    n: "04",
    title: "You travel, sorted",
    desc: "Tickets, visa approval and hotel confirmation land in your hands well ahead of your departure date.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Process"
          title="From first call to boarding pass"
          desc="A straightforward four-step process, the same one we've used to get hundreds of travellers out the door on time."
        />

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-9 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, var(--brand-blue) 0%, var(--accent-amber) 50%, var(--brand-red) 100%)",
              opacity: 0.25,
            }}
            aria-hidden="true"
          />
          {STEPS.map((step) => (
            <div key={step.n} className="reveal relative">
              <div className="neu-dial flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                <span className="font-display text-xl font-bold text-brand-blue-deep">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <Link
            href="/how-it-works"
            className="neu-raised-sm neu-press inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-blue-deep"
          >
            See the full process
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

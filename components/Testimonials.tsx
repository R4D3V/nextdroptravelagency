import { SectionHeading } from "./Services";

const TESTIMONIALS = [
  {
    quote:
      "Next Drop sorted my UK visa and flight in under two weeks. They followed up with the embassy themselves so I didn't have to worry about a thing.",
    name: "Patricia N.",
    role: "Tourist visa, London",
  },
  {
    quote:
      "We ship spare parts through their air cargo desk every month. Always on time, always tracked, always picks up the phone.",
    name: "Moses K.",
    role: "Business cargo client",
  },
  {
    quote:
      "Booked my hotel and ticket to Dubai in one sitting at their office. Cheaper than what I found online and a lot less stressful.",
    name: "Aisha R.",
    role: "Leisure traveller, Dubai",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Traveller Stories"
          title="What people say after they've landed"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`neu-raised flex flex-col p-7 sm:p-8 ${
                i % 3 === 0 ? "reveal-left" : i % 3 === 2 ? "reveal-right" : "reveal"
              }`}
            >
              <QuoteIcon />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="neu-dial flex h-10 w-10 items-center justify-center font-display text-sm font-bold text-brand-blue-deep">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {t.name}
                  </span>
                  <span className="block text-xs text-ink-faint">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
      <path
        d="M11.7 0 7.4 9.6h4.3v12.2H0V11.4L5.3 0h6.4Zm16 0L23.4 9.6h4.3v12.2H16V11.4L21.3 0h6.4Z"
        fill="var(--base-dark)"
      />
    </svg>
  );
}

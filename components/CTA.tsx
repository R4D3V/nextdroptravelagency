export default function CTA() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="neu-raised reveal-scale mx-auto max-w-6xl overflow-hidden px-7 py-12 text-center sm:px-12 sm:py-16">
        <div className="mx-auto mb-5 flex items-center justify-center gap-3">
          <span className="brand-bar" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Ready When You Are
          </span>
        </div>
        <h2 className="mx-auto max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          Your next trip starts with one phone call
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
          Visa, hotel, flight or cargo — tell us what you need and we&apos;ll
          take it from there.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+256769730001"
            className="neu-raised-sm neu-press inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-blue-deep"
          >
            Call +256 769 730 001
          </a>
          <a
            href="mailto:Nextdroptravel@gmail.com"
            className="neu-inset inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-red-deep"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

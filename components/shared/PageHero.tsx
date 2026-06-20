export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <section className="px-4 pb-4 pt-8 sm:px-6 sm:pt-12 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-4 flex items-center gap-3">
          <span className="brand-bar" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
            {eyebrow}
          </span>
        </div>
        <h1 className="reveal max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {desc && (
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}

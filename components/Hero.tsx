import Logo from "./Logo";

const ORBIT_ITEMS = [
  { label: "Visa", position: "top-[-14px] left-1/2 -translate-x-1/2" },
  { label: "Hotels", position: "top-1/2 right-[-14px] -translate-y-1/2" },
  {
    label: "Air Tickets",
    position: "bottom-[-14px] left-1/2 -translate-x-1/2",
  },
  { label: "Air Cargo", position: "top-1/2 left-[-14px] -translate-y-1/2" },
];

export default function Hero() {
  return (
    <section id="top" className="px-4 pt-10 sm:px-6 sm:pt-16 lg:px-10 lg:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="reveal">
          <div className="mb-5 flex items-center gap-3">
            <span className="brand-bar" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Travel Agency &middot; Kampala, Uganda
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            A reason to
            <br />
            travel <span className="text-brand-blue-deep">every</span>{" "}
            <span className="text-brand-red-deep">season.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            From visa approvals to boarding gates, Next Drop handles every
            detail of your journey &mdash; visas, hotels, air tickets and air
            cargo &mdash; so all you have to do is show up with your passport.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="neu-raised neu-press inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-brand-blue-deep"
            >
              Plan My Trip
              <ArrowIcon />
            </a>
            <a
              href="tel:+256769730001"
              className="neu-inset inline-flex items-center gap-3 px-6 py-4 text-sm font-medium text-ink-soft"
            >
              <span className="neu-dial flex h-9 w-9 items-center justify-center text-brand-red-deep">
                <PhoneIcon />
              </span>
              <span>
                <span className="block text-[11px] text-ink-faint">
                  Call us now
                </span>
                <span className="block font-semibold text-ink">
                  +256 769 730 001
                </span>
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["4", "Core Services"],
              ["1000+", "Trips Booked"],
              ["24/7", "Support Line"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-bold text-ink">
                  {num}
                </p>
                <p className="text-xs text-ink-faint">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual: orbit dial */}
        <div className="reveal flex justify-center lg:justify-end">
          <div className="relative h-[19rem] w-[19rem] sm:h-[23rem] sm:w-[23rem]">
            <div className="neu-dial absolute inset-0" />
            <div className="neu-dial-inset absolute inset-[1.6rem] flex items-center justify-center sm:inset-[2rem]">
              <div className="neu-raised flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-full sm:h-36 sm:w-36">
                <Logo showWordmark={false} />
                <span className="font-display text-[11px] font-bold tracking-wide text-ink">
                  NEXT DROP
                </span>
              </div>
            </div>

            {ORBIT_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`neu-raised-sm absolute flex items-center gap-2 px-3.5 py-2 ${item.position}`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                <span className="whitespace-nowrap text-xs font-semibold text-ink">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
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

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 2.5h2l1 3-1.5 1.2a8 8 0 0 0 4.3 4.3L10.5 9.5l3 1v2c0 .8-.7 1.5-1.5 1.4C6.5 13.4 2.6 9.5 2.1 4c-.1-.8.6-1.5 1.4-1.5Z"
        stroke="var(--brand-red-deep)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

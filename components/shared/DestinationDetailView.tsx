import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/Services";
import { DESTINATIONS, type DestinationDetail } from "@/lib/destinations-data";

export default function DestinationDetailView({
  destination,
}: {
  destination: DestinationDetail;
}) {
  const otherDestinations = DESTINATIONS.filter((d) => d.slug !== destination.slug).slice(0, 3);

  return (
    <PageShell>
      <div className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Destinations", href: "/destinations" },
              { label: destination.city },
            ]}
          />
        </div>
      </div>

      {/* Hero image — kept large and clearly labelled for instant identification */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="reveal-scale neu-raised relative h-[18rem] w-full overflow-hidden rounded-[1.5rem] sm:h-[24rem] lg:h-[28rem]">
            <Image
              src={destination.img}
              alt={`${destination.city}, ${destination.country} skyline`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
            <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {destination.region}
              </span>
            </div>
            <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="font-display text-3xl font-bold text-white sm:text-5xl">
                {destination.city}
              </p>
              <p className="mt-1 text-sm text-white/85 sm:text-base">{destination.country}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                {destination.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Good to know strip */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {destination.goodToKnow.map((item) => (
              <div key={item.label} className="neu-inset reveal-scale p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-faint">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-base font-bold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + image-paired highlight */}
      <section className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal-left neu-raised p-7 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink">
              Why travellers book {destination.city}
            </h2>
            <div className="mt-5 space-y-4">
              {destination.description.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="reveal-right relative h-72 overflow-hidden rounded-[1.5rem] lg:h-full">
            <Image
              src={destination.img}
              alt={`${destination.city} cityscape detail`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
              {destination.popularFor.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What We Arrange" title="Handled as one coordinated trip" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {destination.highlights.map((h, i) => (
              <div key={h.title} className="neu-raised reveal p-6 sm:p-7">
                <div className="neu-flat flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold text-brand-blue-deep">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="neu-raised reveal-scale overflow-hidden px-7 py-12 text-center sm:px-12 sm:py-14">
            <h2 className="mx-auto max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
              Ready to plan your trip to {destination.city}?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              We'll confirm visa requirements for your passport, compare flights and shortlist hotels — all in one conversation.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="neu-raised-sm neu-press inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-blue-deep"
              >
                Plan this trip
                <ArrowIcon />
              </Link>
              <Link
                href="/services/visa"
                className="neu-inset inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-red-deep"
              >
                Check visa requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Keep Exploring" title="Other popular routes" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {otherDestinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="neu-raised reveal-scale group overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-36 w-full overflow-hidden rounded-xl">
                  <Image
                    src={d.img}
                    alt={`${d.city}, ${d.country}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="font-display text-base font-bold text-white">{d.city}</p>
                    <p className="text-[11px] text-white/80">{d.country}</p>
                  </div>
                </div>
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

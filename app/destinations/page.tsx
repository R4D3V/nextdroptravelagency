import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/Services";
import { DESTINATIONS } from "@/lib/destinations-data";

export const metadata: Metadata = {
  title: "Destinations | Next Drop Travel Agency",
  description:
    "Popular routes booked by Next Drop Travel Agency out of Entebbe — Dubai, Istanbul, Nairobi, London, Cape Town and Doha, with visa, flight and hotel arranged together.",
};

export default function DestinationsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Destinations" }]} />
      <PageHero
        eyebrow="Popular Routes"
        title="Routes we book most, out of Entebbe"
        desc="Each destination below is a route we know well — visa requirements, flight connections and hotel options all arranged together as one trip. Tap a city for the full picture."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d, i) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className={`neu-raised group block overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-1 ${
                  i % 3 === 0 ? "reveal-left" : i % 3 === 1 ? "reveal" : "reveal-right"
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={d.img}
                    alt={`${d.city}, ${d.country} skyline`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/0" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      {d.region}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-xl font-bold text-white">{d.city}</p>
                    <p className="text-xs text-white/80">{d.country}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{d.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Going Somewhere Else"
            title="Don't see your destination?"
            align="center"
            desc="These are simply our most-booked routes. We arrange visa, flight and hotel for cities worldwide — tell us where you're headed."
          />
          <div className="reveal-scale mt-10 flex justify-center">
            <Link
              href="/contact"
              className="neu-raised neu-press inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm font-semibold text-brand-blue-deep"
            >
              Ask about your route
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

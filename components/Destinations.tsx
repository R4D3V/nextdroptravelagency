import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./Services";
import { DESTINATIONS } from "@/lib/destinations-data";

export default function Destinations() {
  return (
    <section id="destinations" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Popular Routes"
            title="Where our travellers are headed"
            desc="A selection of the routes we book most often out of Entebbe — ticketing, visas and hotel stays arranged together."
          />
          <Link
            href="/destinations"
            className="neu-raised-sm neu-press reveal hidden shrink-0 items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-blue-deep sm:inline-flex"
          >
            See all routes
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="neu-raised reveal group block overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                <Image
                  src={d.img}
                  alt={`${d.city}, ${d.country} skyline`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-display text-lg font-bold text-white">{d.city}</p>
                  <p className="text-xs text-white/80">{d.country}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

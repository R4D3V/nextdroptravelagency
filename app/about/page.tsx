import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import { SectionHeading } from "@/components/Services";

export const metadata: Metadata = {
  title: "About Us | Next Drop Travel Agency",
  description:
    "Get to know Next Drop Travel Agency — our story, what we stand for, and the founder behind our visa, hotel, flight and cargo services out of Kampala.",
};

const VALUES = [
  {
    title: "Our Story",
    desc: "Next Drop Travel Agency was founded in Kampala with a simple goal: make travel out of Uganda straightforward, honest and stress-free. What began as a small visa-assistance desk has grown into a full-service agency handling visas, hotel bookings, air tickets and air cargo for travellers across the country.",
  },
  {
    title: "Our Mission",
    desc: "We exist to take the guesswork out of travel. Every client gets a clear plan, upfront pricing and a team that answers the phone — whether they're booking a family holiday, a business trip or shipping cargo abroad.",
  },
  {
    title: "Our Promise",
    desc: "We treat every booking as if it were our own trip: documents checked twice, dates confirmed early, and a real person on the line if anything changes along the way.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "About" }]} />
      <PageHero
        eyebrow="About Us"
        title="The people and the purpose behind Next Drop"
        desc="A Kampala-based travel agency built on one idea — travel should be handled properly, from the first phone call to the moment you land."
      />

      {/* Company info */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Who We Are" title="A one-stop travel office for Ugandan travellers" />
          <div className="mt-10 space-y-6">
            {VALUES.map((item, i) => (
              <div
                key={item.title}
                className={`neu-raised grid gap-5 p-7 sm:p-9 lg:grid-cols-[1fr_2.2fr] lg:items-center ${
                  i % 2 === 0 ? "reveal-left" : "reveal-right"
                }`}
              >
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Meet the Founder" title="The person behind the agency" />

          <div className="neu-raised reveal mt-10 grid gap-10 p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="mx-auto w-full max-w-xs">
              <div className="neu-inset relative aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src="/images/founder.png"
                  alt="Founder of Next Drop Travel Agency"
                  fill
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-ink">Founder &amp; Managing Director</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue-deep">
                Next Drop Travel Agency
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
                Add a short bio here introducing the founder — their background, what led them to start
                Next Drop, and the philosophy they've built the agency around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="neu-raised reveal-scale overflow-hidden px-7 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Ready to plan your next trip with us?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              Reach out and let's get your visa, flights, hotel or cargo sorted.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="neu-raised-sm neu-press inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-blue-deep"
              >
                Contact Us
              </Link>
              <Link
                href="/gallery"
                className="neu-inset inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-brand-red-deep"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

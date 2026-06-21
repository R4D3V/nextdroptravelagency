import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/Services";
import GallerySection from "@/components/shared/GallerySection";

export const metadata: Metadata = {
  title: "Gallery | Next Drop Travel Agency",
  description:
    "A look at our work — moments with the clients we've helped travel, captured along the way with Next Drop Travel Agency.",
};

export default function GalleryPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Gallery" }]} />
      <PageHero
        eyebrow="Gallery"
        title="Our work, in pictures"
        desc="Moments with the clients we've sent off on visas, flights, hotel stays and cargo shipments."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Showcase"
            title="A look at our work with clients"
            desc="A featured slider up top, followed by every photo laid out individually below it."
          />

          <div className="mt-10">
            <GallerySection />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

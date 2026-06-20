import type { Metadata } from "next";
import ServiceDetailView from "@/components/shared/ServiceDetailView";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Visa Services | Next Drop Travel Agency",
  description:
    "End-to-end visa processing for tourist, business, work and student visas to destinations worldwide, handled by Next Drop Travel Agency.",
};

export default function VisaServicePage() {
  const service = getServiceBySlug("visa");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}

import type { Metadata } from "next";
import ServiceDetailView from "@/components/shared/ServiceDetailView";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Air Cargo Services | Next Drop Travel Agency",
  description:
    "Reliable air freight and cargo handling for personal shipments and business consignments, door to destination.",
};

export default function AirCargoServicePage() {
  const service = getServiceBySlug("air-cargo");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}

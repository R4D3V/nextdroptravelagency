import type { Metadata } from "next";
import ServiceDetailView from "@/components/shared/ServiceDetailView";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Hotel Booking | Next Drop Travel Agency",
  description:
    "Curated hotel reservations for every budget, confirmed before you fly. Hotel booking services from Next Drop Travel Agency.",
};

export default function HotelBookingServicePage() {
  const service = getServiceBySlug("hotel-booking");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}

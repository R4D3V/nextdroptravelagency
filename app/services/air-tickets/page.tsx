import type { Metadata } from "next";
import ServiceDetailView from "@/components/shared/ServiceDetailView";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Air Ticket Booking | Next Drop Travel Agency",
  description:
    "Domestic and international flight bookings across major airlines, with the best fares and flexible itinerary options.",
};

export default function AirTicketsServicePage() {
  const service = getServiceBySlug("air-tickets");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}

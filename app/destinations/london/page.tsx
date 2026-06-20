import type { Metadata } from "next";
import DestinationDetailView from "@/components/shared/DestinationDetailView";
import { getDestinationBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "London, United Kingdom | Next Drop Travel Agency",
  description: "UK visa processing, flight and hotel booking for London — tourism, study, business and family visits.",
};

export default function LondonDestinationPage() {
  const destination = getDestinationBySlug("london");
  if (!destination) return notFound();
  return <DestinationDetailView destination={destination} />;
}

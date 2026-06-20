import type { Metadata } from "next";
import DestinationDetailView from "@/components/shared/DestinationDetailView";
import { getDestinationBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Cape Town, South Africa | Next Drop Travel Agency",
  description: "Flight and hotel booking for Cape Town, a leisure-focused route with mountains, coastline and wine country.",
};

export default function CapeTownDestinationPage() {
  const destination = getDestinationBySlug("cape-town");
  if (!destination) return notFound();
  return <DestinationDetailView destination={destination} />;
}

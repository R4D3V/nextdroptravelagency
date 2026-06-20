import type { Metadata } from "next";
import DestinationDetailView from "@/components/shared/DestinationDetailView";
import { getDestinationBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Nairobi, Kenya | Next Drop Travel Agency",
  description: "Quick regional flight booking to Nairobi for business trips, family visits and safari extensions.",
};

export default function NairobiDestinationPage() {
  const destination = getDestinationBySlug("nairobi");
  if (!destination) return notFound();
  return <DestinationDetailView destination={destination} />;
}

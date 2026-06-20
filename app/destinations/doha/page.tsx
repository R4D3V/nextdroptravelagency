import type { Metadata } from "next";
import DestinationDetailView from "@/components/shared/DestinationDetailView";
import { getDestinationBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Doha, Qatar | Next Drop Travel Agency",
  description: "Visa, flight and hotel booking for Doha, a modern Gulf stopover with strong onward connections.",
};

export default function DohaDestinationPage() {
  const destination = getDestinationBySlug("doha");
  if (!destination) return notFound();
  return <DestinationDetailView destination={destination} />;
}

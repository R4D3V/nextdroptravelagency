import type { Metadata } from "next";
import DestinationDetailView from "@/components/shared/DestinationDetailView";
import { getDestinationBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Dubai, UAE | Next Drop Travel Agency",
  description: "Visa, flight and hotel booking for Dubai, one of our most popular routes out of Entebbe.",
};

export default function DubaiDestinationPage() {
  const destination = getDestinationBySlug("dubai");
  if (!destination) return notFound();
  return <DestinationDetailView destination={destination} />;
}

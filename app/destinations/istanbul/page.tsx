import type { Metadata } from "next";
import DestinationDetailView from "@/components/shared/DestinationDetailView";
import { getDestinationBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Istanbul, Türkiye | Next Drop Travel Agency",
  description: "Visa, flight and hotel booking for Istanbul, a favourite city break and gateway to Europe.",
};

export default function IstanbulDestinationPage() {
  const destination = getDestinationBySlug("istanbul");
  if (!destination) return notFound();
  return <DestinationDetailView destination={destination} />;
}

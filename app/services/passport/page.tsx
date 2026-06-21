import type { Metadata } from "next";
import ServiceDetailView from "@/components/shared/ServiceDetailView";
import { getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Passport Services | Next Drop Travel Agency",
  description:
    "New passport appointments, child passport appointments, lost or damaged passport replacement, name change and renewals, handled by Next Drop Travel Agency.",
};

export default function PassportServicePage() {
  const service = getServiceBySlug("passport");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}

import type { Metadata } from "next";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import SitePlanes from "@/components/SitePlanes";

export const metadata: Metadata = {
  title: "Next Drop Travel Agency | A Reason to Travel Every Season",
  description:
    "Next Drop Travel Agency — visa services, hotel booking, air ticket booking and air cargo services. A reason to travel every season.",
  keywords: [
    "Next Drop Travel",
    "travel agency Uganda",
    "visa services",
    "hotel booking",
    "air ticket booking",
    "air cargo services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <SitePlanes />
        {children}
      </body>
    </html>
  );
}

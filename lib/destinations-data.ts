export type DestinationDetail = {
  slug: string;
  city: string;
  country: string;
  region: string;
  img: string;
  tagline: string;
  summary: string;
  description: string[];
  highlights: { title: string; desc: string }[];
  goodToKnow: { label: string; value: string }[];
  popularFor: string[];
};

export const DESTINATIONS: DestinationDetail[] = [
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    tagline: "Skyscrapers, souks and a stopover that's a destination of its own",
    summary:
      "One of our most-booked routes out of Entebbe — visa, flight and hotel arranged together for business trips, family holidays and long layovers alike.",
    description: [
      "Dubai pairs effortlessly with both short business trips and longer family holidays, which is why it's consistently one of our most requested routes. Direct and one-stop connections from Entebbe make it an easy add-on to a Gulf or wider international itinerary too.",
      "We handle the UAE visa application alongside your flight and hotel booking, so the three pieces of the trip are coordinated rather than booked separately and hoped to line up.",
      "Whether you're after a business-district hotel near the metro, a beachfront resort on Jumeirah, or a budget stay close to the airport for a short layover, we shortlist properties that match your itinerary.",
    ],
    highlights: [
      { title: "UAE visa handled", desc: "Tourist and transit visa processing arranged alongside your ticket, with embassy-accurate document checklists." },
      { title: "Hotel variety", desc: "From Deira budget stays to Palm Jumeirah resorts — we match the property to your trip type." },
      { title: "Layover-friendly", desc: "Popular as a stopover city; we can build short Dubai add-ons into longer international itineraries." },
    ],
    goodToKnow: [
      { label: "Flight time from Entebbe", value: "~5.5 hours direct" },
      { label: "Visa", value: "Required — we process it with your booking" },
      { label: "Best for", value: "Business trips, family holidays, stopovers" },
    ],
    popularFor: ["Business travel", "Family holidays", "Shopping trips", "Long layovers"],
  },
  {
    slug: "istanbul",
    city: "Istanbul",
    country: "Türkiye",
    region: "Europe / Middle East",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1600&auto=format&fit=crop",
    tagline: "Where two continents meet, and a popular gateway onward into Europe",
    summary:
      "A favourite for travellers combining Istanbul itself with onward connections into Europe — we arrange visa, ticket and hotel together for a smooth multi-leg trip.",
    description: [
      "Istanbul works both as a standalone holiday destination and as a strategic stopover for travellers continuing on to wider Europe, thanks to strong onward connections from its airports.",
      "We coordinate the Turkish e-visa or consular visa process (depending on your passport) directly with your ticket booking, and shortlist hotels in Sultanahmet, Taksim or near the airport depending on whether you're sightseeing or transiting.",
      "If your trip continues beyond Istanbul, we can build the full multi-city itinerary — Istanbul plus your onward European leg — as one coordinated booking.",
    ],
    highlights: [
      { title: "Visa support", desc: "E-visa and consular visa guidance depending on your passport and travel purpose." },
      { title: "Old city & new city stays", desc: "Hotels near the historic Sultanahmet sights or the modern Taksim district, your choice." },
      { title: "Gateway to Europe", desc: "Strong onward connections we can fold into a single multi-city itinerary." },
    ],
    goodToKnow: [
      { label: "Flight time from Entebbe", value: "~6.5 hours direct" },
      { label: "Visa", value: "E-visa or consular, depending on passport" },
      { label: "Best for", value: "City breaks, onward European travel" },
    ],
    popularFor: ["City breaks", "History & culture", "Onward connections", "Shopping"],
  },
  {
    slug: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    region: "East Africa",
    img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=1600&auto=format&fit=crop",
    tagline: "A short regional hop for business, safari add-ons and family visits",
    summary:
      "One of our quickest and most frequently booked regional routes, popular for business travel, family visits and safari extensions.",
    description: [
      "Nairobi is a short, frequent hop from Entebbe, making it one of the easiest routes for us to book on short notice — ideal for last-minute business trips or family visits.",
      "Most East African Community passport holders won't need a visa for short stays, but we confirm current requirements for your specific passport before booking, since rules can change.",
      "Many travellers extend a Nairobi trip into a Kenyan safari; we can help coordinate hotel stays in the city alongside onward arrangements if that's part of your plan.",
    ],
    highlights: [
      { title: "Frequent flights", desc: "Multiple daily options make this an easy route to book even on short notice." },
      { title: "Simplified entry", desc: "Many regional passport holders travel visa-free or with simplified entry — we confirm your specific requirement." },
      { title: "Safari extensions", desc: "Easy to combine with onward travel into Kenya's safari circuit." },
    ],
    goodToKnow: [
      { label: "Flight time from Entebbe", value: "~1.5 hours direct" },
      { label: "Visa", value: "Often visa-free or simplified for regional passports — we confirm yours" },
      { label: "Best for", value: "Business trips, family visits, safari extensions" },
    ],
    popularFor: ["Business travel", "Family visits", "Safari add-ons", "Short notice trips"],
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
    tagline: "Our most visa-intensive route — and the one we know best",
    summary:
      "Tourist, business, study and family-visit visas to the UK are among the applications we handle most, paired with flight and hotel booking once approved.",
    description: [
      "The UK visa process is detailed, and getting the supporting documents right the first time matters more here than almost anywhere else we book. It's also one of our highest-volume routes, so our team has deep familiarity with what UK Visas and Immigration expects.",
      "We build your application around your specific purpose — tourism, business, study or visiting family — with the correct supporting letters, financial documents and itinerary evidence.",
      "Once your visa is approved, we move straight into booking your flight and hotel, so the whole journey from application to arrival is handled by the same team.",
    ],
    highlights: [
      { title: "UK visa expertise", desc: "High application volume on this route means deep familiarity with documentation standards." },
      { title: "Purpose-specific applications", desc: "Tourist, business, study and family-visit applications each built around the right evidence." },
      { title: "Seamless follow-through", desc: "Flight and hotel booked immediately once your visa is approved." },
    ],
    goodToKnow: [
      { label: "Flight time from Entebbe", value: "~9 hours direct" },
      { label: "Visa", value: "Required — among our most-handled applications" },
      { label: "Best for", value: "Study, business, family visits, tourism" },
    ],
    popularFor: ["Study", "Family visits", "Business travel", "Tourism"],
  },
  {
    slug: "cape-town",
    city: "Cape Town",
    country: "South Africa",
    region: "Southern Africa",
    img: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=1600&auto=format&fit=crop",
    tagline: "Mountains, coastline and a relaxed pace for leisure travellers",
    summary:
      "A leisure-focused route for travellers wanting coastline, mountains and wine country, with hotel and flight booked as one trip.",
    description: [
      "Cape Town tends to be a leisure booking more than a business one — travellers come for Table Mountain, the coastline and the Cape Winelands, and we plan accordingly.",
      "We focus hotel recommendations around what matters for a leisure trip: V&A Waterfront convenience, city-bowl character stays, or quieter options further from the centre.",
      "Connections typically route through Johannesburg or another regional hub; we handle the full multi-leg itinerary as a single booking.",
    ],
    highlights: [
      { title: "Leisure-focused planning", desc: "Hotel and itinerary suggestions built around sightseeing rather than business convenience." },
      { title: "Connecting itineraries", desc: "We handle the connecting leg through regional hubs as part of one coordinated booking." },
      { title: "Wine country add-ons", desc: "Happy to help build in time for the Cape Winelands if it's part of your plan." },
    ],
    goodToKnow: [
      { label: "Flight time from Entebbe", value: "~6 hours with one connection" },
      { label: "Visa", value: "Visa-free for many passports for short stays — we confirm yours" },
      { label: "Best for", value: "Leisure travel, honeymoons, scenic holidays" },
    ],
    popularFor: ["Leisure travel", "Scenic holidays", "Honeymoons", "Wine country"],
  },
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    region: "Middle East",
    img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=1600&auto=format&fit=crop",
    tagline: "A modern Gulf stopover with strong onward connections worldwide",
    summary:
      "Frequently booked as both a destination and a strategic stopover, with strong onward connections to Europe, Asia and the Americas.",
    description: [
      "Doha works well both as a short standalone trip and as a stopover city for travellers connecting onward to Europe, Asia or the Americas, thanks to its central position and strong airline network.",
      "We handle the Qatar visa process where required and can build a layover hotel stay into longer connecting itineraries if you'd rather break up a long journey than transit straight through.",
      "For business travellers, we focus on hotels near the business districts; for those passing through, we look at airport-convenient options that make the most of a short stopover.",
    ],
    highlights: [
      { title: "Stopover planning", desc: "We can build a Doha layover stay into a longer connecting itinerary rather than a straight transit." },
      { title: "Strong onward network", desc: "Well placed for onward connections to Europe, Asia and the Americas." },
      { title: "Visa support", desc: "Qatar visa requirements confirmed and processed where needed for your passport." },
    ],
    goodToKnow: [
      { label: "Flight time from Entebbe", value: "~5 hours direct" },
      { label: "Visa", value: "Visa-free or on-arrival for many passports — we confirm yours" },
      { label: "Best for", value: "Stopovers, business travel, onward connections" },
    ],
    popularFor: ["Stopovers", "Business travel", "Onward connections", "Short breaks"],
  },
];

export function getDestinationBySlug(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}

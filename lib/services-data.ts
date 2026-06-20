export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  color: string;
  colorVar: string;
  icon: "visa" | "hotel" | "ticket" | "cargo";
  summary: string;
  description: string[];
  highlights: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  stats: { value: string; label: string }[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "visa",
    title: "Visa Services",
    shortTitle: "Visa",
    tagline: "Paperwork handled, approvals expected",
    color: "var(--brand-red-deep)",
    colorVar: "--brand-red-deep",
    icon: "visa",
    summary:
      "End-to-end visa processing and documentation support for tourist, business, work and student visas to destinations worldwide.",
    description: [
      "Visa applications are where most independent travel plans stall — wrong document order, an expired bank statement, a missing invitation letter. Our visa desk exists to make sure none of that happens to you.",
      "We start by reviewing your destination's specific embassy requirements, then build a personal checklist so nothing is missing before submission. From there we handle appointment booking, form filling, supporting-letter drafting and the final embassy or VFS submission on your behalf.",
      "Whether you're applying for a short tourist visa, a multi-entry business visa, a work permit, or a student visa, our team tracks your application from submission through to decision and keeps you updated at every stage.",
    ],
    highlights: [
      {
        title: "Document review & checklist",
        desc: "A personalised list of exactly what your destination's embassy requires, checked against your documents before submission.",
      },
      {
        title: "Appointment booking",
        desc: "We secure your embassy or visa application centre slot, often the hardest part of the process to get right.",
      },
      {
        title: "Application tracking",
        desc: "Real-time updates on your application status, so you're never left wondering where things stand.",
      },
      {
        title: "Embassy liaison",
        desc: "Direct follow-up with embassies and consulates on your behalf when extra clarification is requested.",
      },
    ],
    process: [
      { title: "Consultation", desc: "Tell us your destination, travel dates and purpose. We confirm the right visa category." },
      { title: "Document prep", desc: "We issue your checklist and review every document before it's submitted." },
      { title: "Submission", desc: "We book your appointment and submit your application at the embassy or visa centre." },
      { title: "Approval & collection", desc: "We track your application and notify you the moment your passport is ready for collection." },
    ],
    faqs: [
      {
        q: "How long does visa processing take?",
        a: "It varies by country — typically 5 to 15 working days for most tourist visas, longer for work and student visas. We give you a realistic estimate at consultation based on current embassy processing times.",
      },
      {
        q: "What if my visa is refused?",
        a: "We review the refusal reason with you and advise on whether a reapplication with stronger documentation is worthwhile, at no extra consultation charge.",
      },
      {
        q: "Do you handle group or family visa applications?",
        a: "Yes, we regularly process visas for families and travel groups together, coordinating shared documentation like invitation letters and itineraries.",
      },
    ],
    stats: [
      { value: "98%", label: "Approval rate" },
      { value: "40+", label: "Countries covered" },
      { value: "5–15", label: "Days typical turnaround" },
    ],
  },
  {
    slug: "hotel-booking",
    title: "Hotel Booking",
    shortTitle: "Hotels",
    tagline: "Confirmed stays, no surprises at check-in",
    color: "var(--brand-blue-deep)",
    colorVar: "--brand-blue-deep",
    icon: "hotel",
    summary:
      "Curated hotel reservations to match every budget, from city business stays to beachfront resorts, confirmed before you fly.",
    description: [
      "A booking confirmation that turns out to be wrong on arrival is one of the worst ways to start a trip. We vet every property we recommend and confirm reservations directly, so what you see is what you get when you check in.",
      "Tell us your budget, your dates and what matters to you — proximity to the airport, a business centre, family rooms, breakfast included — and we'll shortlist options that genuinely fit, not just the first listing on a search page.",
      "We handle the full booking, payment coordination and confirmation paperwork, and we stay reachable if anything needs adjusting after you've already left home.",
    ],
    highlights: [
      {
        title: "Verified properties",
        desc: "We work with hotels we know and trust, from budget-friendly stays to five-star resorts.",
      },
      {
        title: "Best-rate matching",
        desc: "We compare rates across our hotel partners to get you genuine value, not inflated walk-in prices.",
      },
      {
        title: "Flexible itineraries",
        desc: "Multi-city trips, extended stays or last-minute changes — we adjust bookings as your plans shift.",
      },
      {
        title: "On-trip support",
        desc: "If something's wrong at check-in, you call us, not a faceless overseas call centre.",
      },
    ],
    process: [
      { title: "Tell us your trip", desc: "Share your destination, dates, budget and preferences." },
      { title: "We shortlist options", desc: "We send a curated list of 2–3 properties that fit your brief." },
      { title: "You confirm", desc: "Pick your favourite, we handle payment and lock in the booking." },
      { title: "Confirmation in hand", desc: "You receive your confirmation voucher well ahead of departure." },
    ],
    faqs: [
      {
        q: "Can you book hotels in cities you don't list as destinations?",
        a: "Yes — our destination pages show our most popular routes, but we book hotels in any city worldwide through our partner network.",
      },
      {
        q: "Is breakfast or airport transfer included?",
        a: "It depends on the property and rate plan. We always tell you exactly what's included before you confirm, with no hidden extras.",
      },
      {
        q: "What if I need to cancel or change dates?",
        a: "We explain each property's cancellation policy upfront and help you amend or cancel where the rate plan allows it.",
      },
    ],
    stats: [
      { value: "1000+", label: "Bookings made" },
      { value: "200+", label: "Partner hotels" },
      { value: "24/7", label: "Booking support" },
    ],
  },
  {
    slug: "air-tickets",
    title: "Air Ticket Booking",
    shortTitle: "Air Tickets",
    tagline: "The right fare, the right itinerary",
    color: "var(--accent-amber)",
    colorVar: "--accent-amber",
    icon: "ticket",
    summary:
      "Domestic and international flight bookings across major airlines, with the best fares and flexible itinerary options.",
    description: [
      "We book flights across all major airlines flying out of Entebbe, comparing routes and fare classes so you're not stuck with the first price you see online.",
      "Need a multi-city itinerary, a flexible date for a business trip, or the cheapest reasonable connection for a long-haul holiday? We work through the options with you directly rather than leaving you to decode fare rules alone.",
      "Every ticket we issue comes with a clear breakdown of baggage allowance, change and refund conditions, and connection times — no fine print left for you to discover at the airport.",
    ],
    highlights: [
      {
        title: "Fare comparison",
        desc: "We check multiple airlines and routes to find genuinely competitive fares for your dates.",
      },
      {
        title: "Multi-city itineraries",
        desc: "Complex routings with several stops, planned to minimise layover stress and cost.",
      },
      {
        title: "Clear fare rules",
        desc: "Baggage, change and refund conditions explained plainly before you pay, not buried in fine print.",
      },
      {
        title: "Rebooking support",
        desc: "Flight changed or cancelled by the airline? We handle the rebooking process for you.",
      },
    ],
    process: [
      { title: "Share your route", desc: "Tell us where you're flying, your dates and any flexibility you have." },
      { title: "We find your options", desc: "We compare airlines and fare classes and present the best two or three." },
      { title: "You book", desc: "Confirm your choice and we issue the ticket against your passport details." },
      { title: "E-ticket delivered", desc: "Your e-ticket and itinerary land in your inbox, ready for check-in." },
    ],
    faqs: [
      {
        q: "Do you book one-way and multi-city tickets?",
        a: "Yes, we book one-way, return, multi-city and open-jaw itineraries across all major alliances and airlines.",
      },
      {
        q: "Can you find cheaper fares than online booking sites?",
        a: "We compare across multiple airlines and fare classes the same way comparison sites do, but we also flag hidden costs like baggage fees that online totals sometimes omit.",
      },
      {
        q: "What happens if my flight gets cancelled?",
        a: "We liaise with the airline on your behalf to rebook you on the next available option at no extra service charge.",
      },
    ],
    stats: [
      { value: "30+", label: "Airline partners" },
      { value: "1000+", label: "Tickets issued" },
      { value: "24/7", label: "Travel-day support" },
    ],
  },
  {
    slug: "air-cargo",
    title: "Air Cargo Services",
    shortTitle: "Air Cargo",
    tagline: "Door to destination, tracked all the way",
    color: "var(--accent-green)",
    colorVar: "--accent-green",
    icon: "cargo",
    summary:
      "Reliable air freight and cargo handling for personal shipments and business consignments, door to destination.",
    description: [
      "From personal effects and gifts to recurring business consignments, our cargo desk handles packing checks, customs paperwork and airline booking so your shipment moves without delays.",
      "We work with freight partners across our key routes to give you accurate weight-based pricing upfront, and every shipment is tracked from drop-off to arrival so you always know where it is.",
      "For business clients shipping regularly, we set up standing arrangements that simplify paperwork and billing for repeat consignments — no need to renegotiate terms every month.",
    ],
    highlights: [
      {
        title: "Personal & business shipments",
        desc: "From a single suitcase of personal effects to recurring business freight, handled with the same care.",
      },
      {
        title: "Customs documentation",
        desc: "We prepare and check the paperwork your shipment needs to clear customs without delay.",
      },
      {
        title: "Shipment tracking",
        desc: "Track your cargo from drop-off at our office through to arrival at destination.",
      },
      {
        title: "Standing business accounts",
        desc: "Recurring shippers get simplified, consistent terms instead of renegotiating every shipment.",
      },
    ],
    process: [
      { title: "Drop off or schedule pickup", desc: "Bring your shipment to Room A26 or arrange a pickup." },
      { title: "Weigh & quote", desc: "We weigh your cargo and give you a transparent, weight-based quote." },
      { title: "Documentation & booking", desc: "We prepare customs paperwork and book your shipment on the next available flight." },
      { title: "Tracked delivery", desc: "We share tracking details so you know exactly when it lands." },
    ],
    faqs: [
      {
        q: "What can I ship through your air cargo service?",
        a: "Most personal effects, commercial goods and documents are accepted, subject to airline and customs restrictions. We'll confirm eligibility for your specific items at drop-off.",
      },
      {
        q: "How is pricing calculated?",
        a: "Pricing is based on the weight and volume of your shipment plus the destination, and we always confirm the total cost before booking.",
      },
      {
        q: "Can I track my shipment after it's sent?",
        a: "Yes, every shipment is issued a tracking reference you can check in on, and our team can give you status updates by phone.",
      },
    ],
    stats: [
      { value: "20+", label: "Cargo routes" },
      { value: "100%", label: "Shipments tracked" },
      { value: "24/7", label: "Drop-off support line" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

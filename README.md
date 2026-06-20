# Next Drop Travel Agency — Website

A marketing website for **Next Drop Travel Agency** ("A reason to travel every season"), built with Next.js 16 (App Router) and Tailwind CSS 4, using a neumorphic (soft UI) design system matching the supplied reference screenshots.

## Stack

- **Next.js 16.2.9** — App Router, React 19, Turbopack
- **Tailwind CSS 4** — `@theme inline` token system, no `tailwind.config.js` needed
- **@fontsource/poppins** & **@fontsource/inter** — self-hosted fonts (display + body), avoids any runtime dependency on Google Fonts
- **next/image** — optimized destination photography (Unsplash, remote-pattern allow-listed in `next.config.ts`)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Production build:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx       Root layout, fonts, metadata
  globals.css       Design tokens + neumorphic utility classes (.neu-raised, .neu-inset, .neu-dial, etc.)
  page.tsx          Assembles all sections
components/
  Logo.tsx          Brand mark (blue/red swoosh + plane, recreated as SVG)
  Header.tsx         Sticky nav, mobile menu
  Hero.tsx          Headline + signature "orbit dial" visual (4 services around the logo)
  Services.tsx       4 service cards (Visa, Hotel, Air Ticket, Air Cargo) + shared SectionHeading
  Destinations.tsx   Popular route photo cards
  HowItWorks.tsx     4-step booking process
  WhyUs.tsx          Stat rings + reasons to book
  Testimonials.tsx   Client quotes
  CTA.tsx            Call-to-action banner
  Footer.tsx         Contact details, services, sitemap
  ScrollReveal.tsx   IntersectionObserver-driven fade/slide-in for `.reveal` elements
```

## Design system

All neumorphic surfaces are driven by CSS custom properties in `globals.css` (`--base`, `--shadow-light`, `--shadow-dark`, brand colors), so the whole palette can be retuned from one place. Utility classes:

- `.neu-raised` / `.neu-raised-sm` — embossed cards & buttons
- `.neu-inset` — pressed/well surfaces (info panels, phone CTA)
- `.neu-dial` / `.neu-dial-inset` — circular badges, stat rings, hero orbit
- `.neu-press` — active/pressed interaction feedback
- `.brand-bar` — the blue→red gradient eyebrow mark taken from the logo

## Business content

Sourced from the business signage provided: services (Visa Services, Hotel Booking, Air Ticket Booking, Air Cargo Services), tagline, phone numbers, email and P.O. Box/Room A26 address — all reflected in the Hero, Services, CTA and Footer sections. Stats, testimonials, and destination routes are illustrative placeholder content and should be swapped for real figures/quotes before launch.

## Notes for deployment

- Update the Unsplash image URLs in `components/Destinations.tsx` with licensed/owned photography if preferred.
- Wire the "Get a Quote" / CTA buttons to a real form or booking flow as needed — they currently anchor to the footer contact block.
- `next.config.ts` allow-lists `images.unsplash.com` for `next/image`; add any new image hosts there.

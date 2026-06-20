import Link from "next/link";
import Logo from "./Logo";
import { SERVICES } from "@/lib/services-data";

const SITE_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Us", href: "/why-us" },
];

export default function Footer() {
  return (
    <footer id="contact" className="px-4 pb-10 pt-6 sm:px-6 lg:px-10">
      <div className="neu-raised mx-auto max-w-6xl p-8 sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              A reason to travel every season. Your one-stop office for
              visas, hotels, air tickets and air cargo.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-ink-soft hover:text-brand-blue-deep">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {SITE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-ink-soft hover:text-brand-blue-deep">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Visit / Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-soft">
              <li className="flex gap-3">
                <PinIcon />
                <span>
                  Room A26, P.O. Box 116755
                  <br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon />
                <span>
                  <a href="tel:+256769730001" className="hover:text-brand-blue-deep">
                    +256 769 730 001
                  </a>
                  <br />
                  <a href="tel:+256784645326" className="hover:text-brand-blue-deep">
                    +256 784 645 326
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MailIcon />
                <a
                  href="mailto:Nextdroptravel@gmail.com"
                  className="hover:text-brand-blue-deep"
                >
                  Nextdroptravel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-base-dark/40 pt-6 sm:flex-row">
          <p className="text-xs text-ink-faint">
            &copy; {new Date().getFullYear()} Next Drop Travel Agency. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">
            Visa Services · Hotel Booking · Air Ticket Booking · Air Cargo Services
          </p>
        </div>
      </div>
    </footer>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path
        d="M8 14.5S13 10 13 6.5a5 5 0 0 0-10 0C3 10 8 14.5 8 14.5Z"
        stroke="var(--brand-red-deep)"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="6.5" r="1.8" stroke="var(--brand-red-deep)" strokeWidth="1.3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path
        d="M3.5 2.5h2l1 3-1.5 1.2a8 8 0 0 0 4.3 4.3L10.5 9.5l3 1v2c0 .8-.7 1.5-1.5 1.4C6.5 13.4 2.6 9.5 2.1 4c-.1-.8.6-1.5 1.4-1.5Z"
        stroke="var(--brand-blue-deep)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="var(--accent-amber)" strokeWidth="1.3" />
      <path d="M2.5 4.5 8 8.5l5.5-4" stroke="var(--accent-amber)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";
import PageHero from "@/components/shared/PageHero";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Next Drop Travel Agency",
  description:
    "Get in touch with Next Drop Travel Agency about visas, hotel booking, air tickets or air cargo — send an enquiry straight to our WhatsApp.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Get in touch"
        title="Tell us about your trip"
        desc="Whatever you need handled — a visa, a hotel, a flight or a cargo shipment — send us the details and we'll pick it up on WhatsApp."
      />

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal neu-raised p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Send an enquiry
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Fill in the form below and we&apos;ll open WhatsApp with your
              message ready to send to our team.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="reveal-right neu-raised p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Visit / Contact
              </h3>
              <ul className="mt-5 space-y-5 text-sm text-ink-soft">
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

            <div className="reveal-right neu-raised flex flex-col items-start gap-3 p-6 sm:p-8">
              <span className="brand-bar" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-ink">
                Prefer to chat now?
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Message us directly on WhatsApp and we&apos;ll respond as
                soon as we&apos;re available.
              </p>
              <a
                href="https://wa.me/256769730001"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-raised-sm neu-press mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-blue-deep"
              >
                Open WhatsApp
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
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
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

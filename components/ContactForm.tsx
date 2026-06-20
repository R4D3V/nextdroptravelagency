"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/services-data";

const WHATSAPP_NUMBER = "256769730001"; // +256 769 730 001, international format, no leading +

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !service || !message.trim()) {
      setError("Please fill in all fields so we know how to help.");
      return;
    }
    setError("");

    const lines = [
      `Hello Next Drop Travel Agency, I'd like to make an enquiry.`,
      ``,
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Service of interest:* ${service}`,
      `*Message:*`,
      message.trim(),
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="reveal grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Mukasa"
            className={inputClass}
          />
        </Field>

        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+256 7XX XXX XXX"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Service you're interested in" htmlFor="service">
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </Field>

      <Field label="Tell us about your trip or enquiry" htmlFor="message">
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. I need a tourist visa to the UK in August for two adults..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </Field>

      {error && (
        <p className="text-sm font-medium text-brand-red-deep" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="neu-raised-sm neu-press inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-brand-blue-deep sm:w-auto"
      >
        Send enquiry on WhatsApp
        <WhatsAppIcon />
      </button>

      <p className="text-xs text-ink-faint">
        Submitting opens WhatsApp with your message pre-filled to{" "}
        <span className="font-medium text-ink-soft">+256 769 730 001</span> —
        just hit send from there.
      </p>
    </form>
  );
}

const inputClass =
  "neu-inset w-full rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        {label}
      </label>
      {children}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13.5 2.6A6.9 6.9 0 0 0 2.4 11l-1 3.5 3.6-1A6.9 6.9 0 0 0 13.5 2.6Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M5.7 5.4c.1-.3.4-.3.6-.3h.4c.1 0 .3 0 .4.3l.5 1.1c.1.2 0 .4-.1.5l-.4.4c-.1.1-.1.3 0 .4.3.6 1 1.3 1.6 1.6.1.1.3.1.4 0l.4-.4c.1-.1.3-.2.5-.1l1.1.5c.2.1.3.3.3.4v.4c0 .2 0 .5-.3.6-.5.4-1.2.5-1.9.3-1.4-.4-2.9-1.9-3.3-3.3-.2-.7-.1-1.4.3-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

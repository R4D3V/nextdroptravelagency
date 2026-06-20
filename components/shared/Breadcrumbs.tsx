import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="reveal mb-6 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-faint">
      <Link href="/" className="transition-colors hover:text-brand-blue-deep">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          <span aria-hidden="true">/</span>
          {item.href && i !== items.length - 1 ? (
            <Link href={item.href} className="transition-colors hover:text-brand-blue-deep">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink-soft">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

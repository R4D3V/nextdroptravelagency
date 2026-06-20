type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M50 12C68 12 83 23 86 39C87 30 84 21 77 15C86 18 92 27 92 37C92 52 80 64 64 64C56 64 49 61 44 56"
          stroke="var(--brand-blue)"
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 88C32 88 17 77 14 61C13 70 16 79 23 85C14 82 8 73 8 63C8 48 20 36 36 36C44 36 51 39 56 44"
          stroke="var(--brand-red)"
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        />
        <g transform="translate(50 50) rotate(-28)">
          <path
            d="M-22 0L20 0M14 -5L26 0L14 5M-6 -10L-1 0L-6 10M-13 -6L-9 0L-13 6"
            stroke="var(--brand-red)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
      {showWordmark && (
        <div className="leading-none">
          <span className="block font-display font-extrabold tracking-tight text-ink text-lg">
            NEXT DROP
          </span>
          <span className="block font-display text-[10px] font-semibold tracking-[0.2em] text-ink-soft uppercase">
            Travel Agency
          </span>
        </div>
      )}
    </div>
  );
}

export function ServiceIcon({
  name,
  color,
  size = 24,
}: {
  name: string;
  color: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "visa":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.6" />
          <circle cx="8.5" cy="12" r="2.2" stroke={color} strokeWidth="1.6" />
          <path d="M13 10h5M13 14h5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...common}>
          <path d="M3 21V8l9-5 9 5v13" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M3 21h18" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
          <rect x="9" y="13" width="6" height="8" stroke={color} strokeWidth="1.6" />
          <path d="M7 11h.01M17 11h.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "ticket":
      return (
        <svg {...common}>
          <path
            d="M4 8.5A2.5 2.5 0 0 0 6.5 6h11A2.5 2.5 0 0 0 20 8.5v1a2 2 0 0 0 0 5v1A2.5 2.5 0 0 0 17.5 18h-11A2.5 2.5 0 0 0 4 15.5v-1a2 2 0 0 0 0-5v-1Z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M14 6v12" stroke={color} strokeWidth="1.6" strokeDasharray="2 2" />
        </svg>
      );
    case "cargo":
      return (
        <svg {...common}>
          <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M3 8.5V16l9 4.5 9-4.5V8.5" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 13v7.5" stroke={color} strokeWidth="1.6" />
        </svg>
      );
    case "passport":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="1.6" stroke={color} strokeWidth="1.6" />
          <circle cx="12" cy="10.5" r="2.6" stroke={color} strokeWidth="1.6" />
          <path d="M9 15.5c.7-1 1.7-1.5 3-1.5s2.3.5 3 1.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 6.5h8" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

import type { CSSProperties } from "react";

type PlaneStyle = CSSProperties & {
  [customProperty: `--${string}`]: string | number;
};

// Deterministic pseudo-random in [0, 1), seeded by index + salt.
// Same output on server and client every render — no hydration mismatch,
// unlike Math.random().
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const DIRECTIONS = ["rl", "lr", "bt", "tb"] as const;

const COLORS = [
  "var(--brand-blue)",
  "var(--brand-blue-deep)",
  "var(--brand-red)",
  "var(--brand-red-deep)",
  "var(--accent-amber)",
  "var(--accent-green)",
];

const PLANE_COUNT = 20;

type PlaneConfig = {
  key: string;
  dir: (typeof DIRECTIONS)[number];
  color: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  style: PlaneStyle;
};

function buildPlanes(count: number): PlaneConfig[] {
  return Array.from({ length: count }, (_, i) => {
    const dir = DIRECTIONS[i % DIRECTIONS.length];
    const color = COLORS[i % COLORS.length];
    const size = 14 + Math.round(seeded(i, 1) * 46); // 14–60px
    const duration = 16 + seeded(i, 2) * 22; // 16–38s
    const delay = seeded(i, 3) * 26; // 0–26s
    const opacity = 0.28 + seeded(i, 4) * 0.34; // 0.28–0.62
    const rotJitter = (seeded(i, 5) - 0.5) * 14; // +/-7deg

    const style: PlaneStyle = {
      animationDuration: `${duration.toFixed(2)}s`,
      animationDelay: `${delay.toFixed(2)}s`,
      "--plane-op": opacity.toFixed(2),
    };

    // Horizontal travellers (rl/lr): scattered vertically, enter from the
    // side, drift slightly up or down as they cross.
    if (dir === "rl") {
      style.top = `${(8 + seeded(i, 6) * 80).toFixed(1)}%`;
      style.left = `${(-18 - seeded(i, 7) * 10).toFixed(1)}%`;
      style["--plane-tx"] = `${(118 + seeded(i, 8) * 20).toFixed(0)}vw`;
      style["--plane-ty"] = `${(-18 + seeded(i, 9) * 24).toFixed(0)}vh`;
      style["--plane-rot"] = `${(-8 + rotJitter).toFixed(1)}deg`;
    } else if (dir === "lr") {
      style.top = `${(8 + seeded(i, 6) * 80).toFixed(1)}%`;
      style.right = `${(-18 - seeded(i, 7) * 10).toFixed(1)}%`;
      style["--plane-tx"] = `${(-118 - seeded(i, 8) * 20).toFixed(0)}vw`;
      style["--plane-ty"] = `${(-18 + seeded(i, 9) * 24).toFixed(0)}vh`;
      style["--plane-rot"] = `${(172 + rotJitter).toFixed(1)}deg`;
    } else if (dir === "bt") {
      // Vertical travellers (bt/tb): scattered horizontally, enter from
      // top/bottom edge, drift slightly left or right as they rise/fall.
      style.left = `${(4 + seeded(i, 6) * 86).toFixed(1)}%`;
      style.bottom = `${(-16 - seeded(i, 7) * 10).toFixed(1)}%`;
      style["--plane-tx"] = `${(-14 + seeded(i, 9) * 28).toFixed(0)}vw`;
      style["--plane-ty"] = `${(-118 - seeded(i, 8) * 18).toFixed(0)}vh`;
      style["--plane-rot"] = `${(-100 + rotJitter).toFixed(1)}deg`;
    } else {
      style.left = `${(4 + seeded(i, 6) * 86).toFixed(1)}%`;
      style.top = `${(-16 - seeded(i, 7) * 10).toFixed(1)}%`;
      style["--plane-tx"] = `${(-14 + seeded(i, 9) * 28).toFixed(0)}vw`;
      style["--plane-ty"] = `${(118 + seeded(i, 8) * 18).toFixed(0)}vh`;
      style["--plane-rot"] = `${(82 + rotJitter).toFixed(1)}deg`;
    }

    return { key: `plane-${i}`, dir, color, size, duration, delay, opacity, style };
  });
}

const PLANES = buildPlanes(PLANE_COUNT);

export default function SitePlanes() {
  return (
    <div className="site-planes" aria-hidden="true">
      {PLANES.map((plane) => (
        <span
          key={plane.key}
          className={`plane-fly dir-${plane.dir}`}
          style={plane.style}
        >
          <PlaneIcon size={plane.size} color={plane.color} />
        </span>
      ))}
    </div>
  );
}

function PlaneIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z"
        fill={color}
      />
    </svg>
  );
}

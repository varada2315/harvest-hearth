interface TornDividerProps {
  flip?: boolean;
  from?: string;
  to?: string;
}

export function TornDivider({
  flip = false,
  from = "var(--parchment)",
  to = "var(--cream)",
}: TornDividerProps) {
  return (
    <div className="relative w-full" style={{ height: 60, background: from }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ transform: flip ? "scaleY(-1)" : "none" }}
      >
        <path
          d="M0,28 C90,52 180,8 290,22 C400,36 470,6 590,18 C720,32 820,4 940,24 C1050,42 1160,12 1270,28 C1360,40 1410,18 1440,26 L1440,60 L0,60 Z"
          fill={to}
        />
        <path
          d="M0,32 C100,40 200,18 300,28 C420,40 500,16 620,26 C740,36 840,14 960,28 C1080,42 1180,20 1280,30 C1360,38 1410,26 1440,30"
          fill="none"
          stroke="var(--bark)"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

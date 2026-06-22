import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import { WheatIcon } from "../components/Navbar";
import { TornDivider } from "../components/TornDivider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story & Purpose — Shree Dev Global" },
      {
        name: "description",
        content:
          "Learn about Shree Dev Global's journey from India's agricultural heartlands to the global market, our core values, mission, and dedication to quality.",
      },
    ],
  }),
  component: AboutPage,
});

/* ---------- USP Data ---------- */
const USPS = [
  {
    title: "Farm-Direct Quality",
    body: "We source direct from Indian farmers, ensuring provenance, purity, and premium grade at every step.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M3 20h18" />
        <path d="M5 20V10l7-5 7 5v10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliant",
    body: "Our products meet destination-country standards — FSSAI, APEDA, phytosanitary, and international certifications.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "End-to-End Logistics",
    body: "From cold-chain packing to freight and documentation, we handle export complexity so you don't have to.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    ),
  },
  {
    title: "Relationship-First",
    body: "No middlemen. No surprises. Just direct access to our team, our farmers, and our harvest.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M8 13l-3-3a2 2 0 113-3l4 4 4-4a2 2 0 113 3l-7 7-4-4z" />
      </svg>
    ),
  },
];

function USP() {
  return (
    <section className="px-6 py-24 md:px-16" style={{ background: "var(--soil)" }}>
      <div className="mx-auto grid max-w-[1300px] gap-12 md:grid-cols-[45%_55%]">
        <div className="relative flex flex-col justify-center">
          <span
            className="reveal-soft text-[12px] uppercase tracking-[0.24em]"
            style={{ color: "var(--sage)" }}
          >
            Why Choose Us
          </span>
          <div
            className="pointer-events-none mt-4 select-none font-serif italic leading-[0.85]"
            style={{
              color: "rgba(212,133,10,0.14)",
              fontWeight: 700,
              fontSize: "clamp(96px, 14vw, 180px)",
            }}
          >
            Since
            <br />
            2024
          </div>
          <WheatIcon
            className="absolute -bottom-6 right-0 h-40 w-40"
            style={{ color: "rgba(212,133,10,0.25)" }}
          />
        </div>
        <div>
          {USPS.map((u, i) => (
            <div
              key={u.title}
              className="reveal border-t py-7"
              data-delay={i * 120}
              style={{ borderColor: "rgba(212,133,10,0.3)" }}
            >
              <div style={{ color: "var(--saffron)" }}>{u.icon}</div>
              <h3
                className="mt-4 font-serif text-2xl font-semibold"
                style={{ color: "var(--linen)" }}
              >
                {u.title}
              </h3>
              <p
                className="mt-2 text-[14px] font-light leading-[1.8]"
                style={{ color: "rgba(237,224,196,0.72)" }}
              >
                {u.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  const imgs = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80",
  ];
  const rotations = ["-1.5deg", "0deg", "2deg"];
  return (
    <section className="px-6 py-24 md:px-16" style={{ background: "var(--parchment)" }}>
      <div className="mx-auto max-w-[900px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {imgs.map((src, i) => (
            <div
              key={src}
              className="reveal overflow-hidden"
              data-delay={i * 120}
              style={{
                border: "2px solid var(--linen)",
                borderRadius: 3,
                transform: `rotate(${rotations[i]})`,
              }}
            >
              <img src={src} alt="Indian agriculture" className="h-[200px] md:h-[220px] w-full object-cover" />
            </div>
          ))}
        </div>
        <p
          className="reveal-soft mt-10 text-center font-serif text-[13px] italic"
          style={{ color: "var(--bark)" }}
        >
          Nashik, Maharashtra · Est. 2024
        </p>
        <h2
          className="reveal mt-4 text-center font-serif italic"
          style={{
            color: "var(--soil)",
            fontWeight: 700,
            fontSize: "clamp(40px, 6vw, 64px)",
            lineHeight: 1.1,
          }}
        >
          Born from
          <br />
          India&apos;s Fields.
        </h2>
        <div className="mx-auto my-8 h-px w-20" style={{ background: "var(--bark)" }} />
        <div
          className="reveal mx-auto max-w-[680px] text-[17px] font-light leading-[1.9]"
          style={{ color: "var(--soil)" }}
        >
          <p>
            <span
              className="float-left mr-2 font-serif"
              style={{
                color: "var(--saffron)",
                fontWeight: 700,
                fontSize: 56,
                lineHeight: 1,
                paddingTop: 6,
              }}
            >
              S
            </span>
            hree Dev Global began with a simple conviction: that the integrity of an Indian harvest
            deserves to travel the world intact. From the red soil of Maharashtra to the spice belts
            of Kerala, we partner with farmers who steward their land — and we carry their work
            across oceans without losing what makes it theirs.
          </p>
          <blockquote
            className="my-10 font-serif italic"
            style={{
              color: "var(--ochre)",
              fontSize: 30,
              borderLeft: "4px solid var(--saffron)",
              paddingLeft: 28,
              lineHeight: 1.35,
            }}
          >
            We don&apos;t just export products. We export trust, craftsmanship, and the spirit of
            Indian agriculture.
          </blockquote>
          <p>
            Every shipment is a relationship — between farmer and buyer, between field and shelf,
            between a place and the people who will eventually taste it. We obsess over the quiet
            details: cold-chain timing, moisture levels, paperwork, the handshake at port. Because
            the best export is the one your customer never has to think about.
          </p>
        </div>
      </div>
    </section>
  );
}

function Purpose() {
  return (
    <section className="px-6 py-24 md:px-16" style={{ background: "var(--soil)" }}>
      <div className="mx-auto max-w-[900px] text-center">
        <span
          className="reveal-soft text-[11px] uppercase tracking-[0.28em]"
          style={{ color: "var(--sage)" }}
        >
          Our Purpose
        </span>
        <p
          className="reveal mx-auto mt-8 max-w-[800px] font-serif italic"
          style={{
            color: "var(--linen)",
            fontSize: "clamp(26px, 3.4vw, 40px)",
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          “We empower global growth through innovative agri-export solutions, connecting local
          harvests to international markets with precision, passion, and a shared vision for a
          brighter future.”
        </p>
        <div className="my-14 flex justify-center" aria-hidden>
          <svg width="220" height="20" viewBox="0 0 220 20" fill="none" stroke="var(--saffron)" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round">
            <path d="M110 2v16" />
            <path d="M110 7c-6-3-14-3-18 0 4 3 12 3 18 0" />
            <path d="M110 7c6-3 14-3 18 0-4 3-12 3-18 0" />
            <path d="M110 13c-6-3-14-3-18 0 4 3 12 3 18 0" />
            <path d="M110 13c6-3 14-3 18 0-4 3-12 3-18 0" />
            <path d="M10 10h70M140 10h70" />
          </svg>
        </div>
        <p
          className="reveal mx-auto max-w-[800px] font-serif italic"
          style={{
            color: "var(--linen)",
            fontSize: "clamp(26px, 3.4vw, 40px)",
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          “A future where high-quality Indian agri products bridge cultural gaps and foster
          sustainable global growth, one harvest at a time.”
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <Layout>
      {/* Hero / Header Section */}
      <section className="relative px-6 py-28 md:py-36 text-center overflow-hidden" style={{ background: "var(--soil)" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1600&q=80"
            alt="Agricultural fields background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--saffron)]">
            Who We Are
          </span>
          <h1 className="mt-4 font-serif italic text-4xl md:text-6xl text-[var(--linen)]">
            Our Story &amp; Purpose
          </h1>
          <p className="mt-6 text-base font-light text-[var(--linen)] opacity-80 max-w-[560px] mx-auto leading-relaxed">
            Rooted in Nashik, Maharashtra, we bridge the gap between India&apos;s rich agricultural landscapes and global culinary and industrial markets.
          </p>
        </div>
      </section>

      <Story />
      <TornDivider from="var(--parchment)" to="var(--soil)" />
      <Purpose />
      <TornDivider from="var(--soil)" to="var(--parchment)" />
      <USP />
    </Layout>
  );
}

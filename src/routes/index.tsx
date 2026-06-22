import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import { TornDivider } from "../components/TornDivider";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/* ---------- Hero ---------- */
function Hero() {
  const lines = ["Bridging", "Fields &", "Foreign", "Markets."];
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20 md:py-28"
    >
      <img
        src="/images/fields_and_markets.png"
        alt="Lush agricultural fields transitioning into a bustling global shipping port, representing fields and foreign markets"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,11,4,0.8) 0%, rgba(20,11,4,0.5) 45%, rgba(20,11,4,0.9) 100%)",
        }}
      />

      {/* Floating Badges for Desktop */}
      <div className="absolute left-[6%] top-[28%] z-20 hidden xl:flex float-badge flex-col gap-2 rounded-[4px] border border-[rgba(212,133,10,0.25)] bg-[rgba(44,26,14,0.85)] p-4 text-left backdrop-blur-md">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--saffron)] font-semibold">Origin Sourced</span>
        <span className="font-serif text-[17px] italic text-[var(--linen)]">Direct Indian Fields</span>
      </div>
      <div className="absolute right-[6%] top-[38%] z-20 hidden xl:flex float-badge flex-col gap-2 rounded-[4px] border border-[rgba(212,133,10,0.25)] bg-[rgba(44,26,14,0.85)] p-4 text-left backdrop-blur-md" style={{ animationDelay: "1.5s" }}>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--saffron)] font-semibold">Logistics Ready</span>
        <span className="font-serif text-[17px] italic text-[var(--linen)]">Seamless Export Chain</span>
      </div>

      {/* Main Glass Card Content */}
      <div className="relative z-10 w-full max-w-[840px] px-2 flex flex-col items-center justify-center text-center my-auto">
        <div className="hero-glass-card w-full px-6 py-10 md:px-12 md:py-16 rounded-[12px] flex flex-col items-center">
          <span
            className="reveal-soft inline-block rounded-[2px] border px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
            style={{ borderColor: "var(--saffron)", color: "var(--saffron)" }}
          >
            Est. India · Global Exporter
          </span>
          <h1
            className="mt-8 font-display font-bold uppercase text-center tracking-wide"
            style={{
              color: "#FDF8EE",
              fontSize: "clamp(34px, 6.5vw, 68px)",
              lineHeight: 1.25,
              textShadow: "0 4px 30px rgba(0,0,0,0.65)",
            }}
          >
            {lines.map((line, i) => (
              <span key={i} className="reveal block" data-delay={i * 150}>
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-8 mb-6 h-px w-[120px] mx-auto" style={{ background: "var(--saffron)", opacity: 0.5 }} />
          <p
            className="max-w-[540px] text-base font-light leading-relaxed mx-auto text-center"
            style={{ color: "rgba(253,248,238,0.9)" }}
          >
            Connecting India&apos;s finest agri harvests to global markets — with integrity,
            traceability, and care.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/contact"
              className="rounded-[2px] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors"
              style={{ background: "var(--saffron)", color: "var(--soil)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--ochre)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--saffron)")}
            >
              Start Enquiry
            </Link>
            <Link
              to="/products"
              className="text-[13px] uppercase tracking-[0.16em] underline-offset-8 hover:underline"
              style={{ color: "var(--linen)" }}
            >
              View Products ↓
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Stats Strip */}
      <div className="relative z-20 w-full max-w-[1200px] px-2 mt-8 md:mt-12 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-[rgba(30,15,6,0.65)] backdrop-blur-md border border-[rgba(212,133,10,0.15)] p-5 md:p-6 rounded-[8px]">
          {[
            { title: "Direct Sourcing", desc: "No middlemen, direct from farms", icon: "🌱" },
            { title: "Quality Certified", desc: "FSSAI & APEDA compliant", icon: "🏆" },
            { title: "Global Shipping", desc: "Cold-chain & bulk logistics", icon: "🚢" },
            { title: "100% Traceability", desc: "Complete supply chain visibility", icon: "🔍" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 text-left p-2 hover:bg-[rgba(212,133,10,0.05)] rounded-[4px] transition-colors duration-300">
              <span className="text-3xl filter drop-shadow-[0_2px_8px_rgba(212,133,10,0.3)]">{item.icon}</span>
              <div>
                <h4 className="font-serif text-[15px] font-semibold text-[var(--saffron)]">{item.title}</h4>
                <p className="text-[11px] text-[var(--linen)] opacity-80 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 hidden md:flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="scroll-line block h-8 w-px" style={{ background: "var(--saffron)" }} />
        <span
          className="text-[9px] uppercase tracking-[0.3em]"
          style={{ color: "rgba(212,133,10,0.7)" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}

/* ---------- Ticker ---------- */
function Ticker() {
  const items = [
    "Dehydrated Onion Flakes",
    "Garlic Powder",
    "Moringa Drumstick",
    "Fresh Coconut",
    "Elephant Yam",
    "G4 Green Chilli",
    "Ginger Flakes",
    "Onion Powder",
    "Indian Spices",
    "Pulses",
    "Beetroot Powder",
    "Vegetable Powder",
    "Garlic Flakes",
  ];
  const full = [...items, ...items];
  return (
    <div className="overflow-hidden" style={{ background: "var(--saffron)", height: 44 }}>
      <div className="ticker-track flex h-full items-center whitespace-nowrap">
        {full.map((it, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center text-[13px] font-medium uppercase tracking-[0.1em]"
            style={{ color: "var(--soil)" }}
          >
            <span className="px-6">{it}</span>
            <span style={{ color: "var(--ochre)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Featured Products ---------- */
const FEATURED_PRODUCTS = [
  { name: "Onion", origin: "Maharashtra, India", img: "/images/onion.png", cat: "Fresh & Raw" },
  { name: "Ginger", origin: "Karnataka, India", img: "/images/ginger.png", cat: "Fresh & Raw" },
  { name: "Dehydrated Onion Flakes", origin: "Maharashtra, India", img: "/images/onion_flakes.png", cat: "Dehydrated" },
  { name: "Moringa Powder", origin: "Tamil Nadu, India", img: "/images/moringa_powder.png", cat: "Powdered" },
];

function FeaturedProducts() {
  return (
    <section className="px-6 py-24 md:px-16" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <span className="reveal-soft text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--bark)" }}>
            Our Selection
          </span>
          <h2
            className="reveal mt-3 font-serif italic"
            style={{ color: "var(--soil)", fontWeight: 600, fontSize: "clamp(36px, 5.5vw, 56px)" }}
          >
            Featured Exports
          </h2>
          <p className="mt-4 text-sm font-light text-[var(--bark)] max-w-[500px] mx-auto leading-relaxed">
            Sourced direct from farm gates and packed to strict international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {FEATURED_PRODUCTS.map((p, idx) => (
            <div
              key={p.name}
              className="reveal group block overflow-hidden rounded-[4px] border"
              data-delay={idx * 100}
              style={{
                background: "var(--parchment)",
                borderColor: "var(--linen)",
              }}
            >
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-4">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--saffron)] font-medium">
                  {p.cat}
                </span>
                <h3 className="font-serif text-[20px] font-semibold leading-tight mt-1" style={{ color: "var(--soil)" }}>
                  {p.name}
                </h3>
                <p className="mt-1 text-[11px]" style={{ color: "var(--bark)" }}>
                  {p.origin}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex rounded-[2px] border-[1.5px] px-8 py-3.5 text-[12px] uppercase tracking-[0.18em] transition-colors"
            style={{ borderColor: "var(--saffron)", color: "var(--soil)", background: "var(--saffron)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--saffron)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--saffron)";
              (e.currentTarget as HTMLElement).style.color = "var(--soil)";
            }}
          >
            Explore Full Catalog →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- About Preview ---------- */
function AboutPreview() {
  return (
    <section className="px-6 py-24 md:px-16" style={{ background: "var(--parchment)" }}>
      <div className="mx-auto max-w-[900px] text-center">
        <span className="reveal-soft text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--bark)" }}>
          Our Heritage
        </span>
        <h2
          className="reveal mt-4 font-serif italic"
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
        <p className="reveal max-w-[620px] mx-auto text-[17px] font-light leading-[1.8] text-[var(--soil)]">
          Shree Dev Global began with a simple conviction: that the integrity of an Indian harvest deserves to travel the world intact. From the red soil of Maharashtra to the spice belts of Kerala, we partner with farmers who steward their land.
        </p>
        <div className="mt-10">
          <Link
            to="/about"
            className="text-[13px] uppercase tracking-[0.16em] underline-offset-8 hover:underline"
            style={{ color: "var(--soil)" }}
          >
            Read Our Story &amp; Values →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Purpose ---------- */
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
            fontSize: "clamp(24px, 3vw, 36px)",
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          “We empower global growth through innovative agri-export solutions, connecting local
          harvests to international markets with precision, passion, and a shared vision for a
          brighter future.”
        </p>
      </div>
    </section>
  );
}

/* ---------- HomePage ---------- */
function HomePage() {
  return (
    <Layout>
      <Hero />
      <Ticker />
      <TornDivider from="var(--saffron)" to="var(--cream)" />
      <FeaturedProducts />
      <TornDivider from="var(--cream)" to="var(--parchment)" />
      <AboutPreview />
      <TornDivider from="var(--parchment)" to="var(--soil)" />
      <Purpose />
      {/* Quick CTA to Contact Page */}
      <section className="px-6 py-20 md:px-16 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-[600px] mx-auto">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--bark)]">Trade Enquiry</span>
          <h2 className="mt-3 font-serif italic text-3xl md:text-5xl text-[var(--soil)]">Ready to Start?</h2>
          <p className="mt-4 text-[14px] text-[var(--bark)] font-light leading-relaxed">
            Get customized FOB/CIF quotes, order samples, or discuss custom grading and specification requirements with our export team.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex rounded-[2px] border-[1.5px] px-8 py-3.5 text-[12px] uppercase tracking-[0.18em] transition-colors"
              style={{ borderColor: "var(--saffron)", color: "var(--soil)", background: "var(--saffron)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--saffron)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--saffron)";
                (e.currentTarget as HTMLElement).style.color = "var(--soil)";
              }}
            >
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

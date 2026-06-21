import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const WHATSAPP_BASE = "https://wa.me/919665922656";
const INSTAGRAM_URL = "https://www.instagram.com/shreedevglobal?igsh=c2x4eXk0dHd0Z21s";

/* ---------- Reusable bits ---------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-soft");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.animationDelay = `${delay}ms`;
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WheatIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M12 22V6" />
      <path d="M12 10c-2-2-5-2-6-1 1 2 4 3 6 3" />
      <path d="M12 10c2-2 5-2 6-1-1 2-4 3-6 3" />
      <path d="M12 14c-2-2-5-2-6-1 1 2 4 3 6 3" />
      <path d="M12 14c2-2 5-2 6-1-1 2-4 3-6 3" />
      <path d="M12 18c-2-2-5-2-6-1 1 2 4 3 6 3" />
      <path d="M12 18c2-2 5-2 6-1-1 2-4 3-6 3" />
      <path d="M12 6c-1-1.5-1-3 0-4 1 1 1 2.5 0 4z" />
    </svg>
  );
}


function TornDivider({ flip = false, from = "var(--parchment)", to = "var(--cream)" }: { flip?: boolean; from?: string; to?: string }) {
  // Hand-irregular path
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

/* ---------- Nav ---------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(44,26,14,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="flex items-center gap-2" style={{ color: "var(--saffron)" }}>
          <WheatIcon className="h-6 w-6" />
          <span className="font-serif text-[22px] font-semibold leading-none">Shree Dev Global</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["Products", "#products"],
            ["Story", "#story"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] uppercase tracking-[0.18em] transition-colors hover:opacity-100"
              style={{ color: "var(--linen)", opacity: scrolled ? 0.85 : 1 }}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-[2px] border-[1.5px] px-5 py-2 text-[12px] uppercase tracking-[0.16em] transition-colors md:inline-flex items-center justify-center"
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
          Enquire Now
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="md:hidden"
          style={{ color: "var(--linen)" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(44,26,14,0.98)" }}
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6"
            style={{ color: "var(--linen)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          {[
            ["Products", "#products"],
            ["Story", "#story"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl italic"
              style={{ color: "var(--linen)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-[2px] border-[1.5px] px-6 py-2 text-[12px] uppercase tracking-[0.18em] transition-colors inline-flex items-center justify-center"
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
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const lines = ["Bridging", "Fields &", "Foreign", "Markets."];
  return (
    <section
      id="top"
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
            <a
              href="#contact"
              className="rounded-[2px] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors"
              style={{ background: "var(--saffron)", color: "var(--soil)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--ochre)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--saffron)")}
            >
              Start Enquiry
            </a>
            <a
              href="#products"
              className="text-[13px] uppercase tracking-[0.16em] underline-offset-8 hover:underline"
              style={{ color: "var(--linen)" }}
            >
              View Products ↓
            </a>
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

/* ---------- Products ---------- */

type Product = { name: string; origin: string; img: string };

const U = (id: string) => `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

const CRATES: { label: string; items: Product[] }[] = [
  {
    label: "Fresh & Raw",
    items: [
      { name: "Onion", origin: "Maharashtra, India", img: U("photo-1620574387735-3624d75b2dbc") },
      { name: "Ginger", origin: "Karnataka, India", img: "/images/ginger.png" },
      { name: "G4 Green Chilli", origin: "Andhra Pradesh, India", img: U("photo-1583119912267-cc97c911e416") },
      { name: "Moringa Drumstick", origin: "Tamil Nadu, India", img: U("photo-1610348725531-843dff563e2c") },
      { name: "Elephant Yam", origin: "Kerala, India", img: U("photo-1518977676601-b53f82aba655") },
      { name: "Fresh Coconut", origin: "Kerala, India", img: U("photo-1581375074612-d1fd0e661aeb") },
      { name: "Pulses", origin: "Madhya Pradesh, India", img: "/images/pulses.png" },
      { name: "Indian Spices", origin: "Kerala, India", img: U("photo-1532336414038-cf19250c5757") },
    ],
  },
  {
    label: "Dehydrated",
    items: [
      { name: "Onion Flakes", origin: "Maharashtra, India", img: U("photo-1599930113854-d6d7fd521f10") },
      { name: "Ginger Flakes", origin: "Karnataka, India", img: "/images/ginger_flakes.png" },
      { name: "Garlic Flakes", origin: "Madhya Pradesh, India", img: "/images/garlic_flakes.png" },
    ],
  },
  {
    label: "Powdered",
    items: [
      { name: "Onion Powder", origin: "Maharashtra, India", img: U("photo-1596040033229-a9821ebd058d") },
      { name: "Garlic Powder", origin: "Madhya Pradesh, India", img: "/images/garlic_powder.png" },
      { name: "Moringa Powder", origin: "Tamil Nadu, India", img: "/images/moringa_powder.png" },
      { name: "Vegetable Powder", origin: "Maharashtra, India", img: U("photo-1542838132-92c53300491e") },
    ],
  },
];


function CrateRow({ label, items }: { label: string; items: Product[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };
  return (
    <div className="reveal relative mt-10 md:mt-14 flex flex-col md:flex-row items-stretch gap-4">
      <div
        className="flex w-full md:w-12 shrink-0 items-center justify-center border py-2.5 md:py-0"
        style={{ borderColor: "var(--linen)", background: "var(--parchment)" }}
      >
        <span
          className="whitespace-nowrap font-serif text-[14px] md:text-[13px] italic writing-mode-vertical"
          style={{ color: "var(--bark)" }}
        >
          {label}
        </span>
      </div>
      <div className="relative min-w-0 flex-1">
        <div
          ref={scroller}
          className="no-scrollbar flex gap-5 overflow-x-auto pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((p) => (
            <a
              key={p.name}
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Hi, I am interested in ${p.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-[240px] shrink-0 overflow-hidden rounded-[4px] border transition-shadow"
              style={{
                background: "var(--parchment)",
                borderColor: "var(--linen)",
                scrollSnapAlign: "start",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(44,26,14,0.12)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              <div className="h-[160px] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="font-serif text-[19px] font-semibold leading-tight" style={{ color: "var(--soil)" }}>
                  {p.name}
                </h3>
                <p className="mt-1 text-[11px]" style={{ color: "var(--bark)" }}>
                  {p.origin}
                </p>
                <span className="mt-2 inline-block text-[12px]" style={{ color: "var(--saffron)" }}>
                  Enquire →
                </span>
              </div>
            </a>
          ))}
        </div>
        {/* arrows */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          className="absolute -left-2 top-[70px] hidden h-9 w-9 items-center justify-center rounded-full shadow md:flex"
          style={{ background: "var(--cream)", color: "var(--soil)" }}
        >
          ←
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          className="absolute -right-2 top-[70px] hidden h-9 w-9 items-center justify-center rounded-full shadow md:flex"
          style={{ background: "var(--cream)", color: "var(--soil)" }}
        >
          →
        </button>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section id="products" className="px-6 py-24 md:px-16" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <span
            className="reveal-soft text-[11px] uppercase tracking-[0.24em]"
            style={{ color: "var(--bark)" }}
          >
            From Field to Freight
          </span>
          <h2
            className="reveal mt-3 font-serif italic"
            style={{ color: "var(--soil)", fontWeight: 600, fontSize: "clamp(36px, 5.5vw, 56px)" }}
          >
            What We Export
          </h2>
        </div>
        {CRATES.map((c) => (
          <CrateRow key={c.label} label={c.label} items={c.items} />
        ))}
      </div>
    </section>
  );
}

/* ---------- USP ---------- */

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
    <section className="px-6 py-28 md:px-16" style={{ background: "var(--soil)" }}>
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

/* ---------- Brand Story ---------- */

function Story() {
  const imgs = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80",
  ];
  const rotations = ["-1.5deg", "0deg", "2deg"];
  return (
    <section id="story" className="px-6 py-28 md:px-16" style={{ background: "var(--parchment)" }}>
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
          Pune, Maharashtra · Est. 2024
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

/* ---------- Mission + Vision ---------- */

function Purpose() {
  return (
    <section className="px-6 py-28 md:px-16" style={{ background: "var(--soil)" }}>
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

/* ---------- Contact ---------- */

const TILES = [
  {
    label: "Email",
    value: "shreedevglobal@gmail.com",
    href: "mailto:shreedevglobal@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9665922656",
    href: "tel:+919665922656",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+91 9665922656",
    href: WHATSAPP_BASE,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 11-3.5-7.1L21 4l-1 3.5A9 9 0 0121 12z" />
        <path d="M8 10c1 3 3 5 6 6l1.5-1.5 2.5 1-1 2.5c-4-.5-7-3.5-7.5-7.5l2.5-1 1 2.5L8 10z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@shreedevglobal",
    href: INSTAGRAM_URL,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-16" style={{ background: "var(--cream)" }}>
      <div className="mx-auto grid max-w-[1300px] gap-14 md:grid-cols-[40%_60%]">
        <div>
          <h2
            className="reveal font-serif italic"
            style={{
              color: "var(--soil)",
              fontWeight: 700,
              fontSize: "clamp(38px, 5vw, 56px)",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s talk
            <br />
            about your
            <br />
            next order.
          </h2>
          <p className="reveal-soft mt-6 max-w-[360px] text-[14px]" style={{ color: "var(--bark)" }}>
            We respond within 24 hours. All enquiries welcome — bulk, trial orders, or partnership
            discussions.
          </p>
        </div>
        <div>
          {TILES.map((t, i) => (
            <a
              key={t.label}
              href={t.href}
              target={t.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="reveal flex items-center gap-5 border-b py-6 transition-colors"
              data-delay={i * 100}
              style={{ borderColor: "var(--linen)" }}
              onMouseEnter={(e) => {
                const v = e.currentTarget.querySelector(".tile-value") as HTMLElement | null;
                if (v) v.style.color = "var(--saffron)";
              }}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector(".tile-value") as HTMLElement | null;
                if (v) v.style.color = "var(--soil)";
              }}
            >
              <span style={{ color: "var(--saffron)" }}>{t.icon}</span>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--bark)" }}>
                  {t.label}
                </div>
                <div
                  className="tile-value mt-1 truncate text-[17px] font-medium transition-colors"
                  style={{ color: "var(--soil)" }}
                >
                  {t.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16 md:px-16" style={{ background: "var(--soil)", color: "var(--linen)" }}>
      <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl" style={{ color: "var(--saffron)" }}>
            Shree Dev Global
          </div>
          <p className="mt-2 font-serif text-[13px] italic" style={{ color: "var(--bark)" }}>
            Bridging Fields and Foreign Markets.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.16em] md:justify-center">
          <a href="#top">Home</a>
          <a href="#products">Products</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
        <div className="flex items-center gap-3 md:justify-end">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "var(--saffron)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
          </a>
          <span className="text-[12px]" style={{ color: "var(--bark)" }}>
            @shreedevglobal
          </span>
        </div>
      </div>
      <div
        className="mx-auto mt-10 max-w-[1300px] border-t pt-5 text-[11px]"
        style={{ borderColor: "rgba(122,79,44,0.3)", color: "var(--bark)" }}
      >
        © 2025 Shree Dev Global. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp ---------- */

function FloatingWhatsApp() {
  return (
    <a
      href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Shree Dev Global, I'd like to enquire about your products.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ background: "#25D366", color: "white" }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.5.7 4.9 2 7L4 29l6.7-1.5c2 .9 4.1 1.4 6.3 1.4 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.5c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4 .9.9-3.9-.2-.4c-1-1.7-1.6-3.6-1.6-5.5 0-5.7 4.6-10.3 10.3-10.3s10.3 4.6 10.3 10.3-4.6 10.3-10.3 10.3zm5.7-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.3z"/>
      </svg>
    </a>
  );
}

/* ---------- Page ---------- */

function HomePage() {
  useReveal();
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <TornDivider from="var(--saffron)" to="var(--cream)" />
      <Products />
      <TornDivider from="var(--cream)" to="var(--soil)" />
      <USP />
      <TornDivider from="var(--soil)" to="var(--parchment)" />
      <Story />
      <TornDivider from="var(--parchment)" to="var(--soil)" />
      <Purpose />
      <TornDivider from="var(--soil)" to="var(--cream)" />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { Layout } from "../components/Layout";
import { TornDivider } from "../components/TornDivider";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products & Export Catalog — Shree Dev Global" },
      {
        name: "description",
        content:
          "Browse our high-quality agricultural export catalog. We export fresh, dehydrated, and powdered onion, garlic, ginger, moringa, green chilli, coconut, and spices from India.",
      },
    ],
  }),
  component: ProductsPage,
});

/* ---------- Product Types & Data ---------- */
type Product = { name: string; origin: string; img: string };

const WHATSAPP_BASE = "https://wa.me/919665922656";
const U = (id: string) => `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

const CRATES: { label: string; items: Product[] }[] = [
  {
    label: "Fresh & Raw",
    items: [
      { name: "Onion", origin: "Maharashtra, India", img: "/images/onion.png" },
      { name: "Ginger", origin: "Karnataka, India", img: "/images/ginger.png" },
      { name: "G4 Green Chilli", origin: "Andhra Pradesh, India", img: "/images/green_chilli.png" },
      { name: "Moringa Drumstick", origin: "Tamil Nadu, India", img: "/images/moringa_drumstick.png" },
      { name: "Elephant Yam", origin: "Kerala, India", img: "/images/elephant_yam.png" },
      { name: "Fresh Coconut", origin: "Kerala, India", img: "/images/coconut.png" },
      { name: "Pulses", origin: "Madhya Pradesh, India", img: "/images/pulses.png" },
      { name: "Indian Spices", origin: "Kerala, India", img: "/images/indian_spices.png" },
    ],
  },
  {
    label: "Dehydrated",
    items: [
      { name: "Onion Flakes", origin: "Maharashtra, India", img: "/images/onion_flakes.png" },
      { name: "Ginger Flakes", origin: "Karnataka, India", img: "/images/ginger_flakes.png" },
      { name: "Garlic Flakes", origin: "Madhya Pradesh, India", img: "/images/garlic_flakes.png" },
    ],
  },
  {
    label: "Powdered",
    items: [
      { name: "Onion Powder", origin: "Maharashtra, India", img: "/images/onion_powder.png" },
      { name: "Garlic Powder", origin: "Madhya Pradesh, India", img: "/images/garlic_powder.png" },
      { name: "Moringa Powder", origin: "Tamil Nadu, India", img: "/images/moringa_powder.png" },
      { name: "Beetroot Powder", origin: "Karnataka, India", img: "/images/beetroot_powder.png" },
      { name: "Vegetable Powder", origin: "Maharashtra, India", img: "/images/vegetable_powder.png" },
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

function ProductsPage() {
  return (
    <Layout>
      {/* Hero / Header Section */}
      <section className="relative px-6 py-28 md:py-36 text-center overflow-hidden" style={{ background: "var(--soil)" }}>
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80"
            alt="Agricultural produce background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--saffron)]">
            Premium Agricultural Exports
          </span>
          <h1 className="mt-4 font-serif italic text-4xl md:text-6xl text-[var(--linen)]">
            Our Export Catalog
          </h1>
          <p className="mt-6 text-base font-light text-[var(--linen)] opacity-80 max-w-[560px] mx-auto leading-relaxed">
            Carefully harvested, processed, and packed to preserve natural freshness and taste, delivered directly from India&apos;s fields to global ports.
          </p>
        </div>
      </section>

      {/* Main Catalog */}
      <section className="px-6 py-20 md:px-16" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-10">
            <span className="reveal-soft text-[11px] uppercase tracking-[0.24em] style={{ color: 'var(--bark)' }}">
              From Field to Freight
            </span>
            <h2
              className="reveal mt-3 font-serif italic"
              style={{ color: "var(--soil)", fontWeight: 600, fontSize: "clamp(36px, 5.5vw, 56px)" }}
            >
              Explore Our Harvest
            </h2>
          </div>
          {CRATES.map((c) => (
            <CrateRow key={c.label} label={c.label} items={c.items} />
          ))}
        </div>
      </section>

      <TornDivider from="var(--cream)" to="var(--soil)" />

      {/* Sourcing & Quality Standards Section */}
      <section className="px-6 py-24 md:px-16" style={{ background: "var(--soil)", color: "var(--linen)" }}>
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center max-w-[700px] mx-auto">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--saffron)]">
              Quality Assurance
            </span>
            <h2 className="mt-4 font-serif italic text-3xl md:text-5xl">
              Export Packaging &amp; Sourcing Standards
            </h2>
            <div className="my-6 h-px w-20 mx-auto" style={{ background: "var(--saffron)", opacity: 0.4 }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="reveal p-6 border border-[rgba(212,133,10,0.2)] rounded-[6px] bg-[rgba(30,15,6,0.3)]">
              <h3 className="font-serif text-xl font-semibold text-[var(--saffron)] flex items-center gap-3">
                <span className="text-2xl">📦</span> Premium Export Packaging
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--linen)] opacity-80">
                To prevent contamination and spoilage during long sea transits, we use high-grade customized packaging. 
                Dehydrated and powdered items are sealed in moisture-proof, heavy-duty barrier bags, while fresh crops are packed in ventilated, multi-layered mesh bags or corrugated boxes according to strict cargo requirements.
              </p>
            </div>
            <div className="reveal p-6 border border-[rgba(212,133,10,0.2)] rounded-[6px] bg-[rgba(30,15,6,0.3)]" data-delay="150">
              <h3 className="font-serif text-xl font-semibold text-[var(--saffron)] flex items-center gap-3">
                <span className="text-2xl">🌱</span> Rigorous Traceability
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--linen)] opacity-80">
                We believe in transparency. Every single shipment can be traced back to its specific cluster of farms. 
                This allows us to verify pesticide-free farming methods, monitor harvest dates, and provide buyers with full sanitary clearance and peace of mind.
              </p>
            </div>
            <div className="reveal p-6 border border-[rgba(212,133,10,0.2)] rounded-[6px] bg-[rgba(30,15,6,0.3)]" data-delay="300">
              <h3 className="font-serif text-xl font-semibold text-[var(--saffron)] flex items-center gap-3">
                <span className="text-2xl">🌡️</span> Temperature &amp; Humidity Control
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--linen)] opacity-80">
                Fresh produce like Ginger and Green Chilli are handled via strict cold-chain logistics. 
                We maintain appropriate temperature and humidity levels inside reefer containers throughout transit to ensure your shipment arrives at its destination in field-fresh condition.
              </p>
            </div>
            <div className="reveal p-6 border border-[rgba(212,133,10,0.2)] rounded-[6px] bg-[rgba(30,15,6,0.3)]" data-delay="450">
              <h3 className="font-serif text-xl font-semibold text-[var(--saffron)] flex items-center gap-3">
                <span className="text-2xl">📑</span> Compliance &amp; Certifications
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--linen)] opacity-80">
                Our export processes comply fully with APEDA, FSSAI, and international food safety protocols. 
                We handle all paperwork, including phytosanitary certification, Certificate of Origin, and custom declarations to make global trade friction-free for you.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex rounded-[2px] border-[1.5px] px-8 py-3.5 text-[13px] uppercase tracking-[0.16em] transition-colors"
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
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

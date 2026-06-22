import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import { TornDivider } from "../components/TornDivider";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certifications & Quality Compliance — Shree Dev Global" },
      {
        name: "description",
        content:
          "Verify our quality certifications and export compliance credentials. Shree Dev Global is APEDA, FSSAI, Spices Board, and IEC registered.",
      },
    ],
  }),
  component: CertificatesPage,
});

const CERTIFICATES = [
  {
    title: "APEDA Registration",
    authority: "Agricultural & Processed Food Products Export Development Authority",
    description: "Validates our eligibility to export fresh fruits, vegetables, and processed agricultural goods. Ensures adherence to national export quality standards.",
    badge: "🏆",
    code: "APEDA Compliant"
  },
  {
    title: "FSSAI License",
    authority: "Food Safety and Standards Authority of India",
    description: "Governs food hygiene, packaging safety, and quality control systems for manufacturing, storing, and exporting edible agricultural products.",
    badge: "🛡️",
    code: "Food Safety Standard"
  },
  {
    title: "Import Export Code (IEC)",
    authority: "Director General of Foreign Trade (DGFT), Govt. of India",
    description: "Our primary licensing code required by customs and Ministry of Commerce to legally execute bulk commercial import-export trade operations.",
    badge: "🌐",
    code: "DGFT Registered"
  },
  {
    title: "Spices Board Registration",
    authority: "Spices Board India, Ministry of Commerce & Industry",
    description: "Authorizes exporting high-grade Indian spices, validating that chemical moisture levels, pesticide residuals, and purity meet strict global limits.",
    badge: "🌿",
    code: "RCMC Spices Board"
  },
  {
    title: "HACCP & ISO 22000 Sourcing",
    authority: "International Food Safety Management Standards",
    description: "We source processed dehydrated flakes and powders from facilities operating under Hazard Analysis Critical Control Point (HACCP) certifications.",
    badge: "⚙️",
    code: "Certified Facilities"
  },
  {
    title: "Phytosanitary Certification",
    authority: "Ministry of Agriculture & Farmers Welfare, India",
    description: "Issued per shipment prior to freight dispatch, certifying that the cargo has been officially inspected and is free from quarantine pests.",
    badge: "📋",
    code: "Shipment Clearance"
  }
];

function CertificatesPage() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="relative px-6 py-28 md:py-36 text-center overflow-hidden" style={{ background: "var(--soil)" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1600&q=80"
            alt="Laboratory quality check background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--saffron)]">
            Quality Assurance
          </span>
          <h1 className="mt-4 font-serif italic text-4xl md:text-6xl text-[var(--linen)]">
            Certifications &amp; Compliance
          </h1>
          <p className="mt-6 text-base font-light text-[var(--linen)] opacity-80 max-w-[560px] mx-auto leading-relaxed">
            We operate with complete regulatory alignment to ensure our clients enjoy hassle-free custom clearances and reliable quality at every destination port.
          </p>
        </div>
      </section>

      {/* Main Certs Grid */}
      <section className="px-6 py-20 md:px-16" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="reveal-soft text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--bark)" }}>
              Regulatory Credentials
            </span>
            <h2
              className="reveal mt-3 font-serif italic text-[var(--soil)] font-semibold"
              style={{ fontSize: "clamp(36px, 5.5vw, 56px)" }}
            >
              Export Licensing
            </h2>
            <div className="my-6 h-px w-20 mx-auto" style={{ background: "var(--bark)", opacity: 0.3 }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((c, i) => (
              <div
                key={c.title}
                className="reveal p-8 rounded-[6px] border transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
                data-delay={i * 100}
                style={{
                  background: "var(--parchment)",
                  borderColor: "var(--linen)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{c.badge}</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium border px-2 py-0.5 rounded-[2px] text-[var(--saffron)] border-[rgba(212,133,10,0.3)]">
                      {c.code}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mt-6 text-[var(--soil)]">
                    {c.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--bark)] mt-1.5 leading-tight font-medium">
                    {c.authority}
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-[var(--bark)] font-light">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TornDivider from="var(--cream)" to="var(--soil)" />

      {/* Seal Banner Callout */}
      <section className="px-6 py-24 md:px-16" style={{ background: "var(--soil)", color: "var(--linen)" }}>
        <div className="mx-auto max-w-[900px] grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 items-center">
          <div className="reveal flex justify-center">
            <img
              src="/images/quality_seal.png"
              alt="Certified Quality Export Seal"
              className="max-w-[180px] w-full object-contain filter drop-shadow-[0_4px_12px_rgba(212,133,10,0.2)]"
            />
          </div>
          <div className="reveal space-y-4">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[var(--saffron)] font-semibold">100% Traceable Sourcing</span>
            <h3 className="font-serif text-2xl md:text-3xl italic font-semibold leading-tight text-[var(--linen)]">
              Quality clearance is verified at every milestone, ensuring peace of mind.
            </h3>
            <p className="text-[14px] font-light leading-relaxed text-[var(--linen)] opacity-80">
              Each cargo batch goes through visual screening, lab verification (for moisture content, foreign matter limits, and bacterial levels), and final phytosanitary customs clearance. 
              If your organization requires specific lab analysis certificates (SGS, pesticide analysis, etc.), we can accommodate them during order execution.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex rounded-[2px] border-[1.5px] px-6 py-3 text-[12px] uppercase tracking-[0.16em] transition-colors"
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
                Request Certificate Copies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

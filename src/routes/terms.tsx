import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Shree Dev Global" },
      { name: "description", content: "Terms governing enquiries, quotations and trade with Shree Dev Global." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16" style={{ background: "var(--parchment)", color: "var(--soil)" }}>
      <div className="mx-auto max-w-[760px]">
        <Link to="/" className="text-[12px] uppercase tracking-[0.2em]" style={{ color: "var(--saffron)" }}>
          ← Back
        </Link>
        <h1 className="mt-6 font-serif italic" style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 700 }}>
          Terms of Service
        </h1>
        <div className="my-6 h-px w-20" style={{ background: "var(--bark)" }} />
        <div className="space-y-6 text-[16px] font-light leading-[1.9]">
          <p>
            By engaging with Shree Dev Global for enquiries, quotations or orders, you agree to the
            following terms. They are intended to keep our trade simple, transparent and fair.
          </p>
          <h2 className="pt-4 font-serif text-2xl font-semibold">Quotations</h2>
          <p>
            All prices on quotations are valid for the period stated on the document and are subject
            to crop availability, harvest cycles and prevailing freight rates.
          </p>
          <h2 className="pt-4 font-serif text-2xl font-semibold">Orders &amp; Payment</h2>
          <p>
            Orders are confirmed once a proforma invoice has been signed and the agreed advance has
            been received. Balance terms follow the Incoterms specified per shipment.
          </p>
          <h2 className="pt-4 font-serif text-2xl font-semibold">Quality &amp; Compliance</h2>
          <p>
            Goods are dispatched in line with destination-country regulatory requirements. Buyers
            are responsible for local import clearance and statutory duties at the port of entry.
          </p>
          <h2 className="pt-4 font-serif text-2xl font-semibold">Disputes</h2>
          <p>
            Any disputes are governed by the laws of India and the jurisdiction of Pune,
            Maharashtra.
          </p>
        </div>
      </div>
    </main>
  );
}

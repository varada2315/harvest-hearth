import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Shree Dev Global" },
      { name: "description", content: "How Shree Dev Global handles enquiries, contact details and partner information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <main className="min-h-screen px-6 py-16 md:py-24" style={{ background: "var(--parchment)", color: "var(--soil)" }}>
        <div className="mx-auto max-w-[760px]">
          <Link to="/" className="text-[12px] uppercase tracking-[0.2em] hover:text-[var(--ochre)]" style={{ color: "var(--saffron)" }}>
            ← Back Home
          </Link>
          <h1 className="mt-6 font-serif italic text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>
          <div className="my-6 h-px w-20" style={{ background: "var(--bark)" }} />
          <div className="space-y-6 text-[16px] font-light leading-[1.9]">
            <p>
              Shree Dev Global respects the privacy of every buyer, partner and visitor. This policy
              outlines what we collect, how it is used, and the choices available to you.
            </p>
            <h2 className="pt-4 font-serif text-2xl font-semibold">Information We Collect</h2>
            <p>
              When you submit an enquiry by email, phone, WhatsApp, Instagram, or through our website contact form, we receive the
              contact details you choose to share along with the contents of your message.
            </p>
            <h2 className="pt-4 font-serif text-2xl font-semibold">How We Use It</h2>
            <p>
              Enquiry information is used solely to respond to your request, prepare quotations, and
              coordinate shipment logistics. We do not sell or share contact data with third parties.
            </p>
            <h2 className="pt-4 font-serif text-2xl font-semibold">Retention</h2>
            <p>
              Active partner records are retained for the duration of our trading relationship. You
              may request deletion of your records at any time by writing to shreedevglobal@gmail.com.
            </p>
            <h2 className="pt-4 font-serif text-2xl font-semibold">Contact</h2>
            <p>
              Questions about this policy can be sent to shreedevglobal@gmail.com or +91 9665922656.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

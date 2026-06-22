import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Request Quote — Shree Dev Global" },
      {
        name: "description",
        content:
          "Get in touch with Shree Dev Global. Request a quote or ask details about our agricultural exports including fresh, dehydrated, and powdered onion, garlic, ginger, and green chilli.",
      },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_BASE = "https://wa.me/919665922656";
const INSTAGRAM_URL = "https://www.instagram.com/shreedevglobal?igsh=c2x4eXk0dHd0Z21s";

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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").optional().or(z.literal("")),
  company: z.string().min(2, "Company name must be at least 2 characters").optional().or(z.literal("")),
  product: z.string().min(1, "Please select a product"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission to backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form Submission Data:", data);
      setIsSuccess(true);
      toast.success("Enquiry sent successfully! We will contact you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero / Header Section */}
      <section className="relative px-6 py-28 md:py-36 text-center overflow-hidden" style={{ background: "var(--soil)" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80"
            alt="Spices background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--saffron)]">
            Enquire &amp; Partner
          </span>
          <h1 className="mt-4 font-serif italic text-4xl md:text-6xl text-[var(--linen)]">
            Get in Touch
          </h1>
          <p className="mt-6 text-base font-light text-[var(--linen)] opacity-80 max-w-[560px] mx-auto leading-relaxed">
            Have a bulk requirement, custom specification, or logistics question? Reach out through our contact form or messaging channels.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form Container */}
      <section className="px-6 py-20 md:px-16" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-[1300px] grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          
          {/* Left Column: Contact details */}
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
            <p className="reveal-soft mt-6 max-w-[360px] text-[14px] leading-relaxed" style={{ color: "var(--bark)" }}>
              We respond within 24 hours. All enquiries are welcome — bulk container orders, trial shipments, or custom processing requests.
            </p>

            <div className="mt-10 space-y-2">
              {TILES.map((t, i) => (
                <a
                  key={t.label}
                  href={t.href}
                  target={t.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="reveal flex items-center gap-5 border-b py-6 transition-all hover:pl-2"
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

            <div className="mt-12 p-6 rounded-[6px] border border-[rgba(122,79,44,0.15)] bg-[var(--parchment)]">
              <h4 className="font-serif text-[16px] font-semibold text-[var(--soil)] mb-3">📍 Export Office</h4>
              <p className="text-[13px] leading-relaxed text-[var(--bark)]">
                Shree Dev Global<br />
                Nashik, Maharashtra, India<br />
              </p>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="reveal bg-[var(--parchment)] p-8 md:p-10 rounded-[8px] border border-[rgba(122,79,44,0.15)] shadow-sm">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <span className="text-5xl mb-4">🌾</span>
                <h3 className="font-serif text-2xl font-semibold text-[var(--soil)]">Thank You!</h3>
                <p className="mt-3 text-[14px] text-[var(--bark)] max-w-[400px]">
                  Your enquiry has been successfully received. A member of our export team will contact you via email or phone within the next 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 rounded-[2px] border-[1.5px] border-[var(--saffron)] bg-[var(--saffron)] px-6 py-2.5 text-[12px] uppercase tracking-[0.16em] text-[var(--soil)] transition-colors hover:bg-transparent hover:text-[var(--saffron)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="font-serif text-2xl text-[var(--soil)] font-semibold border-b pb-4 border-[rgba(122,79,44,0.15)]">
                  Export Enquiry Form
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-[12px] uppercase tracking-[0.1em] text-[var(--bark)]">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="border-[rgba(122,79,44,0.3)] bg-[var(--cream)] text-[var(--soil)] h-11 focus-visible:ring-[var(--saffron)]"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-[var(--ochre)] mt-0.5">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-[12px] uppercase tracking-[0.1em] text-[var(--bark)]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="border-[rgba(122,79,44,0.3)] bg-[var(--cream)] text-[var(--soil)] h-11 focus-visible:ring-[var(--saffron)]"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-[var(--ochre)] mt-0.5">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-[12px] uppercase tracking-[0.1em] text-[var(--bark)]">
                      Phone Number (WhatsApp preferred)
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      className="border-[rgba(122,79,44,0.3)] bg-[var(--cream)] text-[var(--soil)] h-11 focus-visible:ring-[var(--saffron)]"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-[var(--ochre)] mt-0.5">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Company field */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company" className="text-[12px] uppercase tracking-[0.1em] text-[var(--bark)]">
                      Company Name / Organization
                    </Label>
                    <Input
                      id="company"
                      placeholder="Global Imports LLC"
                      className="border-[rgba(122,79,44,0.3)] bg-[var(--cream)] text-[var(--soil)] h-11 focus-visible:ring-[var(--saffron)]"
                      {...register("company")}
                    />
                    {errors.company && (
                      <span className="text-[11px] text-[var(--ochre)] mt-0.5">{errors.company.message}</span>
                    )}
                  </div>
                </div>

                {/* Product Select field */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="product" className="text-[12px] uppercase tracking-[0.1em] text-[var(--bark)]">
                    Product of Interest *
                  </Label>
                  <select
                    id="product"
                    className="flex h-11 w-full rounded-md border border-[rgba(122,79,44,0.3)] bg-[var(--cream)] text-[var(--soil)] px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--saffron)]"
                    {...register("product")}
                  >
                    <option value="" disabled>Select a crop / product...</option>
                    <optgroup label="Fresh & Raw">
                      <option value="onion">Fresh Onion</option>
                      <option value="ginger">Fresh Ginger</option>
                      <option value="green_chilli">G4 Green Chilli</option>
                      <option value="moringa_drumstick">Moringa Drumstick</option>
                      <option value="elephant_yam">Elephant Yam</option>
                      <option value="coconut">Fresh Coconut</option>
                      <option value="pulses">Pulses</option>
                      <option value="spices">Indian Spices</option>
                    </optgroup>
                    <optgroup label="Dehydrated">
                      <option value="dehydrated_onion">Dehydrated Onion Flakes</option>
                      <option value="dehydrated_ginger">Dehydrated Ginger Flakes</option>
                      <option value="dehydrated_garlic">Dehydrated Garlic Flakes</option>
                    </optgroup>
                    <optgroup label="Powdered">
                      <option value="onion_powder">Onion Powder</option>
                      <option value="garlic_powder">Garlic Powder</option>
                      <option value="moringa_powder">Moringa Powder</option>
                      <option value="vegetable_powder">Vegetable Powder</option>
                    </optgroup>
                    <option value="other">Other / General Partnership</option>
                  </select>
                  {errors.product && (
                    <span className="text-[11px] text-[var(--ochre)] mt-0.5">{errors.product.message}</span>
                  )}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-[12px] uppercase tracking-[0.1em] text-[var(--bark)]">
                    Enquiry Details (Volume, Specifications, Destination Port) *
                    </Label>
                  <Textarea
                    id="message"
                    placeholder="Provide details about your quantity requirements (e.g. 20ft container), target delivery dates, or specific sizing parameters..."
                    className="border-[rgba(122,79,44,0.3)] bg-[var(--cream)] text-[var(--soil)] min-h-[140px] focus-visible:ring-[var(--saffron)] leading-relaxed"
                    {...register("message")}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-[var(--ochre)] mt-0.5">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center rounded-[2px] border-[1.5px] border-[var(--saffron)] bg-[var(--saffron)] px-8 py-3.5 text-[13px] uppercase tracking-[0.16em] text-[var(--soil)] font-medium transition-colors hover:bg-transparent hover:text-[var(--saffron)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-[var(--soil)]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Enquiry...
                    </span>
                  ) : (
                    "Submit Enquiry"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </Layout>
  );
}

import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const WHATSAPP_BASE = "https://wa.me/919665922656";

export function WheatIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
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

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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

  // Navbar background color logic
  const bgStyle = !isHome
    ? "rgba(44, 26, 14, 0.98)"
    : scrolled
    ? "rgba(44, 26, 14, 0.95)"
    : "transparent";

  const backdropStyle = !isHome || scrolled ? "blur(12px)" : "none";

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Certificates", to: "/certificates" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: bgStyle,
        backdropFilter: backdropStyle,
        WebkitBackdropFilter: backdropStyle,
        borderBottom: !isHome || scrolled ? "1px solid rgba(212, 133, 10, 0.15)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-2" style={{ color: "var(--saffron)" }}>
          <WheatIcon className="h-6 w-6" />
          <span className="font-serif text-[22px] font-semibold leading-none">Shree Dev Global</span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[13px] uppercase tracking-[0.18em] transition-all hover:opacity-100 [&.active]:text-[var(--saffron)] [&.active]:opacity-100"
              style={{ color: "var(--linen)", opacity: !isHome || scrolled ? 0.85 : 1 }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
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
        </Link>
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
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl italic [&.active]:text-[var(--saffron)]"
              style={{ color: "var(--linen)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
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
          </Link>
        </div>
      )}
    </header>
  );
}

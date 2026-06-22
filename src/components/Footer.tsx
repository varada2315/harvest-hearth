import { Link } from "@tanstack/react-router";

const INSTAGRAM_URL = "https://www.instagram.com/shreedevglobal?igsh=c2x4eXk0dHd0Z21s";

export function Footer() {
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
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
        © {new Date().getFullYear()} Shree Dev Global. All Rights Reserved.
      </div>
    </footer>
  );
}

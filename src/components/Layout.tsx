import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

function useReveal(pathname: string) {
  useEffect(() => {
    // Small delay to ensure the DOM has finished rendering after page change
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal, .reveal-soft");
      
      // Reset animations so they play again when navigating to a new page
      els.forEach((el) => {
        el.classList.remove("in");
      });

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
        { threshold: 0.05 } // slightly lower threshold for better responsiveness
      );

      els.forEach((el) => io.observe(el));

      return () => io.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  useReveal(location.pathname);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--parchment)] text-[var(--soil)] font-sans">
      <Navbar />
      <main className="flex-1 pt-[72px] md:pt-0">
        {/* Note: HomePage has full-screen Hero, so we don't want top padding there. 
            We handle this by conditionally adding top padding for subpages or handling it inside page.
            Let's let each page define its top spacing. HomePage has top-0, subpages will have custom headers. */}
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

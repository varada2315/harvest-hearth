const WHATSAPP_BASE = "https://wa.me/919665922656";

export function FloatingWhatsApp() {
  return (
    <a
      href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Shree Dev Global, I'd like to enquire about your products.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-2xl"
      style={{ background: "#25D366", color: "white" }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.5.7 4.9 2 7L4 29l6.7-1.5c2 .9 4.1 1.4 6.3 1.4 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.5c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4 .9.9-3.9-.2-.4c-1-1.7-1.6-3.6-1.6-5.5 0-5.7 4.6-10.3 10.3-10.3s10.3 4.6 10.3 10.3-4.6 10.3-10.3 10.3zm5.7-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.3z"/>
      </svg>
    </a>
  );
}

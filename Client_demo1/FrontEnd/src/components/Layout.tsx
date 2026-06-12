import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Hammer, Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/diensten" },
    { name: t.nav.about, path: "/over-ons" },
    { name: t.nav.projects, path: "/projecten" },
    { name: t.nav.contact, path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="bg-primary p-2 rounded-lg text-white transition-all duration-300"
            style={{ boxShadow: "0 0 14px hsl(214 92% 58% / 0.4)" }}
          >
            <Hammer size={22} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl leading-none text-white tracking-tight">Schwung Bouw</span>
            <span className="text-[9px] text-white/35 font-semibold uppercase tracking-widest mt-0.5">Vakmanschap & Renovatie</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold transition-all duration-200 hover:text-white relative group ${
                location === link.path ? "text-primary" : "text-white/55"
              }`}
            >
              {link.name}
              {location === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary rounded-full" />
              )}
            </Link>
          ))}

          <button
            onClick={() => setLang(lang === "nl" ? "en" : "nl")}
            className="flex items-center gap-1.5 text-xs font-bold border border-white/10 rounded-full px-3 py-1.5 hover:border-primary/50 hover:text-white text-white/50 transition-all duration-200"
          >
            {lang === "nl" ? <><span>🇬🇧</span><span>EN</span></> : <><span>🇳🇱</span><span>NL</span></>}
          </button>

          <Link href="/contact">
            <Button size="sm" className="font-bold px-5 glow-btn text-white">
              {t.nav.cta}
            </Button>
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "nl" ? "en" : "nl")}
            className="flex items-center gap-1 text-xs font-bold border border-white/10 rounded-full px-2.5 py-1 text-white/50"
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
          <button className="p-2 text-white/60 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/95 px-4 py-5">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold ${location === link.path ? "text-primary" : "text-white/60"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-1 font-bold glow-btn">{t.nav.cta}</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLang();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/diensten" },
    { name: t.nav.about, path: "/over-ons" },
    { name: t.nav.projects, path: "/projecten" },
    { name: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer style={{ background: "hsl(222 22% 3%)" }} className="mt-auto">
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, hsl(214 92% 58% / 0.4), transparent)" }}
      />
      <div className="container mx-auto px-4 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="bg-primary p-1.5 rounded text-white" style={{ boxShadow: "0 0 10px hsl(214 92% 58% / 0.35)" }}>
              <Hammer size={18} />
            </div>
            <span className="font-extrabold text-xl text-white">Schwung Bouw</span>
          </div>
          <p className="text-white/40 text-sm max-w-sm mb-6 leading-relaxed">{t.footer.tagline}</p>
          <div className="text-xs text-white/25 font-mono">KVK: 12345678</div>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-white/35 mb-5">{t.footer.quickLinks}</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-white/45 hover:text-white transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-white/35 mb-5">{t.footer.contact}</h3>
          <ul className="space-y-4">
            <li>
              <a href="tel:+31612345678" className="flex items-center gap-3 text-white/45 hover:text-white transition-colors text-sm group">
                <Phone size={14} className="text-primary group-hover:scale-110 transition-transform" />
                +31 6 12 34 56 78
              </a>
            </li>
            <li>
              <a href="mailto:info@schwungbouw.nl" className="flex items-center gap-3 text-white/45 hover:text-white transition-colors text-sm group">
                <Mail size={14} className="text-primary group-hover:scale-110 transition-transform" />
                info@schwungbouw.nl
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-white/45 hover:text-[#25D366] transition-colors text-sm group">
                <MessageCircle size={14} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-8 pt-6 border-t border-white/5 text-xs text-white/20 text-center">
        &copy; {new Date().getFullYear()} Schwung Bouw. {t.footer.rights}
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}

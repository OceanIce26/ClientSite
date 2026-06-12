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
    <header
      className="navbar-stripe sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl relative"
      style={{ borderBottom: "1px solid hsl(220 35% 90%)" }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="p-2 rounded-lg text-white transition-all duration-300"
            style={{
              background: "hsl(225 100% 50%)",
              boxShadow: "0 0 14px hsl(225 100% 50% / 0.35)",
            }}
          >
            <Hammer size={22} />
          </div>
          <div className="flex flex-col">
            <span
              className="font-extrabold text-xl leading-none tracking-tight"
              style={{ color: "hsl(222 60% 96.5%)" }}
            >
              Schwung Bouw
            </span>
            <span
              className="text-[9px] font-semibold uppercase tracking-widest mt-0.5"
              style={{ color: "hsl(220 20% 55%)" }}
            >
              Vakmanschap & Renovatie
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold transition-all duration-200 relative group ${
                location === link.path
                  ? "text-[hsl(225,100%,50%)]"
                  : "hover:text-[hsl(222,60%,8%)]"
              }`}
              style={{
                color:
                  location === link.path
                    ? "hsl(225 100% 50%)"
                    : "hsl(220 20% 45%)",
              }}
            >
              {link.name}
              {location === link.path && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "hsl(225 100% 50%)" }}
                />
              )}
            </Link>
          ))}

          <button
            onClick={() => setLang(lang === "nl" ? "en" : "nl")}
            className="flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1.5 transition-all duration-200"
            style={{
              border: "1.5px solid hsl(220 35% 86%)",
              color: "hsl(220 20% 50%)",
            }}
          >
            {lang === "nl" ? (
              <>
                <span>🇬🇧</span>
                <span>EN</span>
              </>
            ) : (
              <>
                <span>🇳🇱</span>
                <span>NL</span>
              </>
            )}
          </button>

          <Link href="/contact">
            <Button
              size="sm"
              className="font-bold px-5 glow-btn text-white"
              style={{ background: "hsl(225 100% 50%)" }}
            >
              {t.nav.cta}
            </Button>
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "nl" ? "en" : "nl")}
            className="flex items-center gap-1 text-xs font-bold rounded-full px-2.5 py-1"
            style={{
              border: "1.5px solid hsl(220 35% 86%)",
              color: "hsl(220 20% 50%)",
            }}
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
          <button
            className="p-2"
            style={{ color: "hsl(220 20% 45%)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-white px-4 py-5"
          style={{
            background: "hsl(218 45% 7% / 0.98)",
            borderTop: "1px solid hsl(199 89% 58% / 0.14)",
          }}
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold"
                style={{
                  color:
                    location === link.path
                      ? "hsl(225 100% 50%)"
                      : "hsl(220 20% 45%)",
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button
                className="w-full mt-1 font-bold glow-btn"
                style={{ background: "hsl(225 100% 50%)" }}
              >
                {t.nav.cta}
              </Button>
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
    <footer style={{ background: "hsl(222 60% 7%)" }} className="mt-auto">
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(225 100% 60% / 0.45), transparent)",
        }}
      />
      <div className="container mx-auto px-4 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div
              className="p-1.5 rounded text-white"
              style={{
                background: "hsl(225 100% 50%)",
                boxShadow: "0 0 10px hsl(225 100% 50% / 0.30)",
              }}
            >
              <Hammer size={18} />
            </div>
            <span className="font-extrabold text-xl text-white">
              Schwung Bouw
            </span>
          </div>
          <p
            className="text-sm max-w-sm mb-6 leading-relaxed"
            style={{ color: "hsl(220 20% 55%)" }}
          >
            {t.footer.tagline}
          </p>
          <div
            className="text-xs font-mono"
            style={{ color: "hsl(220 20% 35%)" }}
          >
            KVK: 12345678
          </div>
        </div>

        <div>
          <h3
            className="font-bold text-sm uppercase tracking-widest mb-5"
            style={{ color: "hsl(220 20% 38%)" }}
          >
            {t.footer.quickLinks}
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "hsl(220 20% 48%)" }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="font-bold text-sm uppercase tracking-widest mb-5"
            style={{ color: "hsl(220 20% 38%)" }}
          >
            {t.footer.contact}
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="tel:+31612345678"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                style={{ color: "hsl(220 20% 48%)" }}
              >
                <Phone
                  size={14}
                  style={{ color: "hsl(225 100% 60%)" }}
                  className="group-hover:scale-110 transition-transform"
                />
                +31 6 12 34 56 78
              </a>
            </li>
            <li>
              <a
                href="mailto:info@schwungbouw.nl"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                style={{ color: "hsl(220 20% 48%)" }}
              >
                <Mail
                  size={14}
                  style={{ color: "hsl(225 100% 60%)" }}
                  className="group-hover:scale-110 transition-transform"
                />
                info@schwungbouw.nl
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 text-sm transition-colors group"
                style={{ color: "hsl(220 20% 48%)" }}
              >
                <MessageCircle
                  size={14}
                  className="text-[#25D366] group-hover:scale-110 transition-transform"
                />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="container mx-auto px-4 pb-8 pt-6 text-xs text-center"
        style={{
          borderTop: "1px solid hsl(222 40% 14%)",
          color: "hsl(220 20% 32%)",
        }}
      >
        &copy; {new Date().getFullYear()} Schwung Bouw. {t.footer.rights}
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

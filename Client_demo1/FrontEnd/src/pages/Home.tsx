import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Ruler,
  Home as HomeIcon,
  Hammer,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLang();
  const icons = [
    <ShieldCheck size={22} />,
    <Hammer size={22} />,
    <Ruler size={22} />,
    <HomeIcon size={22} />,
  ];

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/52" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(224 40% 6% / 0.75) 0%, hsl(20 60% 12% / 0.45) 50%, hsl(340 60% 8% / 0.60) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 70% at 15% 50%, hsl(25 92% 55% / 0.12) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Left accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px z-10 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 10%, hsl(25 92% 58% / 0.5) 35%, hsl(25 92% 58% / 0.5) 65%, transparent 90%)",
          }}
        />

        <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Headline first */}
            <h1 className="hero-headline text-[4.5rem] md:text-[7.5rem] mb-5">
              <span className="hero-headline-line1 block">{t.home.headline1}</span>
              <span className="hero-headline-line2 block">{t.home.headline2}</span>
            </h1>

            {/* Badge after headline */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/12 backdrop-blur-sm mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                {t.home.badge}
              </span>
            </motion.div>

            {/* Short rule + sub */}
            <div className="flex items-start gap-4 mb-10">
              <div
                className="w-8 mt-3 shrink-0"
                style={{
                  height: "2px",
                  background: "hsl(25 95% 55%)",
                  borderRadius: "2px",
                }}
              />
              <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-xl">
                {t.home.sub}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm h-12 px-8 font-bold glow-btn gap-2"
                >
                  {t.home.cta1}
                  <ArrowRight size={15} />
                </Button>
              </Link>
              <Link href="/diensten">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-sm h-12 px-8 font-semibold border-white/15 bg-white/6 backdrop-blur text-white hover:bg-white/10 hover:border-white/25 hover:text-white"
                >
                  {t.home.cta2}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-8 sm:gap-14"
            >
              {[
                { num: "15+", label: "Jaar ervaring" },
                { num: "200+", label: "Projecten" },
                { num: "100%", label: "Tevredenheid" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-extrabold text-white leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                    {s.num}
                  </span>
                  <span className="text-xs text-white/45 font-semibold mt-1.5 uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent mx-auto"
          />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section
        className="border-y py-4"
        style={{
          background: "linear-gradient(90deg, hsl(224 22% 11%) 0%, hsl(20 30% 12%) 50%, hsl(224 22% 11%) 100%)",
          borderColor: "hsl(220 18% 20%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center divide-x" style={{ borderColor: "hsl(220 18% 22%)" }}>
            {[
              { icon: <HomeIcon size={15} />, label: t.home.trustBar[0] },
              { icon: <ShieldCheck size={15} />, label: t.home.trustBar[1] },
              { icon: <MessageCircle size={15} />, label: t.home.trustBar[2] },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-white/50 text-xs font-semibold tracking-wide uppercase px-6 py-2"
              >
                <span className="text-primary">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELLING POINTS — BENTO GRID ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
              Waarom Schwung Bouw
            </p>
            <h2 className="page-headline text-5xl md:text-6xl text-white leading-tight max-w-lg">
              {t.home.sectionTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured large card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 card-glow rounded-2xl border p-8 relative overflow-hidden flex flex-col justify-between"
              style={{
                minHeight: "280px",
                background:
                  "linear-gradient(145deg, hsl(25 35% 13%) 0%, hsl(224 22% 10%) 100%)",
                borderColor: "hsl(25 30% 22%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, hsl(25 92% 58% / 0.14) 0%, transparent 70%)",
                  transform: "translate(25%, -25%)",
                }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-primary"
                style={{ background: "hsl(25 50% 18%)" }}
              >
                {icons[0]}
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary/60 mb-2 block">
                  01
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.home.points[0].title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  {t.home.points[0].desc}
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-glow rounded-2xl border p-7 flex flex-col justify-between"
              style={{
                minHeight: "280px",
                background:
                  "linear-gradient(160deg, hsl(224 22% 12%) 0%, hsl(224 22% 9%) 100%)",
                borderColor: "hsl(220 18% 20%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-primary"
                style={{ background: "hsl(25 50% 16%)" }}
              >
                {icons[1]}
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary/60 mb-2 block">
                  02
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.home.points[1].title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {t.home.points[1].desc}
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glow rounded-2xl border p-7 flex flex-col justify-between"
              style={{
                minHeight: "220px",
                background:
                  "linear-gradient(160deg, hsl(224 22% 12%) 0%, hsl(224 22% 9%) 100%)",
                borderColor: "hsl(220 18% 20%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-primary"
                style={{ background: "hsl(25 50% 16%)" }}
              >
                {icons[2]}
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary/60 mb-2 block">
                  03
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.home.points[2].title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {t.home.points[2].desc}
                </p>
              </div>
            </motion.div>

            {/* Card 4 — wide */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 card-glow rounded-2xl border p-7 flex flex-col justify-between"
              style={{
                minHeight: "220px",
                background:
                  "linear-gradient(145deg, hsl(224 22% 12%) 0%, hsl(224 22% 9%) 100%)",
                borderColor: "hsl(220 18% 20%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-primary"
                style={{ background: "hsl(25 50% 16%)" }}
              >
                {icons[3]}
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary/60 mb-2 block">
                  04
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.home.points[3].title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-md">
                  {t.home.points[3].desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "hsl(224 22% 7%)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 50%, hsl(25 92% 55% / 0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 30% 50% at 80% 80%, hsl(340 80% 50% / 0.05) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
                Klaar om te beginnen?
              </p>
              <h2 className="page-headline text-5xl md:text-6xl text-white leading-tight mb-5">
                {t.home.ctaTitle}
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                {t.home.ctaDesc}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="shrink-0"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-base h-13 px-10 font-bold glow-btn gap-2"
                >
                  {t.home.ctaBtn}
                  <ArrowUpRight size={17} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

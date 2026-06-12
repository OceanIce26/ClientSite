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
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Workshop"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(222 80% 6% / 0.88) 0%, hsl(217 80% 10% / 0.60) 60%, hsl(222 80% 8% / 0.80) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 70% at 12% 55%, hsl(225 100% 50% / 0.16) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Decorative "SCHWUNG" watermark behind hero content */}
        <div
          className="absolute right-[-2%] bottom-[-4%] z-0 select-none pointer-events-none leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(6rem, 22vw, 24rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            letterSpacing: "0.02em",
          }}
        >
          BOUW
        </div>

        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 z-10 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 10%, hsl(225 100% 60% / 0.7) 35%, hsl(225 100% 60% / 0.7) 65%, transparent 90%)",
          }}
        />

        <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="hero-headline text-[4.5rem] md:text-[7.5rem] mb-5">
              <span className="hero-headline-line1 block">
                {t.home.headline1}
              </span>
              <span className="hero-headline-line2 block">
                {t.home.headline2}
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-sm mb-7"
              style={{
                border: "1px solid hsl(38 95% 50% / 0.60)",
                background: "hsl(38 95% 50% / 0.15)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "hsl(38 95% 50%)" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "hsl(38 95% 60%)" }}
              >
                {t.home.badge}
              </span>
            </motion.div>

            <div className="flex items-start gap-4 mb-10">
              <div
                className="w-8 mt-3 shrink-0"
                style={{
                  height: "2px",
                  background: "hsl(225 100% 65%)",
                  borderRadius: "2px",
                }}
              />
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                {t.home.sub}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm h-12 px-8 font-bold gap-2 text-white glow-btn"
                  style={{ background: "hsl(225 100% 50%)" }}
                >
                  {t.home.cta1} <ArrowRight size={15} />
                </Button>
              </Link>
              <Link href="/diensten">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-sm h-12 px-8 font-semibold border-white/20 bg-white/6 backdrop-blur text-white hover:bg-white/15 hover:border-white/30 hover:text-white"
                >
                  {t.home.cta2}
                </Button>
              </Link>
            </div>

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
                  <span
                    className="text-3xl font-extrabold text-white leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs font-semibold mt-1.5 uppercase tracking-wider text-white/45">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent mx-auto"
          />
        </div>
      </section>

      {/* ── TRUST BAR — dark navy flip ── */}
      <section
        style={{
          background: "hsl(222 60% 8%)",
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <div className="container mx-auto px-6">
          <div
            className="flex flex-wrap justify-center"
            style={{ borderColor: "hsl(222 40% 16%)" }}
          >
            {[
              { icon: <HomeIcon size={15} />, label: t.home.trustBar[0] },
              { icon: <ShieldCheck size={15} />, label: t.home.trustBar[1] },
              { icon: <MessageCircle size={15} />, label: t.home.trustBar[2] },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-xs font-semibold tracking-wide uppercase px-6 py-4"
                style={{
                  color: "hsl(220 20% 55%)",
                  borderRight: i < 2 ? "1px solid hsl(222 40% 16%)" : "none",
                }}
              >
                <span style={{ color: "hsl(225 100% 65%)" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELLING POINTS ── */}
      <section className="py-28 bg-background relative overflow-hidden">
        {/* Ghost watermark */}
        {/* <div className="absolute left-[-1%] top-[5%] ghost-number opacity-60 select-none pointer-events-none">
          WHY
        </div> */}

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
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
              className="md:col-span-2 accent-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between bg-white"
              style={{
                minHeight: "280px",
                border: "1px solid hsl(220 35% 90%)",
                borderLeft: "4px solid hsl(225 100% 50%)",
              }}
            >
              <div
                className="absolute top-3 right-4 ghost-number opacity-25 text-[6rem]"
                style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
              >
                01
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "hsl(225 100% 50% / 0.10)",
                  color: "hsl(225 100% 50%)",
                }}
              >
                {icons[0]}
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "hsl(222 60% 8%)" }}
                >
                  {t.home.points[0].title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm"
                  style={{ color: "hsl(220 20% 48%)" }}
                >
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
              className="accent-card rounded-2xl p-7 flex flex-col justify-between bg-white"
              style={{
                minHeight: "280px",
                border: "1px solid hsl(220 35% 90%)",
                borderLeft: "4px solid hsl(225 100% 50%)",
              }}
            >
              <div className="absolute-none" />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "hsl(38 95% 50% / 0.10)",
                  color: "hsl(38 95% 45%)",
                }}
              >
                {icons[1]}
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "hsl(222 60% 8%)" }}
                >
                  {t.home.points[1].title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "hsl(220 20% 48%)" }}
                >
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
              className="accent-card rounded-2xl p-7 flex flex-col justify-between bg-white"
              style={{
                minHeight: "220px",
                border: "1px solid hsl(220 35% 90%)",
                borderLeft: "4px solid hsl(38 95% 50%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "hsl(225 100% 50% / 0.10)",
                  color: "hsl(225 100% 50%)",
                }}
              >
                {icons[2]}
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "hsl(222 60% 8%)" }}
                >
                  {t.home.points[2].title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "hsl(220 20% 48%)" }}
                >
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
              className="md:col-span-2 accent-card rounded-2xl p-7 flex flex-col justify-between bg-white relative overflow-hidden"
              style={{
                minHeight: "220px",
                border: "1px solid hsl(220 35% 90%)",
                borderLeft: "4px solid hsl(38 95% 50%)",
              }}
            >
              <div
                className="absolute top-3 right-4 ghost-number opacity-20"
                style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
              >
                04
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "hsl(38 95% 50% / 0.10)",
                  color: "hsl(38 95% 45%)",
                }}
              >
                {icons[3]}
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "hsl(222 60% 8%)" }}
                >
                  {t.home.points[3].title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-md"
                  style={{ color: "hsl(220 20% 48%)" }}
                >
                  {t.home.points[3].desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — deep navy with amber button ── */}
      <section className="py-28 relative overflow-hidden section-warm">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 70% at 80% 50%, hsl(225 100% 50% / 0.07) 0%, transparent 65%)",
          }}
        />
        {/* Ghost watermark */}
        <div
          className="absolute right-[-2%] bottom-[-10%] ghost-number opacity-40 select-none pointer-events-none"
          style={{ fontSize: "clamp(8rem, 22vw, 20rem)" }}
        >
          START
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "hsl(225 100% 50%)" }}
              >
                Klaar om te beginnen?
              </p>
              <h2
                className="page-headline text-5xl md:text-6xl leading-tight mb-5"
                style={{ color: "hsl(222 60% 96.5%)" }}
              >
                {t.home.ctaTitle}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(220 20% 45%)" }}
              >
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
                  className="text-base h-13 px-10 font-bold gap-2 glow-amber text-white"
                  style={{
                    background: "hsl(38 95% 50%)",
                    color: "hsl(222 60% 6%)",
                  }}
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

import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <Layout>
      {/* ── PAGE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80&auto=format&fit=crop"
            alt="Over ons banner"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, hsl(224 40% 6% / 0.90) 0%, hsl(200 60% 10% / 0.68) 55%, hsl(224 40% 8% / 0.84) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 75% at 30% 50%, hsl(195 80% 40% / 0.12) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(224 20% 9%))",
          }}
        />

        <div
          className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col justify-center"
          style={{ minHeight: "400px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-12"
          >
            {/* Headline first */}
            <h1 className="page-headline text-[4rem] md:text-[6rem] text-white leading-none mb-5 max-w-3xl">
              {t.about.title}
            </h1>

            {/* Badge after headline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/12 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                {t.nav.about}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6 text-white/60 text-base leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              {/* Quote */}
              <div
                className="my-10 relative rounded-2xl p-8 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(25 30% 13%) 0%, hsl(224 22% 10%) 100%)",
                  borderLeft: "3px solid hsl(25 92% 55%)",
                }}
              >
                <Quote
                  className="absolute top-4 right-4 opacity-15"
                  size={52}
                  style={{ color: "hsl(25 92% 55%)" }}
                />
                <p className="text-xl font-bold text-white italic leading-snug relative z-10">
                  {t.about.quote}
                </p>
              </div>

              <p className="text-white/60 text-base leading-relaxed mb-8">{t.about.p3}</p>

              {/* Chips */}
              <div className="flex flex-wrap gap-3">
                {["ZZP", "Heel Nederland", "100% Tevreden"].map((chip) => (
                  <span
                    key={chip}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold text-primary border border-primary/30"
                    style={{ background: "hsl(25 40% 12%)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(25 92% 55% / 0.12) 0%, transparent 70%)",
                }}
              />
              <img
                src="/images/about.png"
                alt={t.about.imgAlt}
                className="relative z-10 rounded-2xl w-full object-cover shadow-2xl aspect-[4/3]"
                style={{ border: "1px solid hsl(220 18% 18%)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

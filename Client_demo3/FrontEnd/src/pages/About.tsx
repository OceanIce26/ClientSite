import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <Layout>
      {/* ── PAGE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
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
                "linear-gradient(120deg, hsl(222 80% 6% / 0.92) 0%, hsl(217 80% 10% / 0.68) 55%, hsl(222 80% 8% / 0.86) 100%)",
            }}
          />
        </div>
        {/* <Note> Light */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(220 45% 5%))", //hwb(179 26% 7.9%)
          }}
        />
        {/* <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(to bottom, hsl(225 100% 60%), hsl(38 95% 50%), hsl(225 100% 60%))",
          }}
        /> */}

        <div
          className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col justify-center"
          style={{ minHeight: "320px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-12"
          >
            <h1 className="page-headline text-[4rem] md:text-[6rem] text-white leading-none mb-4 max-w-3xl">
              {t.about.title}
            </h1>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
              style={{
                border: "1px solid hsl(38 95% 50% / 0.50)",
                background: "hsl(38 95% 50% / 0.12)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "hsl(38 95% 50%)" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "hsl(38 95% 60%)" }}
              >
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
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="space-y-6 text-base leading-relaxed"
                style={{ color: "hsl(220 20% 44%)" }}
              >
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              {/* Quote */}
              <div
                className="my-10 relative rounded-2xl p-8 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(25 30% 13%) 0%, hsl(224 22% 10%) 100%)",
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
              {/* <div
                className="my-10 relative rounded-2xl p-8 overflow-hidden bg-white"
                style={{
                  borderLeft: "4px solid hsl(38 95% 50%)",
                  border: "1px solid hsl(220 35% 90%)",
                  borderLeft: "4px solid hsl(38 95% 50%)",
                  boxShadow: "0 4px 24px hsl(38 95% 50% / 0.08)",
                }}
              >
                <Quote
                  className="absolute top-4 right-4 opacity-10"
                  size={52}
                  style={{ color: "hsl(38 95% 50%)" }}
                />
                <p
                  className="text-xl font-bold italic leading-snug relative z-10"
                  style={{ color: "hsl(222 60% 8%)" }}
                >
                  {t.about.quote}
                </p>
              </div> */}

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "hsl(220 20% 44%)" }}
              >
                {t.about.p3}
              </p>

              <div className="flex flex-wrap gap-3">
                {["ZZP", "Heel Nederland", "100% Tevreden"].map((chip, i) => (
                  <span
                    key={chip}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold"
                    style={{
                      background:
                        i % 2 === 0
                          ? "hsl(225 100% 50% / 0.08)"
                          : "hsl(38 95% 50% / 0.10)",
                      color:
                        i % 2 === 0 ? "hsl(225 100% 45%)" : "hsl(38 95% 40%)",
                      border: `1px solid ${i % 2 === 0 ? "hsl(225 100% 50% / 0.25)" : "hsl(38 95% 50% / 0.30)"}`,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, hsl(225 100% 50% / 0.08) 0%, transparent 70%)",
                }}
              />
              <img
                src="/images/about.png"
                alt={t.about.imgAlt}
                className="relative z-10 rounded-2xl w-full object-cover shadow-xl aspect-[4/3]"
                style={{ border: "1px solid hsl(220 35% 88%)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

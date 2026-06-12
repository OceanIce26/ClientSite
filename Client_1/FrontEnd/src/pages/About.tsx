import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <Layout>
      {/* Page header */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ background: "hsl(222 22% 4%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 80% at 30% 50%, hsl(214 92% 58% / 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-5 border border-primary/25 bg-primary/8 px-4 py-1.5 rounded-full">
              {t.nav.about}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-2xl">{t.about.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6 text-white/55 text-base leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              {/* Quote */}
              <div
                className="my-10 relative rounded-2xl p-8 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(222 20% 10%) 0%, hsl(222 22% 7%) 100%)",
                  borderLeft: "3px solid hsl(214 92% 58%)",
                }}
              >
                <Quote
                  className="absolute top-4 right-4 opacity-10"
                  size={52}
                  style={{ color: "hsl(214 92% 58%)" }}
                />
                <p className="text-xl font-bold text-white italic leading-snug relative z-10">
                  {t.about.quote}
                </p>
              </div>

              <p className="text-white/55 text-base leading-relaxed mb-8">{t.about.p3}</p>

              {/* Chips */}
              <div className="flex flex-wrap gap-3">
                {["ZZP", "Heel Nederland", "100% Tevreden"].map((chip) => (
                  <span
                    key={chip}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold text-primary border border-primary/25"
                    style={{ background: "hsl(214 40% 10%)" }}
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
              {/* Glow blob behind image */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(214 92% 58% / 0.1) 0%, transparent 70%)",
                }}
              />
              <img
                src="/images/about.png"
                alt={t.about.imgAlt}
                className="relative z-10 rounded-2xl w-full object-cover shadow-2xl aspect-[4/3]"
                style={{ border: "1px solid hsl(220 16% 14%)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

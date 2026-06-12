import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Hammer, PaintRoller, Square, Grid3x3, CheckCircle2 } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const categoryIcons = [
  <Hammer className="w-7 h-7" />,
  <Square className="w-7 h-7" />,
  <PaintRoller className="w-7 h-7" />,
  <Grid3x3 className="w-7 h-7" />,
];

export default function Services() {
  const { t } = useLang();

  return (
    <Layout>
      {/* ── PAGE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop"
            alt="Diensten banner"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(224 40% 6% / 0.88) 0%, hsl(25 70% 10% / 0.72) 50%, hsl(224 40% 8% / 0.85) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 20% 60%, hsl(25 92% 55% / 0.14) 0%, transparent 65%)",
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

        <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col justify-center" style={{ minHeight: "420px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-12"
          >
            {/* Headline first */}
            <h1 className="page-headline text-[4rem] md:text-[6rem] text-white mb-5 leading-none">
              {t.services.title}
            </h1>

            {/* Badge after headline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/12 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                {t.nav.services}
              </span>
            </div>

            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">{t.services.sub}</p>
          </motion.div>
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {t.services.categories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-glow rounded-2xl border overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, hsl(224 22% 13%) 0%, hsl(224 22% 10%) 100%)",
                  borderColor: "hsl(220 18% 20%)",
                }}
              >
                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6"
                    style={{
                      background: "hsl(25 50% 18%)",
                      boxShadow: "0 0 22px hsl(25 92% 55% / 0.20)",
                    }}
                  >
                    {categoryIcons[index]}
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mb-2">{service.title}</h2>
                  <p className="text-white/45 text-sm mb-7">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/65 text-sm">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

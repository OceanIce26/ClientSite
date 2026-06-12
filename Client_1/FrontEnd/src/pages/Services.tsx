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
      {/* Header */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ background: "hsl(222 22% 4%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 50% 50%, hsl(214 92% 58% / 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-5 border border-primary/25 bg-primary/8 px-4 py-1.5 rounded-full">
              {t.nav.services}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">{t.services.title}</h1>
            <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">{t.services.sub}</p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
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
                className="card-glow rounded-2xl border border-white/7 overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, hsl(222 20% 10%) 0%, hsl(222 22% 7%) 100%)",
                }}
              >
                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6"
                    style={{
                      background: "hsl(214 40% 14%)",
                      boxShadow: "0 0 20px hsl(214 92% 58% / 0.18)",
                    }}
                  >
                    {categoryIcons[index]}
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mb-2">{service.title}</h2>
                  <p className="text-white/40 text-sm mb-7">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
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

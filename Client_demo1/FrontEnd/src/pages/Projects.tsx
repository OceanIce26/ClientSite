import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLang();
  const folderName = "SchwungBouw";

  return (
    <Layout>
      {/* ── PAGE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80&auto=format&fit=crop"
            alt="Projecten banner"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(224 40% 6% / 0.88) 0%, hsl(280 50% 10% / 0.65) 50%, hsl(224 40% 8% / 0.84) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 40%, hsl(280 80% 60% / 0.10) 0%, transparent 60%)",
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
          className="container mx-auto px-6 lg:px-16 relative z-10 text-center flex flex-col items-center justify-center"
          style={{ minHeight: "420px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-12"
          >
            {/* Headline first */}
            <h1 className="page-headline text-[4rem] md:text-[6.5rem] text-white mb-5 leading-none">
              {t.projects.title}
            </h1>

            {/* Badge after headline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/12 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                {t.nav.projects}
              </span>
            </div>

            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {t.projects.sub}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── GALLERY ── */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border card-glow"
                style={{
                  background: "hsl(224 22% 11%)",
                  borderColor: "hsl(220 18% 20%)",
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={folderName + project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{
                        background: "hsl(25 92% 55%)",
                        boxShadow: "0 0 12px hsl(25 92% 55% / 0.45)",
                      }}
                    >
                      {t.projects.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1.5 text-white group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

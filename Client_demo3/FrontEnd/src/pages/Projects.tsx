import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLang();
  const folderName = "SchwungBouw";

  return (
    <Layout>
      {/* ── PAGE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
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
                "linear-gradient(135deg, hsl(222 80% 6% / 0.90) 0%, hsl(217 80% 10% / 0.65) 50%, hsl(222 80% 8% / 0.86) 100%)",
            }}
          />
        </div>
        {/* <Note> Light */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(220 45% 5%))",
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
          className="container mx-auto px-6 lg:px-16 relative z-10 text-center flex flex-col items-center justify-center"
          style={{ minHeight: "320px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-12"
          >
            <h1 className="page-headline text-[4rem] md:text-[6.5rem] text-white mb-4 leading-none">
              {t.projects.title}
            </h1>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-sm mb-5"
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
                className="group cursor-pointer rounded-2xl overflow-hidden card-glow bg-white"
                style={{
                  border: "1px solid hsl(220 35% 90%)",
                  borderTop: `3px solid ${index % 2 === 0 ? "hsl(225 100% 50%)" : "hsl(38 95% 50%)"}`,
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={folderName + project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{
                        background:
                          index % 2 === 0
                            ? "hsl(225 100% 50%)"
                            : "hsl(38 95% 50%)",
                        boxShadow: `0 0 12px ${index % 2 === 0 ? "hsl(225 100% 50% / 0.40)" : "hsl(38 95% 50% / 0.40)"}`,
                        color: index % 2 === 0 ? "white" : "hsl(222 60% 8%)",
                      }}
                    >
                      {t.projects.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="font-bold text-lg mb-1.5 transition-colors duration-200"
                    style={{ color: "hsl(222 60% 8%)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "hsl(220 20% 48%)" }}
                  >
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

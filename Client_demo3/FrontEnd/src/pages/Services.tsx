import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const servicePhotos = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80&auto=format&fit=crop",
];

// Alternating: cool periwinkle / warm cream
const sectionBgs = [
  "hsl(220 45% 5%)",

  "hsl(220 55% 96.5%)",
  // "hsl(220 50% 25%)",
  "hsl(220 45% 5%)",
  "hsl(220 45% 5%)",
  // "#FBF8F2",
  // "hsl(220 55% 96.5%)",

  // "#FBF8F2",
];

const accentColors = [
  "hsl(225 100% 50%)",
  "hsl(38 95% 50%)",
  "hsl(225 100% 50%)",
  "hsl(38 95% 50%)",
];

export default function Services() {
  const { t } = useLang();

  return (
    <Layout>
      {/* ── PAGE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
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
                "linear-gradient(135deg, hsl(222 80% 6% / 0.90) 0%, hsl(217 80% 10% / 0.72) 50%, hsl(222 80% 8% / 0.88) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 20% 60%, hsl(225 100% 50% / 0.15) 0%, transparent 65%)",
            }}
          />
        </div>
        {/* Bottom fade to periwinkle bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(220 45% 5%))",
          }}
        />
        {/* Left stripe */}
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
            <h1 className="page-headline text-[4rem] md:text-[6rem] text-white mb-4 leading-none">
              {t.services.title}
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
                {t.nav.services}
              </span>
            </div>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              {t.services.sub}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── SERVICE BANNERS ── */}
      <div>
        {t.services.categories.map((service, index) => {
          const isEven = index % 2 === 0;
          const photo = servicePhotos[index % servicePhotos.length];
          const bg = sectionBgs[index % sectionBgs.length];
          const accent = accentColors[index % accentColors.length];
          const isAmber = index % 2 !== 0;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              style={{ background: bg }}
            >
              <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[300px]`}
              >
                {/* Photo side */}
                <div className="relative lg:w-5/12 min-h-[200px] lg:min-h-[300px] overflow-hidden">
                  <motion.img
                    src={photo}
                    alt={service.title}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isEven
                        ? `linear-gradient(to right, transparent 50%, ${bg} 100%)`
                        : `linear-gradient(to left, transparent 50%, ${bg} 100%)`,
                    }}
                  />
                  {/* Number watermark */}
                  <div
                    className="absolute bottom-2 left-4 font-['Bebas_Neue'] leading-none select-none pointer-events-none"
                    style={{
                      fontSize: "clamp(5rem, 14vw, 10rem)",
                      color: "transparent",
                      WebkitTextStroke: `2px ${accent}40`,
                      opacity: 0.9,
                    }}
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:w-7/12 flex items-center">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 36 : -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="px-8 py-10 lg:px-14 lg:py-12 w-full"
                  >
                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                      style={{
                        background: `${accent}18`,
                        color: accent,
                        border: `1px solid ${accent}35`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: accent }}
                      />
                      Service {String(index + 1).padStart(2, "0")}
                    </div>

                    <h2
                      className="page-headline text-[2.8rem] md:text-[3.8rem] mb-3 leading-none"
                      style={{ color: "hsl(220 55% 96.5%)" }}
                    >
                      {service.title}
                    </h2>

                    {/* Accent line under title */}
                    <div
                      className="w-10 h-1 mb-4 rounded-full"
                      style={{ background: accent }}
                    />

                    <p
                      className="text-base mb-6 max-w-md leading-relaxed"
                      style={{ color: "hsl(220 20% 42%)" }}
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2.5">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 14 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "hsl(220 20% 42%)" }}
                        >
                          <CheckCircle2
                            size={15}
                            className="shrink-0 mt-0.5"
                            style={{ color: accent }}
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Layout>
  );
}

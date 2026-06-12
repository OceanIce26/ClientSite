import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/contexts/LanguageContext";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: t.contact.toastTitle, description: t.contact.toastDesc });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* ── PAGE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1600&q=80&auto=format&fit=crop"
            alt="Contact banner"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(125deg, hsl(224 40% 6% / 0.90) 0%, hsl(160 60% 8% / 0.68) 55%, hsl(224 40% 8% / 0.86) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 70% at 25% 55%, hsl(155 80% 40% / 0.11) 0%, transparent 60%)",
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
          <div className="pt-12">
            {/* Headline first */}
            <h1 className="page-headline text-[4rem] md:text-[6rem] text-white leading-none mb-5 max-w-2xl">
              {t.contact.title}
            </h1>

            {/* Badge after headline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/12 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                {t.nav.contact}
              </span>
            </div>

            <p className="text-white/60 text-lg max-w-lg">{t.contact.sub}</p>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info side */}
            <div>
              {/* Notice */}
              <div
                className="rounded-2xl p-6 mb-8 flex gap-4 items-start"
                style={{
                  background: "hsl(224 22% 12%)",
                  borderLeft: "3px solid hsl(25 92% 55%)",
                }}
              >
                <AlertCircle className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-white/60 leading-relaxed">{t.contact.notice}</p>
              </div>

              {/* Contact details */}
              <div
                className="rounded-2xl p-7 mb-6 border"
                style={{
                  background: "hsl(224 22% 12%)",
                  borderColor: "hsl(220 18% 20%)",
                }}
              >
                <h3 className="font-bold text-white/40 text-xs uppercase tracking-widest mb-5">{t.contact.contactTitle}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-white/60">
                    <span className="text-primary font-bold">E</span>
                    <a href="mailto:info@schwungbouw.nl" className="hover:text-white transition-colors">info@schwungbouw.nl</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <span className="text-primary font-bold">T</span>
                    <a href="tel:+31612345678" className="hover:text-white transition-colors">+31 6 12 34 56 78</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/45">
                    <span className="text-primary font-bold">A</span>
                    <span>{t.contact.area}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full h-14 text-base font-bold gap-3"
                  style={{ background: "#25D366", boxShadow: "0 0 24px #25D36645" }}
                >
                  <MessageCircle size={20} />
                  {t.contact.whatsapp}
                </Button>
              </a>
            </div>

            {/* Form */}
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: "linear-gradient(160deg, hsl(224 22% 13%) 0%, hsl(224 22% 10%) 100%)",
                borderColor: "hsl(220 18% 20%)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.nameLabel}</Label>
                  <Input
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="h-12 bg-black/25 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.emailLabel}</Label>
                    <Input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="h-12 bg-black/25 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.phoneLabel}</Label>
                    <Input
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      className="h-12 bg-black/25 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.projectLabel}</Label>
                  <Textarea
                    required
                    placeholder={t.contact.projectPlaceholder}
                    className="min-h-[150px] resize-none bg-black/25 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-13 text-base font-bold gap-2 glow-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.contact.submitting : t.contact.submit}
                  {!isSubmitting && <ArrowRight size={16} />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

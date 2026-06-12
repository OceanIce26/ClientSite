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
      {/* Page header */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ background: "hsl(222 22% 4%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 80% at 30% 50%, hsl(214 92% 58% / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-5 border border-primary/25 bg-primary/8 px-4 py-1.5 rounded-full">
            {t.nav.contact}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-xl mb-3">{t.contact.title}</h1>
          <p className="text-white/45 text-lg max-w-lg">{t.contact.sub}</p>
        </div>
      </div>

      {/* Body */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info side */}
            <div>
              {/* Notice */}
              <div
                className="rounded-2xl p-6 mb-8 flex gap-4 items-start"
                style={{
                  background: "hsl(222 20% 8%)",
                  borderLeft: "3px solid hsl(214 92% 58%)",
                }}
              >
                <AlertCircle className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-white/55 leading-relaxed">{t.contact.notice}</p>
              </div>

              {/* Contact details */}
              <div
                className="rounded-2xl p-7 mb-6 border border-white/7"
                style={{ background: "hsl(222 20% 8%)" }}
              >
                <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-5 text-white/35">{t.contact.contactTitle}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-white/55">
                    <span className="text-primary font-bold">E</span>
                    <a href="mailto:info@schwungbouw.nl" className="hover:text-white transition-colors">info@schwungbouw.nl</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/55">
                    <span className="text-primary font-bold">T</span>
                    <a href="tel:+31612345678" className="hover:text-white transition-colors">+31 6 12 34 56 78</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <span className="text-primary font-bold">A</span>
                    <span>{t.contact.area}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full h-14 text-base font-bold gap-3"
                  style={{ background: "#25D366", boxShadow: "0 0 20px #25D36640" }}
                >
                  <MessageCircle size={20} />
                  {t.contact.whatsapp}
                </Button>
              </a>
            </div>

            {/* Form */}
            <div
              className="rounded-2xl p-8 border border-white/7"
              style={{ background: "linear-gradient(160deg, hsl(222 20% 10%) 0%, hsl(222 22% 7%) 100%)" }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.nameLabel}</Label>
                  <Input
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="h-12 bg-black/30 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.emailLabel}</Label>
                    <Input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="h-12 bg-black/30 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.phoneLabel}</Label>
                    <Input
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      className="h-12 bg-black/30 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">{t.contact.projectLabel}</Label>
                  <Textarea
                    required
                    placeholder={t.contact.projectPlaceholder}
                    className="min-h-[150px] resize-none bg-black/30 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
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

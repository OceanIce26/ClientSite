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
      <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
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
                "linear-gradient(125deg, hsl(222 80% 6% / 0.92) 0%, hsl(217 80% 10% / 0.68) 55%, hsl(222 80% 8% / 0.88) 100%)",
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
          className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col justify-center"
          style={{ minHeight: "320px" }}
        >
          <div className="pt-12">
            <h1 className="page-headline text-[4rem] md:text-[6rem] text-white leading-none mb-4 max-w-2xl">
              {t.contact.title}
            </h1>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-sm mb-4"
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
              <div
                className="rounded-2xl p-6 mb-8 flex gap-4 items-start bg-white"
                style={{
                  borderLeft: "4px solid hsl(38 95% 50%)",
                  border: "1px solid hsl(220 35% 90%)",
                  borderLeft: "4px solid hsl(38 95% 50%)",
                }}
              >
                <AlertCircle
                  size={18}
                  style={{ color: "hsl(38 95% 50%)" }}
                  className="shrink-0 mt-0.5"
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "hsl(220 20% 44%)" }}
                >
                  {t.contact.notice}
                </p>
              </div>

              <div
                className="rounded-2xl p-7 mb-6 bg-white"
                style={{ border: "1px solid hsl(220 35% 90%)" }}
              >
                <h3
                  className="font-bold text-xs uppercase tracking-widest mb-5"
                  style={{ color: "hsl(220 20% 50%)" }}
                >
                  {t.contact.contactTitle}
                </h3>
                <div className="space-y-4 text-sm">
                  <div
                    className="flex items-center gap-3"
                    style={{ color: "hsl(220 20% 40%)" }}
                  >
                    <span
                      className="font-bold text-base"
                      style={{ color: "hsl(225 100% 50%)" }}
                    >
                      E
                    </span>
                    <a
                      href="mailto:info@schwungbouw.nl"
                      className="hover:text-primary transition-colors"
                    >
                      info@schwungbouw.nl
                    </a>
                  </div>
                  <div
                    className="flex items-center gap-3"
                    style={{ color: "hsl(220 20% 40%)" }}
                  >
                    <span
                      className="font-bold text-base"
                      style={{ color: "hsl(225 100% 50%)" }}
                    >
                      T
                    </span>
                    <a
                      href="tel:+31612345678"
                      className="hover:text-primary transition-colors"
                    >
                      +31 6 12 34 56 78
                    </a>
                  </div>
                  <div
                    className="flex items-center gap-3"
                    style={{ color: "hsl(220 20% 48%)" }}
                  >
                    <span
                      className="font-bold text-base"
                      style={{ color: "hsl(225 100% 50%)" }}
                    >
                      A
                    </span>
                    <span>{t.contact.area}</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full h-14 text-base font-bold gap-3 text-white"
                  style={{
                    background: "#25D366",
                    boxShadow: "0 0 24px #25D36640",
                  }}
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
                background:
                  "linear-gradient(160deg, hsl(224 22% 13%) 0%, hsl(224 22% 10%) 100%)",
                borderColor: "hsl(220 18% 20%)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">
                    {t.contact.nameLabel}
                  </Label>
                  <Input
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="h-12 bg-black/25 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">
                      {t.contact.emailLabel}
                    </Label>
                    <Input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="h-12 bg-black/25 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">
                      {t.contact.phoneLabel}
                    </Label>
                    <Input
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      className="h-12 bg-black/25 border-white/10 text-white placeholder:text-white/25 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/55 text-xs uppercase tracking-wider font-bold">
                    {t.contact.projectLabel}
                  </Label>
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

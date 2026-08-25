import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, submitContactInquiry } from "@/lib/contact.functions";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ACCURATE VALUE" },
      { name: "description", content: "Get in touch with ACCURATE VALUE MCHJ for valuation services in Uzbekistan. Request a quote or schedule a consultation." },
      { property: "og:title", content: "Contact Us — ACCURATE VALUE" },
      { property: "og:description", content: "Request a valuation quote or consultation with ACCURATE VALUE MCHJ." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactDetails: Array<{
  icon: typeof Phone;
  labelKey: TranslationKey;
  valueKey?: TranslationKey;
  value?: string;
}> = [
  { icon: Phone, labelKey: "contact.info.phone", value: "+998 90 123 45 67" },
  { icon: Mail, labelKey: "contact.info.email", value: "info@accurate-value.uz" },
  { icon: MapPin, labelKey: "contact.info.address", valueKey: "contact.info.addressValue" },
  { icon: Clock, labelKey: "contact.info.hours", valueKey: "contact.info.hoursValue" },
];

const emptyForm = { name: "", phone: "", email: "", service: "", message: "" };

function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState(emptyForm);
  const submit = useServerFn(submitContactInquiry);

  const mutation = useMutation({
    mutationFn: (values: typeof emptyForm) => submit({ data: values }),
    onSuccess: () => {
      toast.success(t("contact.toast.success"), {
        description: t("contact.toast.successDesc"),
      });
      setForm(emptyForm);
    },
    onError: () => {
      toast.error(t("contact.form.errorGeneric"));
    },
  });

  const translateIssue = (message: string | undefined): string => {
    if (message === "Name is required") return t("contact.form.nameRequired");
    if (message === "Invalid email address") return t("contact.form.emailInvalid");
    if (message === "Message is required") return t("contact.form.messageRequired");
    return message ?? t("contact.form.checkForm");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(translateIssue(parsed.error.issues[0]?.message));
      return;
    }
    mutation.mutate(form);
  };

  const field = (key: keyof typeof emptyForm) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value })),
  });

  return (
    <div className="flex flex-col">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t("contact.hero.eyebrow")}</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{t("contact.hero.title")}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t("contact.form.title")}</h2>
              <p className="mt-4 text-muted-foreground">
                {t("contact.form.subtitle")}
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")}</Label>
                    <Input id="name" placeholder={t("contact.form.namePlaceholder")} maxLength={100} required {...field("name")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                    <Input id="phone" placeholder="+998 90 123 45 67" maxLength={50} {...field("phone")} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input id="email" type="email" placeholder="you@example.com" maxLength={255} required {...field("email")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">{t("contact.form.service")}</Label>
                  <Input id="service" placeholder={t("contact.form.servicePlaceholder")} maxLength={150} {...field("service")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea id="message" rows={5} maxLength={2000} required placeholder={t("contact.form.messagePlaceholder")} {...field("message")} />
                </div>
                <Button type="submit" size="lg" disabled={mutation.isPending} className="w-full font-semibold sm:w-auto">
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" /> {t("contact.form.sending")}
                    </>
                  ) : (
                    t("contact.form.submit")
                  )}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t("contact.info.title")}</h2>
              <p className="mt-4 text-muted-foreground">
                {t("contact.info.subtitle")}
              </p>

              <div className="mt-8 grid gap-4">
                {contactDetails.map((item) => (
                  <Card key={item.labelKey} className="border-border bg-card">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {t(item.labelKey)}
                        </p>
                        <p className="font-medium text-card-foreground">
                          {item.valueKey ? t(item.valueKey) : item.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

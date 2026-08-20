import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Scale, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ACCURATE VALUE" },
      { name: "description", content: "Learn about ACCURATE VALUE MCHJ, a leading valuation company in Uzbekistan specializing in vehicles, real estate, and businesses." },
      { property: "og:title", content: "About Us — ACCURATE VALUE" },
      { property: "og:description", content: "Leading valuation company in Uzbekistan for vehicles, real estate, and businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Scale,
    titleKey: "value.integrity.title",
    descKey: "value.integrity.desc",
  },
  {
    icon: Target,
    titleKey: "value.accuracy.title",
    descKey: "value.accuracy.desc",
  },
  {
    icon: Award,
    titleKey: "value.professionalism.title",
    descKey: "value.professionalism.desc",
  },
  {
    icon: TrendingUp,
    titleKey: "value.value.title",
    descKey: "value.value.desc",
  },
] as const;

function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t("about.hero.eyebrow")}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            {t("about.hero.title")}
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t("about.who.title")}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {t("about.who.p1")}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("about.who.p2")}
              </p>
            </div>
            <div className="rounded-2xl bg-secondary/50 p-8">
              <h3 className="text-xl font-bold text-foreground">{t("about.mission.title")}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("about.mission.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t("about.values.title")}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.titleKey} className="rounded-xl bg-background p-6 shadow-sm">
                <value.icon className="size-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t(value.titleKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{t("about.cta.title")}</h2>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-semibold">
            <Link to="/contact">{t("about.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

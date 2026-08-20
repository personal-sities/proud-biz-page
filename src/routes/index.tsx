import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Clock, FileCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-valuation.jpg";
import iconRealEstate from "@/assets/icon-real-estate.png";
import iconVehicle from "@/assets/icon-vehicle.png";
import iconBusiness from "@/assets/icon-business.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACCURATE VALUE — Professional Valuation Services in Uzbekistan" },
      { name: "description", content: "ACCURATE VALUE MCHJ offers certified valuation of motor vehicles, real estate, and businesses. Trusted, accurate, and timely appraisals." },
      { property: "og:title", content: "ACCURATE VALUE — Professional Valuation Services in Uzbekistan" },
      { property: "og:description", content: "Certified valuation of motor vehicles, real estate, and businesses. Trusted, accurate, and timely appraisals." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    titleKey: "service.vehicle.title",
    descKey: "service.vehicle.desc",
    image: iconVehicle,
    to: "/services",
  },
  {
    titleKey: "service.realestate.title",
    descKey: "service.realestate.desc",
    image: iconRealEstate,
    to: "/services",
  },
  {
    titleKey: "service.business.title",
    descKey: "service.business.desc",
    image: iconBusiness,
    to: "/services",
  },
] as const;

const advantages = [
  {
    icon: Shield,
    titleKey: "adv.certified.title",
    descKey: "adv.certified.desc",
  },
  {
    icon: Clock,
    titleKey: "adv.fast.title",
    descKey: "adv.fast.desc",
  },
  {
    icon: FileCheck,
    titleKey: "adv.legal.title",
    descKey: "adv.legal.desc",
  },
  {
    icon: Users,
    titleKey: "adv.client.title",
    descKey: "adv.client.desc",
  },
] as const;

function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={t("home.hero.imgAlt")}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="container relative mx-auto px-4 py-24 md:px-6 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t("home.hero.eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/contact">{t("home.hero.cta1")}</Link>
              </Button>
              <Link
                to="/services"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/40 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                {t("home.hero.cta2")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Card Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t("home.services.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              {t("home.services.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.titleKey} className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="h-10 w-10 object-contain"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{t(service.titleKey)}</h3>
                  <p className="mt-2 text-muted-foreground">{t(service.descKey)}</p>
                  <Link
                    to={service.to}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    {t("home.services.learnMore")} <ArrowRight className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t("home.advantages.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              {t("home.advantages.title")}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.titleKey} className="rounded-xl bg-background p-6 shadow-sm">
                <item.icon className="size-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            {t("home.cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            {t("home.cta.subtitle")}
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-semibold">
            <Link to="/contact">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

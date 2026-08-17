import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Clock, FileCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    title: "Vehicle Valuation",
    description: "Independent, certified appraisal of cars, trucks, and commercial vehicles for sale, insurance, or legal purposes.",
    image: iconVehicle,
    to: "/services",
  },
  {
    title: "Real Estate Valuation",
    description: "Accurate market-value assessments for residential, commercial, and land properties based on local data and standards.",
    image: iconRealEstate,
    to: "/services",
  },
  {
    title: "Business Valuation",
    description: "Comprehensive valuation of companies, shares, and intangible assets for mergers, acquisitions, and reporting.",
    image: iconBusiness,
    to: "/services",
  },
];

const advantages = [
  {
    icon: Shield,
    title: "Certified Experts",
    description: "Our appraisers hold recognized qualifications and follow national valuation standards.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Receive your detailed valuation report within days, not weeks.",
  },
  {
    icon: FileCheck,
    title: "Legally Valid Reports",
    description: "Every report is prepared to support court, tax, banking, and insurance requirements.",
  },
  {
    icon: Users,
    title: "Client-Focused Service",
    description: "We explain every figure so you can make informed decisions with confidence.",
  },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional appraiser reviewing valuation documents"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="container relative mx-auto px-4 py-24 md:px-6 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Professional Valuation Services
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Know the True Value of Your Assets
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              ACCURATE VALUE MCHJ delivers certified, independent valuation of motor vehicles, real estate, and businesses across Uzbekistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/contact">Request a Valuation</Link>
              </Button>
              <Link
                to="/services"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/40 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Card Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">What We Do</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Valuation Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide precise, defensible valuations for the assets that matter most to you and your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-10 w-10 object-contain"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                  <Link
                    to={service.to}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more <ArrowRight className="size-4" />
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
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Trusted Valuation Partner
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-xl bg-background p-6 shadow-sm">
                <item.icon className="size-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Discover the Real Value?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Contact us today for a free consultation and a tailored quote for your valuation needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-semibold">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import iconRealEstate from "@/assets/icon-real-estate.png";
import iconVehicle from "@/assets/icon-vehicle.png";
import iconBusiness from "@/assets/icon-business.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — ACCURATE VALUE" },
      { name: "description", content: "Explore certified valuation services for motor vehicles, real estate, and businesses from ACCURATE VALUE MCHJ." },
      { property: "og:title", content: "Our Services — ACCURATE VALUE" },
      { property: "og:description", content: "Certified valuation services for vehicles, real estate, and businesses in Uzbekistan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Motor Vehicle Valuation",
    image: iconVehicle,
    items: [
      "Passenger cars, SUVs, and light commercial vehicles",
      "Trucks, buses, and heavy machinery",
      "Insurance claim and total-loss assessments",
      "Pre-purchase and pre-sale appraisals",
    ],
  },
  {
    title: "Real Estate Valuation",
    image: iconRealEstate,
    items: [
      "Residential apartments and houses",
      "Commercial buildings and offices",
      "Land plots and agricultural properties",
      "Mortgage, tax, and court valuation reports",
    ],
  },
  {
    title: "Business Valuation",
    image: iconBusiness,
    items: [
      "Company share valuation",
      "Mergers and acquisitions support",
      "Intangible asset appraisal",
      "Financial reporting and dispute resolution",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What We Offer</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Our Valuation Services</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Independent, certified appraisals backed by market data and national valuation standards.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden border-border bg-card">
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
                  <h2 className="text-xl font-bold text-card-foreground">{service.title}</h2>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Need a Custom Valuation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tell us about your asset and we'll recommend the right appraisal approach.
          </p>
          <Button asChild size="lg" className="mt-8 font-semibold">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

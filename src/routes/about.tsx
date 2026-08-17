import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Scale, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    title: "Integrity",
    description: "We deliver independent opinions free from conflicts of interest, ensuring every valuation is objective and defensible.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Our reports are grounded in verified data, rigorous methodology, and deep local market knowledge.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "We follow national and international valuation standards, maintaining clear communication throughout every engagement.",
  },
  {
    icon: TrendingUp,
    title: "Value",
    description: "Beyond numbers, we help clients make better decisions by explaining what value means in their specific context.",
  },
];

function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Independent Valuation Expertise You Can Trust
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Who We Are</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                ACCURATE VALUE MCHJ is a valuation company based in Uzbekistan, specializing in the appraisal of motor vehicles, real estate, and businesses. We work with individuals, financial institutions, corporate clients, and legal professionals who need reliable, well-documented value opinions.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team combines certified valuation expertise with a practical understanding of local markets. Every report we issue is prepared with transparency, precision, and a clear explanation of the methodology used.
              </p>
            </div>
            <div className="rounded-2xl bg-secondary/50 p-8">
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To provide clear, credible, and timely valuation services that help our clients protect their assets, make informed decisions, and meet regulatory and financial requirements with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-background p-6 shadow-sm">
                <value.icon className="size-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Let's Work Together</h2>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-semibold">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

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

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+998 90 123 45 67",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@accuratevalue.uz",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Tashkent, Uzbekistan",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 09:00 – 18:00",
  },
];

function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get in Touch</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Have a question or need a quote? Reach out and our team will respond promptly.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Send Us a Message</h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and we'll get back to you within one business day.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+998 90 123 45 67" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Input id="service" placeholder="Vehicle / Real Estate / Business valuation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Tell us about your valuation needs" />
                </div>
                <Button type="submit" size="lg" className="w-full font-semibold sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Contact Information</h2>
              <p className="mt-4 text-muted-foreground">
                You can also reach us directly using the details below.
              </p>

              <div className="mt-8 grid gap-4">
                {contactDetails.map((item) => (
                  <Card key={item.label} className="border-border bg-card">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium text-card-foreground">{item.value}</p>
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

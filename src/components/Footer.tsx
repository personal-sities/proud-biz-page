import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logoAsset from "@/assets/accurate-value-logo.png.asset.json";

const quickLinks = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="ACCURATE VALUE MCHJ logo"
              className="h-10 w-auto rounded-md bg-white p-1.5"
              width={80}
              height={40}
              loading="lazy"
            />
            <h3 className="mt-3 text-lg font-bold">
              ACCURATE <span className="text-primary">VALUE</span>
            </h3>
            <p className="mt-3 text-sm text-white/70">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {t("footer.quickLinks")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/70 hover:text-primary transition-colors">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {t("footer.contact")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="size-4 text-primary" />
                <span>+998 91 598 82 42</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="size-4 text-primary" />
                <span>accuratevalue01@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>{t("contact.info.addressValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} ACCURATE VALUE MCHJ. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

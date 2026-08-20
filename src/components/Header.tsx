import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";
import logoAsset from "@/assets/accurate-value-logo.png.asset.json";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

function LanguageSwitcher({ onSelect }: { onSelect?: () => void }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("lang.aria")}
      className="flex items-center overflow-hidden rounded-md border border-border"
    >
      {languages.map((lang, index) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => {
            setLanguage(lang.code);
            onSelect?.();
          }}
          aria-pressed={language === lang.code}
          className={`px-2 py-1 text-xs font-semibold transition-colors ${
            index > 0 ? "border-l border-border" : ""
          } ${
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="ACCURATE VALUE MCHJ logo"
            className="h-8 w-auto"
            width={64}
            height={32}
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            ACCURATE <span className="text-primary">VALUE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary font-semibold" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground transition-colors" }}
              className="text-sm font-medium"
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button asChild size="sm" className="font-semibold">
            <Link to="/contact">{t("nav.quote")}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t("nav.menu")}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                {t(item.key)}
              </Link>
            ))}
            <Button asChild className="mt-2 font-semibold">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                {t("nav.quote")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  dictionaries,
  type Language,
  type TranslationKey,
} from "./translations";

const STORAGE_KEY = "accurate-value-language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  tList: (key: TranslationKey) => string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "uz" || value === "ru" || value === "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with the default language so server-rendered HTML and the
  // first client render match (no hydration mismatch). The saved language is
  // restored from localStorage immediately after mount.
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored) && stored !== defaultLanguage) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const t = useCallback(
    (key: TranslationKey): string => {
      const value = dictionaries[language][key] ?? dictionaries[defaultLanguage][key];
      if (typeof value === "string") return value;
      if (Array.isArray(value)) return value.join(" ");
      return key;
    },
    [language],
  );

  const tList = useCallback(
    (key: TranslationKey): string[] => {
      const value = dictionaries[language][key] ?? dictionaries[defaultLanguage][key];
      if (Array.isArray(value)) return value;
      if (typeof value === "string") return [value];
      return [];
    },
    [language],
  );

  const contextValue = useMemo(
    () => ({ language, setLanguage, t, tList }),
    [language, t, tList],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

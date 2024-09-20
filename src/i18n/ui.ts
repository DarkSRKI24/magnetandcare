export const languages = {
  sr: { label: "Srpski", flag: "/flags/sr_flag.png" },
  en: { label: "English", flag: "/flags/us_flag.png" },
  de: { label: "Deutsch", flag: "/flags/de_flag.png" },
};

  
export const defaultLang = "sr";

export const ui = {
  sr: {
    "nav.home": "Početna",
    "nav.about": "O nama",
    "nav.career": "Karijere",
    "nav.service": "Usluge",
    "nav.contact": "Kontakt",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.career": "Careers",
    "nav.service": "Services",
    "nav.contact": "Contact",
  },
  de: {
      "nav.home": "Startseite",
      "nav.about": "Über uns",
      "nav.career": "Karriere",
      "nav.service": "Service",
      "nav.contact": "Kontakt",
  },
} as const;

export const showDefaultLang = false;
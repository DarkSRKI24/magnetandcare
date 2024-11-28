export const languages = {
  sr: { label: 'Srpski', flag: '/flags/sr-flag.png' },
  en: { label: 'English', flag: '/flags/us-flag.png' },
  de: { label: 'Deutsch', flag: '/flags/de-flag.png' },
};

export const defaultLang = 'sr';

export const ui = {
  sr: {
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.service': 'Usluge',
    'nav.career': 'Karijere',
    'nav.contact': 'Kontakt',

    'footer.created': 'Autor',
    'footer.policy': 'Licenciranje i pripisivanje',
    'footer.privacy': 'Politika privatnosti',
    'footer.info': 'Informacije',
    'footer.tel': 'Telefon',
    'footer.mail': 'E-Mail',
    'footer.address': 'Adresa',
    'footer.social': 'Društvene mreže',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.service': 'Services',
    'nav.career': 'Careers',
    'nav.contact': 'Contact',

    'footer.created': 'Created by',
    'footer.policy': 'Licensing and Attribution',
    'footer.privacy': 'Privacy Policy',
    'footer.info': 'Information',
    'footer.tel': 'Phone number',
    'footer.mail': 'E-Mail',
    'footer.address': 'Address',
    'footer.social': 'Socials',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.service': 'Service',
    'nav.career': 'Karriere',
    'nav.contact': 'Kontakt',

    'footer.created': 'Erstellt von',
    'footer.policy': 'Lizenzierung und Zuordnung',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.info': 'Informationen',
    'footer.tel': 'Telefonnummer',
    'footer.mail': 'E-Mail',
    'footer.address': 'Adresse',
    'footer.social': 'Socials',
  },
} as const;

export const showDefaultLang = false;

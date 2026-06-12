import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type Lang = "nl" | "en";

type ProjectItem = {
  image: string;
  title: string;
  description: string;
};

// =================
// Dutch translations
// =================
const NL = {
  nav: {
    home: "Home",
    services: "Diensten",
    about: "Over Ons",
    projects: "Projecten",
    contact: "Contact",
    cta: "Offerte Aanvragen",
  },

  footer: {
    tagline:
      "Betrouwbaar en transparant bouwwerk door heel Nederland. Gebouwd met passie, precisie en heldere communicatie.",
    quickLinks: "Snelle Links",
    contact: "Contact",
    rights: "Alle rechten voorbehouden.",
  },

  home: {
    badge: "Zelfstandig vakman (ZZP)",
    headline1: "Vakmanschap in Hout,",
    headline2: "Renovatie & Interieurbouw",
    sub: "Betrouwbaar en transparant bouwwerk door heel Nederland. Gebouwd met passie, precisie en heldere communicatie.",
    cta1: "Offerte Aanvragen",
    cta2: "Bekijk Diensten",
    trustBar: [
      "Gevestigd in Nederland",
      "Zelfstandig vakman (ZZP)",
      "Heldere communicatie & overleg",
    ],
    sectionTitle: "Uw project in vertrouwde handen",
    sectionSub:
      "Als onafhankelijk klusbedrijf en aannemer combineer ik de precisie van een meubelmaker met de veelzijdigheid van een allround timmerman. Voor elke renovatie en interieurbouw opdracht.",
    points: [
      {
        title: "Transparante prijzen",
        desc: "Inclusief materiaal & BTW. Geen verrassingen achteraf.",
      },
      {
        title: "Ervaren",
        desc: "Specialist in timmerwerk en hoogwaardige renovatie.",
      },
      {
        title: "Maatwerk oplossingen",
        desc: "Van inbouwkasten tot complete scheidingswanden.",
      },
      {
        title: "Kleine & middelgroot",
        desc: "Perfect voor de verbouwing waar grote aannemers niet komen.",
      },
    ],
    ctaTitle: "Klaar voor uw volgende project?",
    ctaDesc:
      "Neem vrijblijvend contact op. We bespreken uw wensen, de mogelijkheden en ik zorg voor een transparante prijsopgave.",
    ctaBtn: "Offerte Aanvragen",
  },

  services: {
    title: "Mijn Diensten",
    sub: "Als veelzijdige vakman verzorg ik uw renovatie of afbouwproject van A tot Z. Met één betrouwbaar aanspreekpunt voor het hele project.",
    categories: [
      {
        title: "Timmerwerk",
        description: "Van ruwbouw tot de fijnste afwerking.",
        items: [
          "Scheidingswanden",
          "Valse wanden",
          "Maatwerk meubilair",
          "Inbouwkasten",
          "Luifels",
          "Schuttingen",
          "Tuinhuisjes",
        ],
      },
      {
        title: "Vloeren",
        description: "Een strakke basis voor elke ruimte.",
        items: [
          "Laminaatvloer plaatsen",
          "Hoge plinten monteren",
          "Egaliseren en ondervloeren",
          "Strakke afwerking en profielen",
        ],
      },
      {
        title: "Wandafwerking",
        description: "Perfect gladde en afgewerkte muren.",
        items: [
          "Behang plakken (alle merken)",
          "Renovatievlies aanbrengen",
          "Schilderwerk na vliesbehang",
          "Voorbereidend stucwerk",
        ],
      },
      {
        title: "Tegelwerk",
        description: "Nauwkeurig tegelwerk voor natte ruimtes.",
        items: [
          "Badkamers en toiletten",
          "Voegen en afkitten",
          "Projecten tot 60–80m²",
          "Tegels tot 60x60cm",
          "Vloer- en wandtegels",
        ],
      },
    ],
  },

  about: {
    title: "Over Schwung Bouw",
    p1: "Schwung Bouw: Ik bouw met enthousiasme en passie, bovenal in overleg met u en transparant over de kosten. Ik bouw bij voorkeur met hout (zoals scheidingswanden, valse wanden, maatwerk meubilair, inbouwkasten, luifels, schuttingen, tuinhuisjes, etc.). Het leggen van laminaatvloer inclusief het plaatsen van hoge plinten behoort ook tot mijn pakket. Daarnaast ben ik bedreven in het aanbrengen van wandbekleding. Ik heb op een gegeven moment met elk behangmerk gewerkt. Renovatievlies inclusief schilderwerk is ook mogelijk. Tegelwerk valt ook binnen mijn mogelijkheden; ik heb meerdere badkamers en toiletten betegeld, inclusief voegen en afkitten. Dit verwerk ik tot 60 à 80 m². Tegels zijn maximaal 60 x 60 cm; voor grotere formaten moet ik iemand meenemen als assistent.",
    p2: "Mijn offerte is altijd inclusief materiaal en BTW. OMDAT WIJ VOOR ELKE KLUS BETALEN, GELIEVE ALLEEN TE REAGEREN MET EEN CORRECTE OFFERTE EN DATA. De offerte is uiteraard nog steeds vrijblijvend. Extra foto's kunt u bekijken op mijn Instagram: insta@schwungbouw. Als u geïnteresseerd bent, hoor ik graag van u.",
    quote:
      '"Ik bouw met enthousiasme en precisie. Uw huis verdient de beste zorg en aandacht."',
    p3: "Kiezen voor Schwung Bouw betekent kiezen voor één aanspreekpunt, heldere communicatie en de garantie dat het werk pas klaar is als u 100% tevreden bent.",
    imgAlt: "Contractor examining plans",
  },

  projects: {
    title: "Mijn Projecten",
    sub: "Een greep uit recent afgeronde klussen en renovaties. Kwaliteit en precisie zichtbaar in elk detail.",
    badge: "Voor & Na",
    items: [] as ProjectItem[],
  },

  contact: {
    title: "Offerte Aanvragen",
    sub: "Neem contact op voor een vrijblijvende offerte of een kennismaking.",
    notice:
      "Neem alleen contact op bij serieuze aanvragen met projectdetails en gewenste uitvoeringsdatum. Zo kan ik u het snelst en best van dienst zijn.",
    contactTitle: "Contactgegevens",
    area: "Werkgebied: heel Nederland",
    whatsapp: "WhatsApp Bericht",
    nameLabel: "Naam",
    namePlaceholder: "Uw volledige naam",
    emailLabel: "E-mailadres",
    emailPlaceholder: "uw@email.nl",
    phoneLabel: "Telefoonnummer",
    phonePlaceholder: "06 1234 5678",
    projectLabel: "Projectbeschrijving",
    projectPlaceholder:
      "Beschrijf uw project, de gewenste werkzaamheden en verwachte uitvoeringsdatum...",
    submit: "Stuur Aanvraag",
    submitting: "Bezig met verzenden...",
    toastTitle: "Aanvraag verstuurd",
    toastDesc:
      "Bedankt voor uw bericht. Ik neem zo spoedig mogelijk contact op.",
  },
};

// =================
// English translations
// =================
const EN: typeof NL = {
  nav: {
    home: "Home",
    services: "Services",
    about: "About Us",
    projects: "Projects",
    contact: "Contact",
    cta: "Request a Quote",
  },

  footer: {
    tagline:
      "Reliable and transparent construction work across the Netherlands. Built with passion, precision, and clear communication.",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "All rights reserved.",
  },

  home: {
    badge: "Independent contractor (ZZP)",
    headline1: "Craftsmanship in Wood,",
    headline2: "Renovation & Construction",
    sub: "Reliable and transparent construction work across the Netherlands. Built with passion, precision, and clear communication.",
    cta1: "Request a Quote",
    cta2: "View Services",
    trustBar: [
      "Based in the Netherlands",
      "Independent contractor (ZZP)",
      "Clear communication & consultation",
    ],
    sectionTitle: "Your project in trusted hands",
    sectionSub:
      "As an independent contractor and craftsman, I combine the precision of a furniture maker with the versatility of an all-round carpenter. For every renovation and interior construction project.",
    points: [
      {
        title: "Transparent pricing",
        desc: "Including materials & VAT. No surprises afterwards.",
      },
      {
        title: "Experienced",
        desc: "Specialist in carpentry and high-quality renovation.",
      },
      {
        title: "Custom solutions",
        desc: "From built-in wardrobes to complete partition walls.",
      },
      {
        title: "Small & medium-sized",
        desc: "Perfect for the renovation where large contractors don't come.",
      },
    ],
    ctaTitle: "Ready for your next project?",
    ctaDesc:
      "Contact us without obligation. We discuss your wishes, the possibilities and I ensure a transparent quote.",
    ctaBtn: "Request a Quote",
  },

  services: {
    title: "My Services",
    sub: "As a versatile craftsman I handle your renovation or finishing project from A to Z. With one reliable point of contact for the whole project.",
    categories: [
      {
        title: "Carpentry",
        description: "From rough construction to the finest finishing.",
        items: [
          "Partition walls",
          "False walls",
          "Custom-made furniture",
          "Built-in wardrobes",
          "Canopies",
          "Fences",
          "Garden sheds",
        ],
      },
      {
        title: "Flooring",
        description: "A sleek foundation for every room.",
        items: [
          "Laminate flooring installation",
          "High skirting boards",
          "Leveling and underfloors",
          "Clean finishing and profiles",
        ],
      },
      {
        title: "Wall Finishing",
        description: "Perfectly smooth and finished walls.",
        items: [
          "Wallpaper installation (all brands)",
          "Renovation fleece application",
          "Painting after fleece wallpaper",
          "Preparatory plastering",
        ],
      },
      {
        title: "Tiling",
        description: "Precise tiling for wet areas.",
        items: [
          "Bathrooms and toilets",
          "Grouting and sealing",
          "Projects up to 60–80m²",
          "Tiles up to 60x60cm",
          "Floor and wall tiles",
        ],
      },
    ],
  },

  about: {
    title: "About Schwung Bouw",
    p1: "Schwung Bouw: I build with enthusiasm and passion, above all in consultation with you and transparent about the costs. I prefer building with wood (such as partition walls, false walls, custom-made furniture, built-in wardrobes, canopies, fences, sheds, etc.). Laying laminate flooring along with installing high skirting boards is also part of my package. In addition, I am skilled in applying wall coverings. I have worked with every brand of wallpaper at some point. Renovation fleece, including painting, is also possible. Tiling is also within my capabilities; I have tiled multiple bathrooms and toilets, including grouting and sealing. I handle this up to 60 to 80 m². Tiles are a maximum of 60 x 60 cm; for larger sizes, I need to bring someone along for assistance.",
    p2: "My quote always includes materials and VAT. SINCE WE PAY FOR EVERY JOB, PLEASE ONLY RESPOND WITH A CORRECT QUOTE AND DATES. Of course, the quote is still without obligation. You can view extra photos on my Instagram: insta@schwungbouw. If you are interested, I look forward to hearing from you.",
    quote:
      '"I build with enthusiasm and precision. Your home deserves the best care and attention."',
    p3: "Choosing Schwung Bouw means choosing one point of contact, clear communication and the guarantee that the work is only done when you are 100% satisfied.",
    imgAlt: "Contractor examining plans",
  },

  projects: {
    title: "My Projects",
    sub: "A selection of recently completed jobs and renovations. Quality and precision visible in every detail.",
    badge: "Before & After",
    items: [] as ProjectItem[],
  },

  contact: {
    title: "Request a Quote",
    sub: "Get in touch for a free quote or an introduction.",
    notice:
      "Please only contact with serious inquiries including project details and preferred execution date. This way I can help you best and fastest.",
    contactTitle: "Contact Details",
    area: "Service area: all of the Netherlands",
    whatsapp: "WhatsApp Message",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email address",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "06 1234 5678",
    projectLabel: "Project description",
    projectPlaceholder:
      "Describe your project, the desired work and expected execution date...",
    submit: "Send Request",
    submitting: "Sending...",
    toastTitle: "Request sent",
    toastDesc:
      "Thank you for your message. I will contact you as soon as possible.",
  },
};

export const translations = { nl: NL, en: EN };
export type Translations = typeof NL;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "nl",
  setLang: () => {},
  t: NL,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");
  const [projectItems, setProjectItems] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const folderName = "SchwungBouw";
    const file =
      lang === "nl"
        ? folderName + "/texts/ProjectDescriptions_NL.json"
        : folderName + "/texts/ProjectDescriptions_EN.json";

    fetch(file)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load ${file}: ${res.status}`);
        }
        return res.json();
      })
      .then((data: ProjectItem[]) => {
        setProjectItems(data);
      })
      .catch((err) => {
        console.error("Failed to load project descriptions:", err);
        setProjectItems([]);
      });
  }, [lang]);

  const baseTranslation = translations[lang];

  const t: Translations = {
    ...baseTranslation,
    projects: {
      ...baseTranslation.projects,
      items: projectItems,
    },
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
// import { createContext, useContext, useState, ReactNode } from "react";

// export type Lang = "nl" | "en";

// const NL = {
//   nav: {
//     home: "Home",
//     services: "Diensten",
//     about: "Over Ons",
//     projects: "Projecten",
//     contact: "Contact",
//     cta: "Offerte Aanvragen",
//   },
//   footer: {
//     tagline:
//       "Betrouwbaar en transparant bouwwerk door heel Nederland. Gebouwd met passie, precisie en heldere communicatie.",
//     quickLinks: "Snelle Links",
//     contact: "Contact",
//     rights: "Alle rechten voorbehouden.",
//   },
//   home: {
//     badge: "Zelfstandig vakman (ZZP)",
//     headline1: "Vakmanschap in Hout,",
//     headline2: "Renovatie & Interieurbouw",
//     sub: "Betrouwbaar en transparant bouwwerk door heel Nederland. Gebouwd met passie, precisie en heldere communicatie.",
//     cta1: "Offerte Aanvragen",
//     cta2: "Bekijk Diensten",
//     trustBar: [
//       "Gevestigd in Nederland",
//       "Zelfstandig vakman (ZZP)",
//       "Heldere communicatie & overleg",
//     ],
//     sectionTitle: "Uw project in vertrouwde handen",
//     sectionSub:
//       "Als onafhankelijk klusbedrijf en aannemer combineer ik de precisie van een meubelmaker met de veelzijdigheid van een allround timmerman. Voor elke renovatie en interieurbouw opdracht.",
//     points: [
//       {
//         title: "Transparante prijzen",
//         desc: "Inclusief materiaal & BTW. Geen verrassingen achteraf.",
//       },
//       {
//         title: "Ervaren",
//         desc: "Specialist in timmerwerk en hoogwaardige renovatie.",
//       },
//       {
//         title: "Maatwerk oplossingen",
//         desc: "Van inbouwkasten tot complete scheidingswanden.",
//       },
//       {
//         title: "Kleine & middelgroot",
//         desc: "Perfect voor de verbouwing waar grote aannemers niet komen.",
//       },
//     ],
//     ctaTitle: "Klaar voor uw volgende project?",
//     ctaDesc:
//       "Neem vrijblijvend contact op. We bespreken uw wensen, de mogelijkheden en ik zorg voor een transparante prijsopgave.",
//     ctaBtn: "Offerte Aanvragen",
//   },
//   services: {
//     title: "Mijn Diensten",
//     sub: "Als veelzijdige vakman verzorg ik uw renovatie of afbouwproject van A tot Z. Met één betrouwbaar aanspreekpunt voor het hele project.",
//     categories: [
//       {
//         title: "Timmerwerk",
//         description: "Van ruwbouw tot de fijnste afwerking.",
//         items: [
//           "Scheidingswanden",
//           "Valse wanden",
//           "Maatwerk meubilair",
//           "Inbouwkasten",
//           "Luifels",
//           "Schuttingen",
//           "Tuinhuisjes",
//         ],
//       },
//       {
//         title: "Vloeren",
//         description: "Een strakke basis voor elke ruimte.",
//         items: [
//           "Laminaatvloer plaatsen",
//           "Hoge plinten monteren",
//           "Egaliseren en ondervloeren",
//           "Strakke afwerking en profielen",
//         ],
//       },
//       {
//         title: "Wandafwerking",
//         description: "Perfect gladde en afgewerkte muren.",
//         items: [
//           "Behang plakken (alle merken)",
//           "Renovatievlies aanbrengen",
//           "Schilderwerk na vliesbehang",
//           "Voorbereidend stucwerk",
//         ],
//       },
//       {
//         title: "Tegelwerk",
//         description: "Nauwkeurig tegelwerk voor natte ruimtes.",
//         items: [
//           "Badkamers en toiletten",
//           "Voegen en afkitten",
//           "Projecten tot 60–80m²",
//           "Tegels tot 60x60cm",
//           "Vloer- en wandtegels",
//         ],
//       },
//     ],
//   },
//   about: {
//     title: "Over Schwung Bouw",
//     p1: "Schwung Bouw: Ik bouw met enthousiasme en passie, bovenal in overleg met u en transparant over de kosten. Ik bouw bij voorkeur met hout (zoals scheidingswanden, valse wanden, maatwerk meubilair, inbouwkasten, luifels, schuttingen, tuinhuisjes, etc.). Het leggen van laminaatvloer inclusief het plaatsen van hoge plinten behoort ook tot mijn pakket. Daarnaast ben ik bedreven in het aanbrengen van wandbekleding. Ik heb op een gegeven moment met elk behangmerk gewerkt. Renovatievlies inclusief schilderwerk is ook mogelijk. Tegelwerk valt ook binnen mijn mogelijkheden; ik heb meerdere badkamers en toiletten betegeld, inclusief voegen en afkitten. Dit verwerk ik tot 60 à 80 m². Tegels zijn maximaal 60 x 60 cm; voor grotere formaten moet ik iemand meenemen als assistent.",
//     p2: "Mijn offerte is altijd inclusief materiaal en BTW. OMDAT WIJ VOOR ELKE KLUS BETALEN, GELIEVE ALLEEN TE REAGEREN MET EEN CORRECTE OFFERTE EN DATA. De offerte is uiteraard nog steeds vrijblijvend. Extra foto's kunt u bekijken op mijn Instagram: insta@schwungbouw. Als u geïnteresseerd bent, hoor ik graag van u.",
//     quote:
//       '"Ik bouw met enthousiasme en precisie. Uw huis verdient de beste zorg en aandacht."',
//     p3: "Kiezen voor Schwung Bouw betekent kiezen voor één aanspreekpunt, heldere communicatie en de garantie dat het werk pas klaar is als u 100% tevreden bent.",
//     imgAlt: "Contractor examining plans",
//   },
//   projects: {
//     title: "Mijn Projecten",
//     sub: "Een greep uit recent afgeronde klussen en renovaties. Kwaliteit en precisie zichtbaar in elk detail.",
//     badge: "Voor & Na",
//     items: [
//       {
//         title: "Maatwerk houten meubelen",
//         description: "Ontwerp en realisatie van een massief houten eettafel.",
//       },
//       {
//         title: "Badkamer renovatie",
//         description: "Compleet nieuw tegelwerk met moderne accenten.",
//       },
//       {
//         title: "Houten scheidingswanden",
//         description: "Ruimte opgedeeld met vakkundig geplaatste frames.",
//       },
//       {
//         title: "Laminaatvloer plaatsen",
//         description: "Strakke laminaatvloer inclusief hoge plinten.",
//       },
//       {
//         title: "Tuinhuis & schutting",
//         description: "Duurzaam houtwerk voor in de tuin.",
//       },
//       {
//         title: "Inbouwkasten op maat",
//         description: "Maximale opbergruimte met naadloze afwerking.",
//       },
//     ],
//   },
//   contact: {
//     title: "Offerte Aanvragen",
//     sub: "Neem contact op voor een vrijblijvende offerte of een kennismaking.",
//     notice:
//       "Neem alleen contact op bij serieuze aanvragen met projectdetails en gewenste uitvoeringsdatum. Zo kan ik u het snelst en best van dienst zijn.",
//     contactTitle: "Contactgegevens",
//     area: "Werkgebied: heel Nederland",
//     whatsapp: "WhatsApp Bericht",
//     nameLabel: "Naam",
//     namePlaceholder: "Uw volledige naam",
//     emailLabel: "E-mailadres",
//     emailPlaceholder: "uw@email.nl",
//     phoneLabel: "Telefoonnummer",
//     phonePlaceholder: "06 1234 5678",
//     projectLabel: "Projectbeschrijving",
//     projectPlaceholder:
//       "Beschrijf uw project, de gewenste werkzaamheden en verwachte uitvoeringsdatum...",
//     submit: "Stuur Aanvraag",
//     submitting: "Bezig met verzenden...",
//     toastTitle: "Aanvraag verstuurd",
//     toastDesc:
//       "Bedankt voor uw bericht. Ik neem zo spoedig mogelijk contact op.",
//   },
// };

// const EN: typeof NL = {
//   nav: {
//     home: "Home",
//     services: "Services",
//     about: "About Us",
//     projects: "Projects",
//     contact: "Contact",
//     cta: "Request a Quote",
//   },
//   footer: {
//     tagline:
//       "Reliable and transparent construction work across the Netherlands. Built with passion, precision, and clear communication.",
//     quickLinks: "Quick Links",
//     contact: "Contact",
//     rights: "All rights reserved.",
//   },
//   home: {
//     badge: "Independent contractor (ZZP)",
//     headline1: "Craftsmanship in Wood,",
//     headline2: "Renovation & Interior Construction",
//     sub: "Reliable and transparent construction work across the Netherlands. Built with passion, precision, and clear communication.",
//     cta1: "Request a Quote",
//     cta2: "View Services",
//     trustBar: [
//       "Based in the Netherlands",
//       "Independent contractor (ZZP)",
//       "Clear communication & consultation",
//     ],
//     sectionTitle: "Your project in trusted hands",
//     sectionSub:
//       "As an independent contractor and craftsman, I combine the precision of a furniture maker with the versatility of an all-round carpenter. For every renovation and interior construction project.",
//     points: [
//       {
//         title: "Transparent pricing",
//         desc: "Including materials & VAT. No surprises afterwards.",
//       },
//       {
//         title: "Experienced",
//         desc: "Specialist in carpentry and high-quality renovation.",
//       },
//       {
//         title: "Custom solutions",
//         desc: "From built-in wardrobes to complete partition walls.",
//       },
//       {
//         title: "Small & medium-sized",
//         desc: "Perfect for the renovation where large contractors don't come.",
//       },
//     ],
//     ctaTitle: "Ready for your next project?",
//     ctaDesc:
//       "Contact us without obligation. We discuss your wishes, the possibilities and I ensure a transparent quote.",
//     ctaBtn: "Request a Quote",
//   },
//   services: {
//     title: "My Services",
//     sub: "As a versatile craftsman I handle your renovation or finishing project from A to Z. With one reliable point of contact for the whole project.",
//     categories: [
//       {
//         title: "Carpentry",
//         description: "From rough construction to the finest finishing.",
//         items: [
//           "Partition walls",
//           "False walls",
//           "Custom-made furniture",
//           "Built-in wardrobes",
//           "Canopies",
//           "Fences",
//           "Garden sheds",
//         ],
//       },
//       {
//         title: "Flooring",
//         description: "A sleek foundation for every room.",
//         items: [
//           "Laminate flooring installation",
//           "High skirting boards",
//           "Leveling and underfloors",
//           "Clean finishing and profiles",
//         ],
//       },
//       {
//         title: "Wall Finishing",
//         description: "Perfectly smooth and finished walls.",
//         items: [
//           "Wallpaper installation (all brands)",
//           "Renovation fleece application",
//           "Painting after fleece wallpaper",
//           "Preparatory plastering",
//         ],
//       },
//       {
//         title: "Tiling",
//         description: "Precise tiling for wet areas.",
//         items: [
//           "Bathrooms and toilets",
//           "Grouting and sealing",
//           "Projects up to 60–80m²",
//           "Tiles up to 60x60cm",
//           "Floor and wall tiles",
//         ],
//       },
//     ],
//   },
//   about: {
//     title: "About Schwung Bouw",
//     p1: "Schwung Bouw: I build with enthusiasm and passion, above all in consultation with you and transparent about the costs. I prefer building with wood (such as partition walls, false walls, custom-made furniture, built-in wardrobes, canopies, fences, sheds, etc.). Laying laminate flooring along with installing high skirting boards is also part of my package. In addition, I am skilled in applying wall coverings. I have worked with every brand of wallpaper at some point. Renovation fleece, including painting, is also possible. Tiling is also within my capabilities; I have tiled multiple bathrooms and toilets, including grouting and sealing. I handle this up to 60 to 80 m². Tiles are a maximum of 60 x 60 cm; for larger sizes, I need to bring someone along for assistance.",
//     p2: "My quote always includes materials and VAT. SINCE WE PAY FOR EVERY JOB, PLEASE ONLY RESPOND WITH A CORRECT QUOTE AND DATES. Of course, the quote is still without obligation. You can view extra photos on my Instagram: insta@schwungbouw. If you are interested, I look forward to hearing from you.",
//     quote:
//       '"I build with enthusiasm and precision. Your home deserves the best care and attention."',
//     p3: "Choosing Schwung Bouw means choosing one point of contact, clear communication and the guarantee that the work is only done when you are 100% satisfied.",
//     imgAlt: "Contractor examining plans",
//   },
//   projects: {
//     title: "My Projects",
//     sub: "A selection of recently completed jobs and renovations. Quality and precision visible in every detail.",
//     badge: "Before & After",
//     items: [
//       {
//         title: "Custom wooden furniture",
//         description: "Design and realization of a solid wood dining table.",
//       },
//       {
//         title: "Bathroom renovation",
//         description: "Complete new tiling with modern accents.",
//       },
//       {
//         title: "Wooden partition walls",
//         description: "Space divided with expertly placed frames.",
//       },
//       {
//         title: "Laminate flooring installation",
//         description: "Clean laminate floor including high skirting boards.",
//       },
//       {
//         title: "Garden shed & fence",
//         description: "Durable woodwork for the garden.",
//       },
//       {
//         title: "Custom built-in wardrobes",
//         description: "Maximum storage space with seamless finishing.",
//       },
//       {
//         title: "Custom built-in wardrobes",
//         description: "Maximum storage space with seamless finishing.",
//       },
//     ],
//   },
//   contact: {
//     title: "Request a Quote",
//     sub: "Get in touch for a free quote or an introduction.",
//     notice:
//       "Please only contact with serious inquiries including project details and preferred execution date. This way I can help you best and fastest.",
//     contactTitle: "Contact Details",
//     area: "Service area: all of the Netherlands",
//     whatsapp: "WhatsApp Message",
//     nameLabel: "Name",
//     namePlaceholder: "Your full name",
//     emailLabel: "Email address",
//     emailPlaceholder: "your@email.com",
//     phoneLabel: "Phone number",
//     phonePlaceholder: "06 1234 5678",
//     projectLabel: "Project description",
//     projectPlaceholder:
//       "Describe your project, the desired work and expected execution date...",
//     submit: "Send Request",
//     submitting: "Sending...",
//     toastTitle: "Request sent",
//     toastDesc:
//       "Thank you for your message. I will contact you as soon as possible.",
//   },
// };

// export const translations = { nl: NL, en: EN };
// export type Translations = typeof NL;

// interface LanguageContextType {
//   lang: Lang;
//   setLang: (l: Lang) => void;
//   t: Translations;
// }

// const LanguageContext = createContext<LanguageContextType>({
//   lang: "nl",
//   setLang: () => {},
//   t: NL,
// });

// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [lang, setLang] = useState<Lang>("nl");
//   return (
//     <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLang() {
//   return useContext(LanguageContext);
// }

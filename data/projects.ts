export interface Project {
    id: number;
    title: string;
    category: string;
    tagline: { en: string; fr: string; de: string };
    description: { en: string; fr: string; de: string };
    caseStudy: {
        en: { context: string; objective: string; problem: string; solution: string; result: string; addedValue: string };
        fr: { context: string; objective: string; problem: string; solution: string; result: string; addedValue: string };
        de: { context: string; objective: string; problem: string; solution: string; result: string; addedValue: string };
    };
    tech: string[];
    link: string;
    image: string;
    year: string;
}

export const projects: Project[] = [
    {
        id: 6,
        title: "QUICKLINE",
        category: "SaaS Queue Management",
        tagline: {
            en: "Strategic Queue Orchestration & Digital Access",
            fr: "Orchestration Stratégique des Files d'Attente",
            de: "Strategische Warteschlangen-Orchestrierung"
        },
        description: {
            en: "An intelligent queue management ecosystem designed to eliminate friction and optimize business traffic flows.",
            fr: "Un écosystème intelligent de gestion de files d'attente conçu pour éliminer les frictions et optimiser les flux.",
            de: "Ein intelligentes Warteschlangen-Management-System zur Vermeidung von Verzögerungen und Optimierung von Abläufen."
        },
        caseStudy: {
            en: {
                context: "Modern businesses face massive drops in customer satisfaction due to unstructured physical waiting times.",
                objective: "Digitalize the waiting experience to increase operational performance and customer retention.",
                problem: "Manual queue management leads to data loss, chaos in waiting areas, and perceived time inflation.",
                solution: "Engineered a real-time web platform with Clerk-powered secure authentication and Google SSO integration.",
                result: "30% reduction in perceived wait time. Real-time dashboards for business operational control.",
                addedValue: "Deployment of a zero-friction authentication system ensuring data integrity and user trust."
            },
            fr: {
                context: "Les entreprises modernes font face à une baisse de satisfaction due aux temps d'attente physiques non structurés.",
                objective: "Digitaliser l'expérience d'attente pour accroître la performance opérationnelle et la fidélisation.",
                problem: "La gestion manuelle entraîne des pertes de données, du chaos en salle d'attente et une perception de lenteur.",
                solution: "Plateforme web temps réel avec authentification sécurisée via Clerk et intégration Google SSO.",
                result: "Réduction de 30% du temps d'attente perçu. Tableaux de bord de pilotage opérationnel en temps réel.",
                addedValue: "Mise en œuvre d'un système d'authentification sans friction garantissant l'intégrité des données."
            },
            de: {
                context: "Moderne Unternehmen stehen vor sinkender Kundenzufriedenheit aufgrund unstrukturierter physischer Wartezeiten.",
                objective: "Digitalisierung des Warteerlebnisses zur Steigerung der operativen Leistung und Kundenbindung.",
                problem: "Manuelle Warteschlangenverwaltung führt zu Datenverlust, Chaos in Wartebereichen und gefühlter Zeitinflation.",
                solution: "Echtzeit-Webplattform mit sicherer Clerk-Authentifizierung und Google SSO-Integration.",
                result: "30% Reduzierung der gefühlten Wartezeit. Echtzeit-Dashboards zur operativen Steuerung.",
                addedValue: "Einsatz dines reibungslosen Authentifizierungssystems zur Gewährleistung von Datensicherheit und Vertrauen."
            }
        },
        tech: ["Next.js", "Clerk Auth", "Google SSO", "Real-time Sync", "Tailwind CSS"],
        link: "https://quick-line-djikambabi.vercel.app/",
        image: "/images/project-pepites.jpg", // Reusing an existing image placeholder or similar
        year: "2025",
    },
    {
        id: 1,
        title: "PEPITES SCHOOL",
        category: "EdTech Ecosystem",
        tagline: {
            en: "Cognitive Accessibility at Scale",
            fr: "Accessibilité Cognitive à Grande Échelle",
            de: "Kognitive Barrierefreiheit in großem Maßstab"
        },
        description: {
            en: "A bilingual educational platform designed to democratize access to elite learning resources.",
            fr: "Une plateforme éducative bilingue conçue pour démocratiser l'accès à des ressources d'élite.",
            de: "Eine bilinguale Bildungsplattform, die den Zugang zu erstklassigen Lernressourcen demokratisiert."
        },
        caseStudy: {
            en: {
                context: "Pepites School aims to be the leading bilingual educational reference for Francophone Africa.",
                objective: "Centralize and distribute premium educational resources in areas with heterogeneous connectivity.",
                problem: "The lack of high-performance infrastructure caused massive traffic loss (bounce rate > 70%) and learning fragmentation.",
                solution: "Deployed a 'Content-First' architecture with granular caching and designed a 'Cognitive UI' to simplify user journeys.",
                result: "45% increase in user retention. Proven load capacity of 10,000 simultaneous users.",
                addedValue: "Implementation of a 'Focus Mode' reducing cognitive load, thus optimizing content assimilation."
            },
            fr: {
                context: "Pepites School ambitionne d'être la référence bilingue de l'éducation pour l'Afrique Francophone.",
                objective: "Centraliser et distribuer des ressources éducatives premium dans des zones à connectivité hétérogène.",
                problem: "L'absence d'infrastructure haute performance causait une déperdition massive du trafic (rebond > 70%).",
                solution: "Déploiement d'une architecture 'Content-First' avec cache granulaire et design d'une 'UI Cognitive'.",
                result: "Augmentation de 45% de la rétention utilisateur. Capacité de charge prouvée de 10 000 utilisateurs simultanés.",
                addedValue: "Mise en place d'un 'Mode Focus' réduisant la charge cognitive, optimisant ainsi l'assimilation."
            },
            de: {
                context: "Pepites School will die führende bilinguale Bildungsreferenz für das frankophone Afrika werden.",
                objective: "Zentralisierung und Verteilung von Premium-Bildungsressourcen in Gebieten mit unterschiedlicher Konnektivität.",
                problem: "Das Fehlen einer Hochleistungsinfrastruktur verursachte massive Traffic-Verluste (Absprungrate > 70%).",
                solution: "Einsatz einer 'Content-First'-Architektur mit granularem Caching und Design einer 'kognitiven Benutzeroberfläche'.",
                result: "45% Steigerung der Nutzerbindung. Bewiesene Belastbarkeit von 10.000 gleichzeitigen Nutzern.",
                addedValue: "Implementierung eines 'Focus Mode' zur Reduzierung der kognitiven Belastung, um die Inhaltsaufnahme zu optimieren."
            }
        },
        tech: ["Scalable Architecture", "Performance Engineering", "Cognitive UX", "Global CDN"],
        link: "https://www.pepites-school.com/",
        image: "/images/project-pepites.jpg",
        year: "2025",
    },
    {
        id: 2,
        title: "GIDEPHA",
        category: "Pharmaceutical Intelligence",
        tagline: {
            en: "Bio-Corporate Compliance Interface",
            fr: "Interface de Conformité Bio-Corporate",
            de: "Schnittstelle für Bio-Corporate Compliance"
        },
        description: {
            en: "A secure institutional portal bridging pharmaceutical innovation and regulatory trust.",
            fr: "Un portail institutionnel sécurisé reliant l'innovation pharmaceutique et la confiance réglementaire.",
            de: "Ein sicheres institutionelles Portal, das pharmazeutische Innovation und regulatorisches Vertrauen verbindet."
        },
        caseStudy: {
            en: {
                context: "Major pharmaceutical player requiring a digital identity aligned with its reputation as an expert.",
                objective: "Project absolute authority to secure international strategic partnerships.",
                problem: "An obsolete digital presence that failed to communicate the company's scientific rigor.",
                solution: "Created a 'Trust-Centric' interface based on strict typographic hierarchy and sterile ergonomics.",
                result: "30% improvement in lead qualification. Record international engagement during due diligence.",
                addedValue: "Optimization of access to compliance data via intuitive micro-interactions."
            },
            fr: {
                context: "Acteur majeur de la pharmacie nécessitant une identité digitale alignée sur sa réputation d'expert.",
                objective: "Projeter une autorité absolue pour sécuriser des partenariats stratégiques internationaux.",
                problem: "Une présence digitale obsolète qui ne parvenait pas à communiquer la rigueur scientifique.",
                solution: "Création d'une interface 'Trust-Centric' basée sur une hiérarchie typographique stricte.",
                result: "Amélioration de 30% de la qualification des leads. Engagement international record.",
                addedValue: "Optimisation de l'accès aux données de conformité via des micro-interactions intuitives."
            },
            de: {
                context: "Großer Pharmaakteur, der eine digitale Identität benötigt, die seinem Ruf als Experte entspricht.",
                objective: "Völlige Autorität ausstrahlen, um internationale strategische Partnerschaften zu sichern.",
                problem: "Eine veraltete digitale Präsenz, die die wissenschaftliche Strenge des Unternehmens nicht vermitteln konnte.",
                solution: "Schaffung einer 'Trust-Centric'-Schnittstelle basierend auf strenger typografischer Hierarchie.",
                result: "30%ige Verbesserung bei der Lead-Qualifizierung. Rekordverdächtiges internationales Engagement.",
                addedValue: "Optimierung des Zugangs zu Compliance-Daten durch intuitive Mikro-Interaktionen."
            }
        },
        tech: ["React / Next.js", "Security Compliance", "Corporate Identity", "Data Architecture"],
        link: "https://www.gidepha.com/",
        image: "/images/project-gidepha.jpg",
        year: "2023",
    },
    {
        id: 3,
        title: "FEGU",
        category: "International NGO Platform",
        tagline: {
            en: "Global Philanthropic Infrastructure",
            fr: "Infrastructure Philanthropique Globale",
            de: "Globale philanthropische Infrastruktur"
        },
        description: {
            en: "High-performance portal optimized for impact storytelling and multicultural conversion.",
            fr: "Portail haute performance optimisé pour le storytelling d'impact et la conversion multiculturelle.",
            de: "Hochleistungsportal, optimiert für Impact Storytelling und multikulturelle Konversion."
        },
        caseStudy: {
            en: {
                context: "Non-governmental organization operating across three continents.",
                objective: "Maximize donation conversions globally through structured impact narration.",
                problem: "Fragmentation of digital touchpoints leading to message dilution and donor mistrust.",
                solution: "Unification of the ecosystem with geo-located content distribution and a secure donation tunnel.",
                result: "25% increase in global donations. Drastic reduction in friction.",
                addedValue: "Design of an interactive 'Impact Visualizer', offering total transparency on fund allocation."
            },
            fr: {
                context: "Organisation non-gouvernementale opérant sur trois continents.",
                objective: "Maximiser les conversions de dons à l'échelle mondiale via une narration d'impact structurée.",
                problem: "Fragmentation des points de contact numériques menant à une dilution du message.",
                solution: "Unification de l'écosystème avec distribution de contenu géo-localisée.",
                result: "Augmentation de 25% des dons globaux. Réduction drastique des frictions.",
                addedValue: "Conception d'un 'Imageur d'Impact' interactif, offrant une transparence totale sur les fonds."
            },
            de: {
                context: "Nichtregierungsorganisation, die auf drei Kontinenten tätig ist.",
                objective: "Maximierung der Spendenkonversionen weltweit durch strukturiertes Impact Storytelling.",
                problem: "Fragmentierung der digitalen Kontaktpunkte, die zu einer Verwässerung der Botschaft führt.",
                solution: "Vereinheitlichung des Ökosystems mit geolokalisierter Inhaltsverteilung.",
                result: "25%ige Steigerung der weltweiten Spenden. Drastische Reduzierung von Reibungsverlusten.",
                addedValue: "Design eines interaktiven 'Impact Visualizer', der totale Transparenz bei der Mittelvergabe bietet."
            }
        },
        tech: ["International SEO", "Load Balancing", "Payment Gateway", "Conversion UX"],
        link: "https://fegu.org/",
        image: "/images/project-fegu.jpg",
        year: "2023",
    },
    {
        id: 4,
        title: "SECEL GROUP",
        category: "B2B Services Hub",
        tagline: {
            en: "Conversion-Oriented Digital Architecture",
            fr: "Architecture Digitale Orientée Conversion",
            de: "Konversionsorientierte digitale Architektur"
        },
        description: {
            en: "Strategic platform transforming complex portfolios into simplified conversion journeys.",
            fr: "Plateforme stratégique transformant des portfolios complexes en parcours de conversion simplifiés.",
            de: "Strategische Plattform, die komplexe Portfolios in vereinfachte Konversionspfade verwandelt."
        },
        caseStudy: {
            en: {
                context: "Multi-service industrial group facing an excessively long sales cycle.",
                objective: "Automate prospect education to shorten the B2B sales tunnel.",
                problem: "Potential clients were overwhelmed by technical options, slowing down decision-making.",
                solution: "Information architecture with intelligent custom solution configurators.",
                result: "50% reduction in prospect education time. Doubling of quote request conversion rate.",
                addedValue: "Implementation of an algorithmic selection assistant."
            },
            fr: {
                context: "Groupe industriel multi-services faisant face à un cycle de vente excessivement long.",
                objective: "Automatiser l'éducation des prospects pour raccourcir le tunnel de vente B2B.",
                problem: "Les clients potentiels étaient submergés par les options techniques.",
                solution: "Architecture de l'information avec configurateurs de solutions personnalisées intelligents.",
                result: "Réduction de 50% du temps d'éducation prospect. Doublement du taux de conversion.",
                addedValue: "Mise en œuvre d'un assistant de sélection algorithmique."
            },
            de: {
                context: "Industriegruppe mit mehreren Dienstleistungen, die mit einem extrem langen Verkaufszyklus konfrontiert ist.",
                objective: "Automatisierung der Interessentenausbildung, um den B2B-Verkaufstrichter zu verkürzen.",
                problem: "Potenzielle Kunden waren von technischen Optionen überwältigt.",
                solution: "Informationsarchitektur mit intelligenten Konfiguratoren für maßgeschneiderte Lösungen.",
                result: "50%ige Reduzierung der Ausbildungszeit für Interessenten. Verdoppelung der Konversionsrate.",
                addedValue: "Implementierung eines algorithmischen Auswahlassistenten."
            }
        },
        tech: ["Lead Generation", "CRM Integration", "B2B Strategy", "Software Architecture"],
        link: "https://secelgroup.com/",
        image: "/images/project-secel.jpg",
        year: "2024",
    },
    {
        id: 5,
        title: "REACT STRUCTURE: POKÉMON",
        category: "Front-end Engineering Benchmark",
        tagline: {
            en: "Asynchronous State Mastery & Atomic Design",
            fr: "Maîtrise de l'État Asynchrone & Atomic Design",
            de: "Asynchrones State-Management & Atomic Design"
        },
        description: {
            en: "A showcase application demonstrating surgical management of asynchronous data.",
            fr: "Une application vitrine démontrant une gestion chirurgicale des données asynchrones.",
            de: "Eine Vorzeigeanwendung, die ein chirurgisches Management asynchroner Daten demonstriert."
        },
        caseStudy: {
            en: {
                context: "Technical demonstration of building scalable SPAs without technical debt.",
                objective: "Prove the viability of a highly modular architecture for data-intensive apps.",
                problem: "Guarantee a consistent 60 FPS while orchestrating complex asynchronous API flows.",
                solution: "Precise unidirectional data flow via Context API and Atomic Design.",
                result: "INP performance < 100ms. 3x faster feature integration.",
                addedValue: "Implementation of Optimistic UI for zero-latency interactions."
            },
            fr: {
                context: "Démonstration technique de la construction de SPA scalables sans dette technique.",
                objective: "Prouver la viabilité d'une architecture hautement modulaire.",
                problem: "Garantir un 60 FPS constant tout en orchestrant des flux API asynchrones complexes.",
                solution: "Flux de données unidirectionnel précis via Context API et Atomic Design.",
                result: "Performance INP < 100ms. Intégration de fonctionnalités 3x plus rapide.",
                addedValue: "Mise en œuvre de l'Optimistic UI pour des interactions à latence zéro."
            },
            de: {
                context: "Technische Demonstration des Aufbaus skalierbarer SPAs ohne technische Schulden.",
                objective: "Beweis der Realisierbarkeit einer hochmodularen Architektur.",
                problem: "Gewährleistung konstanter 60 FPS bei gleichzeitiger Orchestrierung komplexer API-Flows.",
                solution: "Präziser unidirektionaler Datenfluss via Context API und Atomic Design.",
                result: "INP-Leistung < 100ms. 3x schnellere Funktionsintegration.",
                addedValue: "Implementierung von Optimistic UI für Interaktionen ohne Latenz."
            }
        },
        tech: ["React / Context API", "Atomic Design", "Optimistic UI Patterns", "Performance Analysis"],
        link: "https://gestion-pokemon-react.web.app/",
        image: "/images/vraiphoto.jpeg",
        year: "2024",
    },
];

export interface Experience {
    id: number;
    title: { en: string; fr: string; de: string };
    company: string;
    period: { en: string; fr: string; de: string };
    role: { en: string; fr: string; de: string };
    description: { en: string; fr: string; de: string };
    achievements: { en: string[]; fr: string[]; de: string[] };
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: {
            en: "Deputy Director & Web Developer",
            fr: "Directeur Adjoint & Développeur Web",
            de: "Stellvertretender Direktor & Webentwickler"
        },
        company: "KEM.NET SARL",
        period: {
            en: "05/2023 – Present",
            fr: "05/2023 – Présent",
            de: "05/2023 – Heute"
        },
        role: {
            en: "Leadership & Full-Stack Development",
            fr: "Leadership & Full-Stack Development",
            de: "Führung & Full-Stack-Entwicklung"
        },
        description: {
            en: "Strategic management of technical projects and bespoke web solution development. Hybrid role combining team management and software engineering.",
            fr: "Pilotage stratégique des projets techniques et développement de solutions web sur mesure. Rôle hybride alliant management d'équipe et ingénierie logicielle.",
            de: "Strategische Leitung technischer Projekte und Entwicklung maßgeschneiderter Web-Lösungen. Hybride Rolle aus Teammanagement und Software-Engineering."
        },
        achievements: {
            en: [
                "Agile team supervision for responsive application deployment.",
                "Development process optimization (Scrum methodology).",
                "Backend integration (Python/Django) and SQL/NoSQL database management.",
                "Critical debugging and performance optimization (Web Vitals)."
            ],
            fr: [
                "Supervision d'une équipe agile pour le déploiement d'applications responsives.",
                "Optimisation des processus de développement (Méthodologie Scrum).",
                "Intégration Backend (Python/Django) et gestion de bases de données SQL/NoSQL.",
                "Débogage critique et optimisation des performances (Web Vitals)."
            ],
            de: [
                "Agile Teamführung für das Deployment responsiver Anwendungen.",
                "Optimierung von Entwicklungsprozessen (Scrum-Methodik).",
                "Backend-Integration (Python/Django) und SQL/NoSQL Datenbankmanagement.",
                "Kritisches Debugging und Performance-Optimierung (Web Vitals)."
            ]
        }
    }
];

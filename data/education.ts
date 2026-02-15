export interface Education {
    id: number;
    degree: { en: string; fr: string; de: string };
    institution: string;
    year: { en: string; fr: string; de: string };
    focus: { en: string; fr: string; de: string };
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    year: string;
    description: { en: string; fr: string; de: string };
}

export const education: Education[] = [
    {
        id: 1,
        degree: {
            en: "Bachelor in Software Engineering",
            fr: "Licence en Génie Logiciel (Bachelor)",
            de: "Bachelor in Software Engineering"
        },
        institution: "Institut Supérieur de Management et de l'Entrepreneuriat",
        year: {
            en: "2024 – 2025",
            fr: "2024 – 2025",
            de: "2024 – 2025"
        },
        focus: {
            en: "Software Architecture, Advanced Algorithms, Relational Databases.",
            fr: "Architecture Logicielle, Algorithmes Avancés, Bases de Données relationnelles.",
            de: "Softwarearchitektur, Fortgeschrittene Algorithmen, Rationale Datenbanken."
        }
    },
    {
        id: 2,
        degree: {
            en: "BTS in Software Engineering",
            fr: "BTS en Génie Logiciel",
            de: "BTS in Software Engineering"
        },
        institution: "Institut Supérieur de Management et de l'Entrepreneuriat",
        year: {
            en: "2022 – 2024",
            fr: "2022 – 2024",
            de: "2022 – 2024"
        },
        focus: {
            en: "Application Development, System Analysis, UML Design.",
            fr: "Développement d'Applications, Analyse Système, Conception UML.",
            de: "Anwendungsentwicklung, Systemanalyse, UML-Design."
        }
    }
];

export const certifications: Certification[] = [
    {
        id: 1,
        name: "Scrum Foundation Professional Certificate (SFPC)",
        issuer: "Certiprof",
        year: "2026",
        description: {
            en: "Validated mastery of Agile methodologies and the Scrum framework for complex project management.",
            fr: "Maîtrise validée des méthodologies Agiles et du framework Scrum pour la gestion de projets complexes.",
            de: "Validierte Beherrschung agiler Methoden und des Scrum-Frameworks für komplexes Projektmanagement."
        }
    }
];

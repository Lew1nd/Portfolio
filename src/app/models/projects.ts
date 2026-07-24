import { Project } from "./project-model";

export const PROJECTS: Project[] = [
    {
        id: 1,
        slug: 'planet-breaker',
        name: 'Planet Breaker',
        type: 'personal',
        status: 'in-progress',
        banner: 'images/projects/planet-breaker/logo.webp',
        shortDescription: '',
        description: '',
        captures: [
            'images/projects/planet-breaker/1.webp',
            'images/projects/planet-breaker/2.webp',
            'images/projects/planet-breaker/3.webp',
            'images/projects/planet-breaker/4.webp',
            'images/projects/planet-breaker/5.webp',
            'images/projects/planet-breaker/6.webp',
            'images/projects/planet-breaker/7.webp',
            'images/projects/planet-breaker/8.webp',
        ],
        video: 'https://www.youtube.com/watch?v=4I_TVR7iNH0',
        technologies: [
            'Unity',
            'C#',
            'Git',
            'GitHub',
        ],
        challenges: [],
        architecture: [],
        objetive: '',
        github: '',
        demo: 'https://lewind-dev.itch.io/planet-breaker-game',
        features: [],
        learnings: [],
        projectStatusResume: ''
    },
    {
        id: 2,
        slug: 'portfolio',
        name: 'Portfolio',
        type: 'personal',
        status: 'in-progress',
        banner: 'images/projects/portfolio/logo.webp',
        shortDescription: '',
        description: '',
        captures: [
            'images/projects/portfolio/1.webp',
            'images/projects/portfolio/2.webp',
            'images/projects/portfolio/3.webp',
            'images/projects/portfolio/4.webp',
            'images/projects/portfolio/5.webp',
            'images/projects/portfolio/6.webp',
            'images/projects/portfolio/7.webp',
        ],
        technologies: [
            'Angular',
            'Typescript',
            'CSS',
            'HTML',
            'EmailJS',
            'Vercel',
            'Git',
            'GitHub'
        ],
        challenges: [],
        architecture: [],
        objetive: '',
        github: '',
        features: [],
        learnings: [],
        projectStatusResume: ''
    },
        {
        id: 3,
        slug: 'social-vortex',
        name: 'Social Vortex',
        type: 'academic',
        status: 'archived',
        banner: 'images/projects/social-vortex/logo.webp',
        shortDescription: '',
        description: '',
        captures: [
            'images/projects/social-vortex/1.webp',
            'images/projects/social-vortex/2.webp',
            'images/projects/social-vortex/3.webp',
            'images/projects/social-vortex/4.webp',
            'images/projects/social-vortex/5.webp',
            'images/projects/social-vortex/6.webp',
        ],
        technologies: [
            'Angular',
            'Typescript',
            'CSS',
            'HTML',
            'MongoDB',
            'Vercel (frontend)',
            'Railway (backend)',
            'NestJS',
            "NodeJS",
            "JWT",
            "Bcrypt",
            "Cloudinary",
            'Git',
            'GitHub'
        ],
        challenges: [],
        architecture: [],
        objetive: '',
        github: '',
        features: [],
        learnings: [],
        projectStatusResume: ''
    },
];


/*
// Identificación
    id: number;
    slug: string;//ruta

    // Información principal
    name: string;
    type: "personal" | "profesional" | "academic" | "freelance";
    status: "finished" | "in-progress" | "paused" | "archived";

    // Presentación
    banner: string;
    shortDescription: string;
    description: string;

    // Multimedia
    captures: string[];
    video?: string;
    gif?: string;

    // Tecnologías
    technologies: string[];

    // Enlaces
    github?: string;
    demo?: string;

    // Contenido
    features: string[];
    learnings: string;

    // Fechas
    startDate?: Date;
    endDate?: Date;

*/
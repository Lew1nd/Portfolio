import { Project } from "./project-model";

export const PROJECTS: Project[] = [
    {
        id: 1,
        slug: 'planet-breaker',
        name: 'Planet Breaker',
        type: 'personal',
        status: 'in-progress',
        banner: 'images/projects/planet-breaker/logo.png',
        shortDescription: 'Juego de plataforma 2D',
        description: 'Juego de plataforma 2D desarrollado en Unity con C#.',
        captures: [
            
        ],
        technologies: [
            'Unity',
            'C#',
            'Git'
        ],
        github: '',
        demo: '',
        features: [
            
        ],
        learnings: [
            
        ],
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
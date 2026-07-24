export interface Project {
    // Identificación
    id: number;
    slug: string;//ruta

    // Información principal
    name: string;
    type: 'personal' | 'profesional' | 'academic' | 'freelance';
    status: 'in-progress' | 'finished' | 'paused' | 'archived';

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
    objetive: string;
    architecture: string [];
    features: string[];
    learnings: string[];
    challenges: string[]; 
    projectStatusResume: string;

    // Fechas
    startDate?: Date;
    endDate?: Date;
}
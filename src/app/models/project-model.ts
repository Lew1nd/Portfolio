export interface Project {
    // Identificación
    id: number;
    slug: string;//ruta

    // Información principal
    name: string;
    type: string;
    status: "Finished" | "In-progress" | "Paused" | "Archived";

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
}
import { ProjectCard } from "./project-card-model";

export const CARDS: ProjectCard[] = [
    {
      id: 1,
      name: 'Planet Breaker',
      type: 'personal',
      image: 'images/projects/planet-breaker/logo.webp',
      status: 'in-progress',
      slug: 'planet-breaker',
    },
    {
      id: 2,
      name: 'Portfolio',
      type: 'personal',
      image: 'images/projects/portfolio/logo.webp',
      status: 'in-progress',
      slug: 'portfolio',
    },
    {
      id: 3,
      name: 'Social Vortex',
      type: 'academic',
      image: 'images/projects/social-vortex/logo.webp',
      status: 'archived',
      slug: 'social-vortex',
    },
    {
      id: 4,
      name: 'Desarrollo Gourmet',
      type: 'academic',
      image: 'images/technologies/ionic.webp',
      status: 'finished',
      slug: 'desarrollogourmet',
    }
];
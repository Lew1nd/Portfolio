import { Injectable } from '@angular/core';
import { Project } from '../models/project-model';
import { ProjectCard } from '../models/project-card-model';
import { PROJECTS } from '../models/projects';
import { CARDS } from '../models/project-cards';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  PROJECTS: Project[] = PROJECTS;
  PROJECTCARDS: ProjectCard[] = CARDS;

  // ------------------ Carta de proyecto ----------------------
  getAllCards() {
    return CARDS;
  }

  // ------------------ Carta de proyecto ----------------------
  // ---------------- Proyecto ----------------------
  getAllProjects() {
    return PROJECTS;
  }

  getBySlug(slug: string): Project | undefined {
    return this.PROJECTS.find(p => p.slug === slug);
  }

  // ---------------- Proyecto ----------------------
}

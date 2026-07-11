import { Injectable } from '@angular/core';
import { ProjectCard } from '../models/project-card-model';
import { Project } from '../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectsCards: ProjectCard[] = [];
  projects: Project[] = [];

  getBySlug(slug: string | any): ProjectCard | undefined {

    return this.projectsCards.find(p => p.slug === slug);

  }
}

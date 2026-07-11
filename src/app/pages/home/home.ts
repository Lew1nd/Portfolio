import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectCard as Project } from '../../models/project-card-model';

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //status: "Finished" | "In-progress" | "Paused" | "Archived"
  //type: "Personal" | "Profesional" | "Academic" | "Freelance";
  projects: Project[] = [
    {
      id: 1,
      name: 'Planet Breaker',
      type: 'personal',
      image: 'images/projects/planet-breaker/logo.png',
      status: 'in-progress',
      slug: 'planet-breaker',
    },
  ];
}

import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../../models/project-model';

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio',
      type: 'Personal',
      image: 'assets/images/Portfolio.png',
      status: 'Finished',
      route: 'portfolio',
    },
  ];
}

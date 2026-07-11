import { Component, inject } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectService } from '../../services/project-service';
import { ProjectCard as Project } from '../../models/project-card-model';

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  projectService = inject(ProjectService);
  
  projects: Project[] = this.projectService.getAllCards();
}

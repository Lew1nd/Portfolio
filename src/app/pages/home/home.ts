import { Component, inject } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectService } from '../../services/project-service';
import { ProjectCard as Project } from '../../models/project-card-model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [ProjectCard, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  projectService = inject(ProjectService);

  projects: Project[] = this.projectService.getAllCards();
}

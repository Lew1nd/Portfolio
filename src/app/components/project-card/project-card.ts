import { Component, Input } from '@angular/core';
import { ProjectCard as Project } from '../../models/project-card-model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input({ required: true })
  project!: Project;


}

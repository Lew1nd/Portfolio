import { Component, Input } from '@angular/core';
import { ProjectCard as Project } from '../../models/project-card-model';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input({ required: true })
  project!: Project;


}

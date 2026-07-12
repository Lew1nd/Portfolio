import { Component } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { Project } from '../../models/project-model';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      if (!slug) return;

      this.project = this.projectService.getBySlug(slug);

    });

  }


}

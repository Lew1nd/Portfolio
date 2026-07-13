import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { Project } from '../../models/project-model';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation-service';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private translation = inject(TranslationService);

  project?: Project;

  projectSlug: string = '';

  features: string[] = [];
  learnings: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      if (!slug) return;

      this.project = this.projectService.getBySlug(slug);
      this.projectSlug = slug;

    });

    //-----
    this.translation.translateContent(this.projectSlug, "features").subscribe(features => {
      this.features = features;
    });

    //-----
    this.translation.translateContent(this.projectSlug, "learnings").subscribe(learnings => {
      this.learnings = learnings;
    });

  }

}

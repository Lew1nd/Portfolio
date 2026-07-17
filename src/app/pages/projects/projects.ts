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
  challenges: string[] = [];
  architecture: string[] = [];

  selectedImage: string | null = null;

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
    this.translation.translateContent(`projects.${this.projectSlug}`).subscribe(project => {
      this.features = project.features;
      this.learnings = project.learnings;
      this.challenges = project.challenges;
      this.architecture = project.architecture;
    });

  }

  //--------- IMAGEN -----------

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

  //--------- IMAGEN -----------

}

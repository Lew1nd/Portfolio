import { Component, inject, signal, computed } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { Project } from '../../models/project-model';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation-service';
import { TECHNOLOGIES } from '../../models/technologies-model';
import { TechIcon } from '../../components/tech-icon/tech-icon';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, TechIcon],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private translation = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project = signal<Project | undefined>(undefined);
  projectSlug: string = '';

  features: string[] = [];
  learnings: string[] = [];
  challenges: string[] = [];
  architecture: string[] = [];

  selectedImage: string | null = null;

  projectTechnologies = computed(() => {
    const project = this.project();

    if (!project) return [];

    return project.stack.map(id => TECHNOLOGIES[id]);
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      if (!slug) {
        this.project.set(undefined);
        return;
      }

      this.projectSlug = slug;

      const project = this.projectService.getBySlug(slug);

      this.project.set(project);

      this.translation.translateContent(`projects.${slug}`).subscribe(projectContent => {
        this.features = projectContent.features;
        this.learnings = projectContent.learnings;
        this.challenges = projectContent.challenges;
        this.architecture = projectContent.architecture;
      });
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

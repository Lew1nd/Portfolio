import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation-service';
import { TECHNOLOGIES, TECHNOLOGY_CATEGORIES } from '../../models/technologies-model';
import { TechIcon } from '../../components/tech-icon/tech-icon';

@Component({
  selector: 'app-aboutme',
  imports: [TranslatePipe, TechIcon],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
})
export class Aboutme {
  private translation = inject(TranslationService);

  frontend = TECHNOLOGY_CATEGORIES.frontend.map(id => TECHNOLOGIES[id]);
  backend = TECHNOLOGY_CATEGORIES.backend.map(id => TECHNOLOGIES[id]);
  database = TECHNOLOGY_CATEGORIES.databases.map(id => TECHNOLOGIES[id]);
  cloudAndDeploy = TECHNOLOGY_CATEGORIES.cloudAndDeploy.map(id => TECHNOLOGIES[id]);
  gameDevelopment = TECHNOLOGY_CATEGORIES.gameDevelopment.map(id => TECHNOLOGIES[id]);
  languages = TECHNOLOGY_CATEGORIES.languages.map(id => TECHNOLOGIES[id]);
  designs = TECHNOLOGY_CATEGORIES.designs.map(id => TECHNOLOGIES[id]);
  tools = TECHNOLOGY_CATEGORIES.tools.map(id => TECHNOLOGIES[id]);
  services = TECHNOLOGY_CATEGORIES.services.map(id => TECHNOLOGIES[id]);

  philosophies: string[] = [];
  iLikes: string[] = [];
  iResolves: string[] = [];
  hobbies: string[] = [];
  objetives: string[] = [];

  constructor() {
    this.translation.translateContent('aboutme').subscribe(content => {
      this.philosophies = content.philosophyDescription;
      this.iLikes = content.iLikeDescription;
      this.iResolves = content.iResolveDescription;
      this.hobbies = content.hobbiesDescription;
      this.objetives = content.objetivesDescription;
    });


  }

}

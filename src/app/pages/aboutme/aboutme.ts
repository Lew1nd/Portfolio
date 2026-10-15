import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation-service';
import { frontendTechnology, backendTechnology, databases, cloudAndDeploy, gameDevelopment, languages, designs, tools } from '../../models/technologies-model';
import { TechIcon } from '../../components/tech-icon/tech-icon';

@Component({
  selector: 'app-aboutme',
  imports: [TranslatePipe, TechIcon],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
})
export class Aboutme {
  private translation = inject(TranslationService);

  frontend = frontendTechnology;
  backend = backendTechnology;
  database = databases;
  cloudAndDeploy = cloudAndDeploy;
  gameDevelopment = gameDevelopment;
  languages = languages;
  designs = designs;
  tools = tools;

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

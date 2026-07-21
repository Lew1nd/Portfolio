import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation-service';

@Component({
  selector: 'app-aboutme',
  imports: [TranslatePipe],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
})
export class Aboutme {
private translation = inject(TranslationService);

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

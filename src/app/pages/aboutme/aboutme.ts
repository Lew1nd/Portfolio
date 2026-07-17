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

  philosophy: string[] = [];
  iLike: string[] = [];
  iResolve: string[] = [];
  hobbies: string[] = [];
  objetives: string[] = [];

  constructor() {
    this.translation.translateContent('aboutme').subscribe(content => {
      this.philosophy = content.philosophy;
      this.iLike = content.ilikeDescription;
      this.iResolve = content.iresolveDescription;
      this.hobbies = content.hobbiesDescription;
      this.objetives = content.objetivesDescription;
    });


  }

}

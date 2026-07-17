import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate = inject(TranslateService);

  translateProject(projectSlug: string) {
  return this.translate.stream(`projects.${projectSlug}`);
}

}
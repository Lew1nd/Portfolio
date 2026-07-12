import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language-service';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private languageService = inject(LanguageService);

  language = this.languageService.getCurrentLanguage();

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

}

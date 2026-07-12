import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {

    private translate = inject(TranslateService);

    constructor() {
        this.translate.setFallbackLang('es');

        const language = localStorage.getItem('language') ?? 'es';

        this.translate.use(language);
    }

    setLanguage(language: string) {

        this.translate.use(language);

        localStorage.setItem('language', language);

    }

    getCurrentLanguage() {
        return this.translate.getCurrentLang();
    }

}
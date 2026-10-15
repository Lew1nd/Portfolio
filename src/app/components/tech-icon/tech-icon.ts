import { Component, input, signal } from '@angular/core';
import { Technology } from '../../models/technologies-model';

@Component({
  selector: 'app-tech-icon',
  imports: [],
  templateUrl: './tech-icon.html',
  styleUrl: './tech-icon.css',
})
export class TechIcon {
  technologies = input.required<Technology[]>();

  selectedTech = signal<string | null>(null);

  selectTech(name: string): void {
    this.selectedTech.update(current => current === name ? null : name);
  }
  
}

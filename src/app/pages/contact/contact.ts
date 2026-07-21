import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email-service';
import { NonNullableFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(NonNullableFormBuilder);
  private emailService = inject(EmailService);

  loading = signal(false);
  status = signal<'idle' | 'success' | 'error'>('idle');

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
    message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
  });

  async send() {
    if (this.loading()) return;
    if (this.contactForm.invalid) return;

    this.loading.set(true);
    this.status.set('success');
    try {
      const response = await this.emailService.send(this.contactForm.getRawValue());
      this.contactForm.reset();

    }
    catch (err) {
      this.status.set('error');
      console.log(err);
    }
    finally {
      this.loading.set(false);
      this.contactForm.valueChanges.subscribe(() => { this.status.set('idle'); });
    }

  }
}

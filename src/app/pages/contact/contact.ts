import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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

  constructor() {
    this.contactForm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.status.set('idle'));
  }

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
    message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
  });

  async send(): Promise<void> {
    if (this.loading() || this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.status.set('idle');

    try {
      await this.emailService.send(this.contactForm.getRawValue());

      this.contactForm.reset(
        {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        { emitEvent: false }
      );

      this.status.set('success');
    } catch (error: unknown) {
      this.status.set('error');
      console.error('Failed to send contact message:', error);
    } finally {
      this.loading.set(false);
    }
  }

}

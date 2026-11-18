import { Injectable } from '@angular/core';
import { ContactMessage } from '../models/message-model';
import emailjs from '@emailjs/browser';
import { environment } from '../environments/environment';
import { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class EmailService {
    private readonly cooldownMs = 60_000;
    private lastSuccessfulSend = 0;
    private sending = false;

    constructor() {
        emailjs.init({
            publicKey: environment.emailPublicKey,
            limitRate: {
                id: 'portfolio-contact',
                throttle: this.cooldownMs,
            },
        });
    }

    async send(message: ContactMessage): Promise<EmailJSResponseStatus> {
        if (this.sending) {
            throw new Error('A message is already being sent.');
        }

        const name = message.name.trim();
        const email = message.email.trim();
        const subject = message.subject.trim();
        const content = message.message.trim();

        if (!name || name.length < 4 || name.length > 30) {
            throw new Error('Invalid name.');
        }

        if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('Invalid email.');
        }

        if (!subject || subject.length < 2 || subject.length > 45) {
            throw new Error('Invalid subject.');
        }

        if (!content || content.length < 5 || content.length > 500) {
            throw new Error('Invalid message.');
        }

        const remaining = this.cooldownMs - (Date.now() - this.lastSuccessfulSend);

        if (this.lastSuccessfulSend > 0 && remaining > 0) {
            throw new Error(
                `Please wait ${Math.ceil(remaining / 1000)} seconds before sending another message.`,
            );
        }

        this.sending = true;

        try {
            const response = await emailjs.send(
                environment.emailServiceId,
                environment.emailTemplateId,
                {
                    from_name: name,
                    from_email: email,
                    subject,
                    message: content,
                },
            );

            this.lastSuccessfulSend = Date.now();

            return response;
        } finally {
            this.sending = false;
        }
    }
}
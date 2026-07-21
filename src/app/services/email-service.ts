import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContactMessage } from '../models/message-model';
import emailjs from '@emailjs/browser';
import { environment } from '../environments/environment';
import { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class EmailService {
    private translate = inject(TranslateService);

    send(message: ContactMessage) : Promise<EmailJSResponseStatus> {

        //Validaciones
        if (!message.name.trim()) throw new Error("Invalid name");
        if (!message.message.trim()) throw new Error("Invalid message");

        return emailjs.send(
            environment.emailServiceId,
            environment.emailTemplateId,
            {
                from_name: message.name,
                from_email: message.email,
                subject: message.subject,
                message: message.message,
            },
            {
                publicKey: environment.emailPublicKey
            }
        );

    }
}
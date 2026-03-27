import { Component, signal } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
statusMessage = signal('');
  isError = signal(false);
  isLoading = signal(false);

  ngOnInit() {
    // Dashboard > Account > API Keys se "Public Key" yahan paste karo
    emailjs.init("YOUR_PUBLIC_KEY"); 
  }

  async sendEmail(email: string) {
    if (!email || !email.includes('@')) {
      this.statusMessage.set("PLEASE ENTER A VALID EMAIL");
      this.isError.set(true);
      return;
    }

    this.isLoading.set(true);
    this.statusMessage.set("SENDING...");

    // Dashboard Template mein variables ko {{from_email}} aur {{to_name}} rakho
    const templateParams = {
      from_email: email, 
      to_name: 'Admin Prime Emirates'
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        templateParams
      );

      this.statusMessage.set("THANK YOU. WE WILL CONNECT SOON.");
      this.isError.set(false);
      
      // Success par message 5 sec baad hide ho jayega
      setTimeout(() => this.statusMessage.set(''), 5000);

    } catch (error: any) {
      console.error('EmailJS Error:', error);
      // Agar 400 ya Key error aaye toh console check karo
      this.statusMessage.set(error.text || "VERIFY YOUR KEYS");
      this.isError.set(true);
    } finally {
      this.isLoading.set(false);
    }
  }
}



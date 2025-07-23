import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  acep:boolean=false;
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_s0utwoo', 'template_4tnpt34', e.target as HTMLFormElement, {
        publicKey: 'uwkueq8dCRr0JW7kL',
      })
      .then(
        () => {
          let email=document.getElementById('email') as HTMLInputElement;
          let name=document.getElementById('name') as HTMLInputElement;
          let message=document.getElementById('message') as HTMLTextAreaElement;
          this.acep=!this.acep;
          console.log('SUCCESS!');
          email.value=""
          name.value=""
          message.value=""
        },
        (error) => {
          this.acep=true;
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
 
}

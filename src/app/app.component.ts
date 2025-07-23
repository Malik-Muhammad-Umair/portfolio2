import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { routes } from './app.routes';
import { FooterComponent } from "./MyComponents/footer/footer.component";
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup } from '@angular/forms';
// import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

addanimation() {
  const but = document.getElementById('btn') as HTMLButtonElement;
  const an = document.getElementsByClassName('ani')[0] as HTMLDivElement;

  an.classList.remove('cross');
  
  an.classList.add('anima');
   an.classList.remove('brdr');
  but.hidden = true;
}

closebar() {
  const but = document.getElementById('btn') as HTMLButtonElement;
  const an = document.getElementsByClassName('ani')[0] as HTMLDivElement;
  
  an.classList.add('brdr');
  an.classList.remove('anima');
 
  an.classList.add('cross');

  but.hidden = false;
}


  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-mode', this.isDark);
       document.body.classList.toggle('bgc')
  }


}


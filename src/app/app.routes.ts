import { Routes } from '@angular/router';


import { ContactComponent } from './MyComponents/contact/contact.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { ExperienceComponent } from './MyComponents/experience/experience.component';
import { HomeComponent } from './MyComponents/home/home.component';

export const routes: Routes = [ 
   
    { 
        path:"contact",component:ContactComponent
    }
   
    ,{ 
        path:"about",component:AboutComponent
    }
    ,{ 
        path:"",component:HomeComponent
    }
    ,{ 
        path:"home",component:HomeComponent
    }
    ,{ 
        path:"project",component:ProjectsComponent
    }
    ,{ 
        path:"experience",component:ExperienceComponent
    }
];

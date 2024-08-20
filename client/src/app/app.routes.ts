import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProcessComponent } from './components/process/process.component';
import { TeamComponent } from './components/team/team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'advantage', component: AdvantageComponent },
    { path: 'process', component: ProcessComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contact-us', component: ContactUsComponent }
];

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title:'Home Page', component: HomeComponent },
  { path: 'about', title:'Acerca de', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about-me',
    component:AboutMeComponent
  },
  {
    path: 'content/:id',
    component:ContentComponent
  }
];

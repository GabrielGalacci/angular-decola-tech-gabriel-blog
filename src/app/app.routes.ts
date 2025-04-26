import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MusicContentComponent } from './pages/content/music-content/music-content.component';
import { FilmsContentComponent } from './pages/content/films-content/films-content.component';
import { GamesContentComponent } from './pages/content/games-content/games-content.component';

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
    path: 'music/:id',
    component:MusicContentComponent
  },
  {
    path: 'films/:id',
    component:FilmsContentComponent
  },
  {
    path: 'games/:id',
    component: GamesContentComponent
  }
];

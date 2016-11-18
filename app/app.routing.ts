import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { GamesComponent }   from './games/games.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { SupportComponent }  from './misc/support.component';
import { AboutComponent }  from './misc/about.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'wallpaper',
    component: WallpaperComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

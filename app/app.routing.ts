import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';
import { GamesComponent }   from './games.component';
import { WallpaperComponent } from './wallpaper.component';
import { SupportComponent }  from './support.component';
import { AboutComponent }  from './about.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { GamesComponent }   from './games.component';
import { WallpaperComponent } from './wallpaper.component';
import { SupportComponent }  from './support.component';
import { AboutComponent }  from './about.component';
import { routing } from './app.routing';
import { NewsService }          from './news.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing], 
  //InMemoryWebApiModule.forRoot(InMemoryDataService), 
  declarations: [ AppComponent, HomeComponent, GamesComponent, WallpaperComponent, SupportComponent, AboutComponent],
  providers: [ NewsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
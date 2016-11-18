import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { SupportComponent } from './misc/support.component';
import { AboutComponent } from './misc/about.component';
import { DetailsComponent } from './details/details.component';
import { routing } from './app.routing';
import { ApiService } from './api.service';


@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, HomeComponent, GamesComponent, WallpaperComponent, SupportComponent, AboutComponent, DetailsComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../modules/game';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component'

@Component({
    moduleId: module.id,
    selector: 'my-wallpaper',
    templateUrl: './wallpaper.component.html',
    // styleUrls:['css/style.css']
})
export class WallpaperComponent implements OnInit {
    sectionTitle = '<h1>Wallpaper</h1>';
    wallsList: Game[];
    errorMessage: string;
    constructor(
        private wallpaperService: ApiService,
        private router: Router,
        private mainApp: AppComponent) { }


   private getWallpapers(): void {
        this.wallpaperService
            .getGameList(2)
            .then(wall => this.wallsList = wall, error => this.errorMessage = <any>error);
    }


    ngOnInit(): void {
        this.mainApp.sectionTitle = this.sectionTitle;
        this.getWallpapers();
    }

}


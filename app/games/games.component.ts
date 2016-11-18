import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../modules/game';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';


@Component({
    moduleId: module.id,
    selector: 'my-games',
    templateUrl: './games.component.html',
    // styleUrls:['css/style.css']
})
export class GamesComponent implements OnInit {
    sectionTitle = '<h1>Games</h1>';
    gamesList: Game[];
    errorMessage: string;

    constructor(
        private gameService: ApiService,
        private router: Router,
        private mainApp: AppComponent) { }

    private getGames(): void {
        this.gameService
            .getGameList(1)
            .then(games => this.gamesList = games.sort(function (a, b) { return b.id - a.id; }), error => this.errorMessage = <any>error);

    }

    ngOnInit(): void {

        this.mainApp.sectionTitle = this.sectionTitle;
        this.getGames();

    }
}


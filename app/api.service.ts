import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from './modules/game';
import { Story } from './modules/story';

@Injectable()
export class ApiService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiGamesUrl = 'http://localhost:8081/api/games';  // URL to web api
  private apiNewUrl = 'http://localhost:8081/api/news';  // URL to web api

  constructor(private http: Http) { }

  getGameList(type: number): Promise<Game[]> {
    return this.http.get(this.apiGamesUrl)
      .toPromise()
      .then(response => this.filterGameType(response.json() as Game[], type))
      .catch(this.handleError);
  }

  private filterGameType(gamelist: Game[], type: number) {
    var games: Game[];
    switch (type) {
      case 1:
        games = gamelist.filter(function (obj) {
          return obj.type == 'game';
        })
        break;
      case 2:
        games = gamelist.filter(function (obj) {
          return obj.type == 'wallpaper';
        })
        break;
      default:
        games = gamelist;
    }

    return games;
  }

  getGame(game: string): Promise<Game> {

    console.log(this.apiGamesUrl + '/' + game);
    return this.http.get(this.apiGamesUrl + '/' + game)
      .toPromise()
      .then(response => response.json() as Game)
      .catch(this.handleError);
  }

  getNewsList(): Promise<Story[]> {
    return this.http.get(this.apiNewUrl)
      .toPromise()
      .then(response => response.json() as Story[])
      .catch(this.handleError);
  }

  getNewsItem(id: number): Promise<Story> {
    return this.http.get(this.apiNewUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as Story)
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}

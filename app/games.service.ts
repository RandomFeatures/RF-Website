import { Injectable }    from '@angular/core';
import { Headers, Http,  Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from './modules/game';

@Injectable()
export class NewsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private newsUrl = 'http://localhost:8081/api/games';  // URL to web api

  constructor(private http: Http) { }

  getList(): Promise<Game[]> {
    return  this.http.get(this.newsUrl)
               .toPromise()
               .then(response => response.json() as Game[])
               .catch(this.handleError);
  }

  getItem(game: string): Promise<Game> {
    return  this.http.get(this.newsUrl + '/' + game)
               .toPromise()
               .then(response => response.json() as Game)
               .catch(this.handleError);
  }


  private handleError (error: Response | any) {
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

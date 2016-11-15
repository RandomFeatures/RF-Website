import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Story } from './story';

@Injectable()
export class NewsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private newsUrl = 'app/news';  // URL to web api

  constructor(private http: Http) { }

  getNews(): Promise<Story[]> {
    return this.http.get(this.newsUrl)
               .toPromise()
               .then(response => response.json().data as Story[])
               .catch(this.handleError);
  }

 
  getStory(id: number): Promise<Story> {
    return this.getNews()
               .then(news => news.find(story => story.id === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.newsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Story> {
    return this.http
      .post(this.newsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(story: Story): Promise<Story> {
    const url = `${this.newsUrl}/${story.id}`;
    return this.http
      .put(url, JSON.stringify(story), {headers: this.headers})
      .toPromise()
      .then(() => story)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from './story';
import { NewsService } from './news.service';


@Component({
    moduleId: module.id,
    selector: 'my-Home',
    templateUrl: './home.component.html'
    // styleUrls:['css/style.css']
})
export class HomeComponent implements OnInit {
    news: Story[];

    constructor(
        private newsService: NewsService,
        private router: Router) { }


    getNews(): void {
        this.newsService
            .getNews()
            .then(news => this.news = news.sort(function (a, b) {return b.id - a.id;}));
    }

    ngOnInit(): void {
        this.getNews()
      
    }

}



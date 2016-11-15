import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from './modules/story';
import { NewsService } from './news.service';


@Component({
    moduleId: module.id,
    selector: 'my-Home',
    templateUrl: './home.component.html'
    // styleUrls:['css/style.css']
})
export class HomeComponent implements OnInit {
    news: Story[];
    errorMessage: string;

    constructor(
        private newsService: NewsService,
        private router: Router) { }


    getNews(): void {
        this.newsService
            .getList()
            .then(news => this.news = news.sort(function (a, b) {return b.id - a.id;}), error =>  this.errorMessage = <any>error);
           
    }

    ngOnInit(): void {
       
        this.getNews()
    }
}



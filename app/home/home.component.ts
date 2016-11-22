import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../modules/story';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
//Importt the Image interface
import { Image } from './image.interface';
//IMAGES array implementing Image interface
var IMAGES: Image[] = [
    { "alt": "8 Bit Mahjong", "url": "images/feature1.png" },
    { "alt": "Hacker Wars", "url": "images/feature2.png" },
    { "alt": "Christmas Mahjong", "url": "images/feature3.png" },
    { "alt": "Christmas Dreamscape", "url": "images/feature4.png" },
    { "alt": "Halloween Screamscape", "url": "images/feature5.png" },
    { "alt": "Alien Dance Party", "url": "images/feature6.png" }
];

@Component({
    moduleId: module.id,
    selector: 'my-Home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    newsList: Story[];
    errorMessage: string;
    //sectionTitle = "<h1></h1>";
    sectionTitle = '<div id="feature" class="carousel"><ul class="slides">';
    public images = IMAGES;
    constructor(
        private newsService: ApiService,
        private router: Router,
        private mainApp: AppComponent) { }


    getNews(): void {
        this.newsService
            .getNewsList()
            .then(news => this.newsList = news.sort(function (a, b) { return b.id - a.id; }), error => this.errorMessage = <any>error);

    }

    ngOnInit(): void {

        this.getNews()

        for (var image of this.images) {
            this.sectionTitle += '<li class="panel"><img src="' + image.url + '" alt="' + image.alt + '"></li>';
        }
        this.sectionTitle += '</ul></div>';
        console.log(this.sectionTitle);
        this.mainApp.sectionTitle = this.sectionTitle;

        let body = document.getElementsByTagName('body')[0];
        body.id = 'index';

    }
}



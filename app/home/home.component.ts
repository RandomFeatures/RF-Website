import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../modules/story';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'my-Home',
    templateUrl: './home.component.html'
    // styleUrls:['css/style.css']
})
export class HomeComponent implements OnInit {
    newsList: Story[];
    errorMessage: string;
    sectionTitle = "<h1></h1>"
    //sectionTitle = '<div id="feature"class="stepcarousel"><div class="belt"><div class="panel"><img src="images/feature1.png"alt="8 Bit Mahjong"/></div><div class="panel"><img src="images/feature2.png"alt="Hacker Wars"/></div><div class="panel"><img src="images/feature3.png"alt="Chirstmas Mahjong"/></div><div class="panel"><img src="images/feature4.png"alt="Christmas Dreamscape"/></div><div class="panel"><img src="images/feature5.png"alt="Halloween Screamscape"/></div><div class="panel"><img src="images/feature6.png"alt="Alien Dance Party"/></div></div></div><div id="feature-scroll"><a href="javascript:stepcarousel.stepBy(\'feature\', -1)"class="previous">Previous</a><a href="javascript:stepcarousel.stepBy(\'feature\', 1)"class="next">Next</a></div>';
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
        this.mainApp.sectionTitle = this.sectionTitle;
        this.getNews()
    }
}



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'my-about',
    templateUrl: './about.component.html',
    // styleUrls:['css/style.css']
})
export class AboutComponent implements OnInit {
    sectionTitle = '<h1>About</h1>';

    constructor(private router: Router,
        private mainApp: AppComponent) { }
    ngOnInit(): void {
        this.mainApp.sectionTitle = this.sectionTitle;
        let body = document.getElementsByTagName('body')[0];
        body.id = '';
    }
}


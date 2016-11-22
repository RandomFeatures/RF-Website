import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'my-support',
    templateUrl: './support.component.html',
    // styleUrls:['css/style.css']
})
export class SupportComponent implements OnInit {
    sectionTitle = '<h1>Support</h1>';

    constructor(private router: Router,
        private mainApp: AppComponent) { }
    ngOnInit(): void {
        this.mainApp.sectionTitle = this.sectionTitle;
        let body = document.getElementsByTagName('body')[0];
        body.id = '';
    }

}


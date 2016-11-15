import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-about',
    templateUrl: './about.component.html',
    // styleUrls:['css/style.css']
})
export class AboutComponent implements OnInit {
    sectionTitle = 'About';

    constructor(private router: Router) { }
    ngOnInit(): void {
    }
}


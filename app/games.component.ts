import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-games',
    templateUrl: './games.component.html',
    // styleUrls:['css/style.css']
})
export class GamesComponent implements OnInit {
    sectionTitle = 'Games';

    ngOnInit(): void {
    }
}


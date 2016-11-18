import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    // styleUrls:['css/style.css']
})
export class AppComponent {
    copyrightyear = getYear()
    sectionTitle = '';
}

function getYear() {
    var today = new Date();
    var year = today.getFullYear();

    return year;
}
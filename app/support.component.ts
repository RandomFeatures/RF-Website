import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   moduleId: module.id,
   selector: 'my-support', 
  templateUrl: './support.component.html',
 // styleUrls:['css/style.css']
})
export class SupportComponent  implements OnInit { 
 sectionTitle = 'Support';

constructor(private router: Router) { }
 ngOnInit(): void {
 }

}


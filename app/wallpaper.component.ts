import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   moduleId: module.id,
   selector: 'my-wallpaper', 
  templateUrl: './wallpaper.component.html',
 // styleUrls:['css/style.css']
})
export class WallpaperComponent  implements OnInit { 
 sectionTitle = 'Wallpaper';

constructor(private router: Router) { }
 ngOnInit(): void {
 }

}


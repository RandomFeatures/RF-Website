import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Game } from '../modules/game';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'my-details',
    templateUrl: './details.component.html',
   
    // styleUrls:['css/style.css']
})
export class DetailsComponent implements OnInit {
    sectionTitle = '';
    myGame: Game;
    errorMessage: string;
    private subscription: Subscription;
  
    constructor(
        private gameService: ApiService,
        private router: Router,
        private route: ActivatedRoute,
        private mainApp: AppComponent) { }

    private getItem(itemName: string): void {
        this.gameService
            .getGame(itemName)
            .then(rsp => this.gotItem(rsp), error => this.errorMessage = <any>error);
          
    }

    private gotItem(rtn: Game) {
        this.myGame = rtn;
        this.mainApp.sectionTitle = '<h1>'+this.myGame.game +'</h1>';
    }
   
    ngOnInit(): void {
        var itemName: string;
        // subscribe to router event
        this.subscription = this.route.params.subscribe(
            (param: any) => {
                let itemName = param['id'];
                this.getItem(itemName);
            });
    }

    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }

    
}


import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'ct-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})

export class StarComponent{
    @Input() rating:number;

}
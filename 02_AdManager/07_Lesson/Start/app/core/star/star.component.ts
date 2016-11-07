import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'ct-star',
    templateUrl:'star.component.html',
    styleUrls:['star.component.css']
})

export class StarComponent 
{
    @Input() rating:number;

	stars:number[]=[1,2,3,4,5];

	@Output() ratingClicked : EventEmitter<string>= new EventEmitter<string>();

    onClick(){
        console.log('rating clicked');
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
    }
}
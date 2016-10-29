import {Component,Input,Output,EventEmitter,OnChanges} from '@angular/core';

@Component({
    selector:'ct-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating:number=2;

	starWidth:number;

	@Output() ratingClicked : EventEmitter<string>= new EventEmitter<string>();

	ngOnChanges():void{
        this.starWidth = this.rating * 86/5;
        console.log('rating changed '+this.rating);
    }
    onClick(){
        console.log('rating clicked');
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
    }
}
import {Component,Input} from '@angular/core';

@Component({
    selector:'am-active2Record',
    templateUrl:'app/publications/publication-details.component.html'
})

export class PublicationDetailsComponent{

	pageTitle:string="Publication Details";

	@Input()
    selectedPublication:any;

}
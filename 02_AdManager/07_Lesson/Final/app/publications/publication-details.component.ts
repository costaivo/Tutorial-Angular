import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'am-active2Record',
    templateUrl:'publication-details.component.html'
})

export class PublicationDetailsComponent{

	pageTitle:string="Publication Details";

	@Input()
    selectedPublication:any;

}
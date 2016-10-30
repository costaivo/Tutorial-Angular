import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'am-publicationDetail',
    templateUrl:'publication-details.component.html'
})

export class PublicationDetailsComponent{

	pageTitle:string="Publication Details";

	@Input()
    selectedPublication:any;

}
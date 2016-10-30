import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'am-publicationDetail',
    templateUrl:'publication-details.component.html',
    styleUrls:['publication-details.component.css']
})

export class PublicationDetailsComponent{

	pageTitle:string="Publication Details";

	@Input()
    selectedPublication:any;

}
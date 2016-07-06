import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {IPublication} from './publication';
import {PublicationFilterPipe} from './publication-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {PublicationService} from './publication.service';

@Component({
    templateUrl:'app/publications/publication-list.component.html',
    styleUrls:['app/publications/publication-list.component.css'],
    pipes:[PublicationFilterPipe],
    directives:[StarComponent,ROUTER_DIRECTIVES]
})

export class PublicationListComponent 
            implements OnInit
{
    pageTitle:string="Publications";
    imageWidth:number=16;
    imageMargin:number=2;
    showOnlyActiveRecords:boolean=false;
    errorMessage:string;

    publications:IPublication[]=null;


constructor(private _publicationService:PublicationService){

}
showHideInactiveRecords():void{
    this.showOnlyActiveRecords = !this.showOnlyActiveRecords;
    
}

ngOnInit():void{
        console.log('In OnInit');
       this._publicationService.getPublications()
        .subscribe(
            publication => this.publications = publication,
            error=> this.errorMessage = <any> error);
}

onRatingClicked(message:string):void{
    this.pageTitle = 'Product List:'+message;
}
}
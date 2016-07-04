import {Component,OnInit} from 'angular2/core'

import {IPublication} from './publication'
import {PublicationFilterPipe} from './publication-filter.pipe'
import {StarComponent} from '../shared/star.component';

@Component({
    selector:'am-publicationList',
    templateUrl:'app/publications/publication-list.component.html',
    styleUrls:['app/publications/publication-list.component.css'],
    pipes:[PublicationFilterPipe],
    directives:[StarComponent]
})

export class PublicationListComponent 
            implements OnInit
{
    pageTitle:string="Publications";
    imageWidth:number=16;
    imageMargin:number=2;
    showOnlyActiveRecords:boolean=false;

    publications:IPublication[]=[
    {
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
        "IsActiveRecord": true,
        "Name": "Herald",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": .059,
        "Ratings":4
    },
    {
        "ID": "1806b70c-e47a-4c0b-835c-a88926d9723a",
        "IsActiveRecord": true,
        "Name": "Times of India (Goa Edition)",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.25,
        "CommisionRateForClassifieds": .050,
        "Ratings":2.5
    },
    {
        "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a6",
        "IsActiveRecord": false,
        "Name": "Times of India (Mumbai Edition)",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": .15,
        "CommisionRateForClassifieds": .10,
         "Ratings":5
    }
];


showHideInactiveRecords():void{
    this.showOnlyActiveRecords = !this.showOnlyActiveRecords;
    
}

ngOnInit():void{
        console.log('In OnInit');
}

onRatingClicked(message:string):void{
    this.pageTitle = 'Product List:'+message;
}
}
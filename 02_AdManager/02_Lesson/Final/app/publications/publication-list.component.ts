import {Component} from 'angular2/core'

@Component({
    selector:'am-publicationList',
    templateUrl:'app/publications/publication-list.component.html'
})

export class PublicationListComponent
{
    pageTitle:string="Publications";
    publications:any[]=[
    {
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
        "IsActiveRecord": true,
        "PublicationName": "Herald",
        "PublicationTypexCD": "Local",
        "PublicationLanguagexCD": "English",
        "CommissionRateForAdvertisments": 10.5,
        "CommisionRateForClassifieds": 5.9
    },
    {
        "ID": "1806b70c-e47a-4c0b-835c-a88926d9723a",
        "IsActiveRecord": true,
        "PublicationName": "Times of India (Goa Edition)",
        "PublicationTypexCD": "Local",
        "PublicationLanguagexCD": "English",
        "CommissionRateForAdvertisments": 10.5,
        "CommisionRateForClassifieds": 5.9
    },
    {
        "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a6",
        "IsActiveRecord": true,
        "PublicationName": "Times of India (Mumbai Edition)",
        "PublicationTypexCD": "Local",
        "PublicationLanguagexCD": "English",
        "CommissionRateForAdvertisments": 15,
        "CommisionRateForClassifieds": 12
    }
];
}
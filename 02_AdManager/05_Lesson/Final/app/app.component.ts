//import Component from angular core
import {Component} from '@angular/core';

//define the metadata for the component using decorator
 @Component({
     selector:'am-app',
     templateUrl:'app/app.component.html',
     styleUrls:['app/app.component.css']
})


//create class for the component
export class AppComponent{
    pageTitle:string = "Digital Ads : Ad Manager";
    
    fontColor="red";
    selectedPublication:any;
    publications:any[]=[
    {
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
        "IsActiveRecord": true,
        "Name": "Herald",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.059
    },
    {
        "ID": "1806b70c-e47a-4c0b-835c-a88926d9723a",
        "IsActiveRecord": true,
        "Name": "Times of India (Goa Edition)",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.25,
        "CommisionRateForClassifieds": 0.050
    },
    {
        "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a6",
        "IsActiveRecord": false,
        "Name": "Times of India (Mumbai Edition)",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.10
    }
];

onRowClick(publication){
    console.log("Row clicked "+publication.Name);
    this.selectedPublication=publication;
    
}
}
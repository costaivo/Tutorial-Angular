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
    publication={
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
        "IsActiveRecord": true,
        "Name": "Herald",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.059
    };

onRowClick(publication){
    console.log("Row clicked "+publication.Name);  
}

}
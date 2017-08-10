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
    pageTitle:string = "Digital Ads";   
}
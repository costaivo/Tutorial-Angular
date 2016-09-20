//import Component from angular core
import {Component} from '@angular/core';

//define the metadata for the component using decorator
 @Component({
     selector:'am-app',
     template:`<div ><h1> {{pageTitle}} : Ad Manager</h1>
     </div>`
})

//create class for the component
export class AppComponent{
    pageTitle:string = "Digital Ads ";
}
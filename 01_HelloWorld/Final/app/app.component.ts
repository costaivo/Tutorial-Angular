//import component from angular core
import {Component} from 'angular2/core'

//define the component 
@Component({
    selector:'my-app',
    template:`<div><h1>Hello World : {{pageTitle}}</h1>
    </div>`
})


//create class for the component
export class AppComponent{
    pageTitle:string = "Angular 2";
}

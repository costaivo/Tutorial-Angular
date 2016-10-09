//import Component from angular core
import {Component} from '@angular/core';

//define the metadata for the component using decorator
 @Component({
     selector:'am-app',
     template:`<div >
     <h1> {{pageTitle}}</h1>
     <hr>
     </div>
     <label>Publication : </label>
     <span [style.color]="fontColor"> {{publication}}</span>
     <br/>
     <input [(ngModel)]="publication" placeholder="Publication Name"/>
     <br/>
     <label>Publication List</label>
     `,
     styles:[`
     h1 {
        color: #369;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;
        }
    hr {
        display: block;
            height: 1px;
            border: 0;
            border-top: 2px solid #ccc;
            margin: 1em 0;
            padding: 0; 
        }
        p{
            color:#369
        }
    `]
})


//create class for the component
export class AppComponent{
    pageTitle:string = "Digital Ads : Ad Manager";
    
    fontColor="red";
    publication:string="Herald";

}
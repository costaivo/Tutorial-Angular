import {Component}from 'angular2/core';

@Component({
    selector:'adm-app',
    template:`<div><h1>{{pageTitle}}</h1>
    </div>`
})

export class AppComponent{
    pageTitle:string="Angular2: Hello World;
}
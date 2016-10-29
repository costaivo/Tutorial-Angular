 //import the NgModule decorator function.
import { NgModule }      from '@angular/core';

//import the  BrowsesrModule.This is an web application that will run in a browser, hence this module is required.
import { BrowserModule } from '@angular/platform-browser';

//required for two-way binding
import {FormsModule} from '@angular/forms';

//import our root component
import { AppComponent }   from './app.component';

import {PublicationListComponent} from './publications/publications-list.component';
import {PublicationDetailsComponent} from './publications/publication-details.component';

//Core Components
import {IsActiveComponent} from './shared/isActive.component';
import {StarComponent} from './shared/star.component';

//@NgModule takes a metadata object that tells Angular how to compile and run module code. 
//It identifies the module's own components, directives and pipes, making some of them public so external 
//components can use them. It may add service providers to the application dependency injectors.
@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule 
        ],
    declarations: [ 
        AppComponent,
        PublicationDetailsComponent,
        PublicationListComponent,
        IsActiveComponent,
        StarComponent
        ],
    bootstrap:    [AppComponent]
})

//create class for the module
export class AppModule { }
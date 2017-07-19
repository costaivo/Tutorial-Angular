//import the  BrowsesrModule.This is an web application that will run in a browser, hence this module is required.
import { BrowserModule } from '@angular/platform-browser';

 //import the NgModule decorator function.
import { NgModule } from '@angular/core';

//import our root component
import { AppComponent } from './app.component';

//@NgModule takes a metadata object that tells Angular how to compile and run module code. 
//It identifies the module's own components, directives and pipes, making some of them public so external 
//components can use them. It may add service providers to the application dependency injectors.
@NgModule({
  // Here we define the components created in the application
  declarations: 
  [
    AppComponent
  ],
  // Using Imports we add reference to the external modules
  imports: 
  [
    BrowserModule
  ],
  // Data Services
  providers: [],
  // Bootstrap to load the first component
  bootstrap: [AppComponent]
})

//create class for the module
export class AppModule { }

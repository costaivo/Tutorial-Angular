import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from '.';
import {Main} from '../containers';
import {AppBar} from '../UI';

@NgModule({
    imports:[
        BrowserModule
        ],
        declarations:[
            AppComponent,
            Main,
            AppBar
        ],
        bootstrap:[AppComponent]
})

export class AppModule{

}


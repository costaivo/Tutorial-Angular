import  {Component} from 'angular2/core';
import {PublicationListComponent} from './publications/publication-list.component';

@Component({
    selector:'am-app',
    template:`<div >
      <h1> {{pageTitle}} : Advertisment Manager</h1>
      <am-publicationList></am-publicationList>
       </div>`,
       directives:[PublicationListComponent]
})
export class AppComponent{
    pageTitle:string = 'Digital Ads';
}
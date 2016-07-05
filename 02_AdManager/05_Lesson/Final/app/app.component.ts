import  {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import  'rxjs/Rx'; //Load all features

import {PublicationListComponent} from './publications/publication-list.component';
import {PublicationService} from './publications/publication.service'

@Component({
    selector:'am-app',
    template:`<div >
      <h1> {{pageTitle}} : Advertisment Manager</h1>
      <am-publicationList></am-publicationList>
       </div>`,
       directives:[PublicationListComponent],
       providers:[PublicationService,HTTP_PROVIDERS]
})
export class AppComponent{
    pageTitle:string = 'Digital Ads';
}
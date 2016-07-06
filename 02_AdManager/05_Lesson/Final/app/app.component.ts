import  {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import  'rxjs/Rx'; //Load all features
import {ROUTER_PROVIDERS,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

import {PublicationListComponent} from './publications/publication-list.component';
import {PublicationDetailComponent} from './publications/publication-detail.component';
import {PublicationService} from './publications/publication.service';
import {IndexComponent} from './home/index.component';


@Component({
    selector:'am-app',
    templateUrl:'app/app.component.html',
       directives:[ROUTER_DIRECTIVES],
       providers:[PublicationService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})

@RouteConfig([
    {path:'/index',name:'Index',component:IndexComponent,useAsDefault:true},
    {path:'/publications',name:'Publications',component:PublicationListComponent},
    {path:'/publication/:id',name:'PublicationDetail',component:PublicationDetailComponent}
])

export class AppComponent{
    pageTitle:string = 'Digital Ads';
}
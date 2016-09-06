import {Component,OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';

import {IPublication} from './publication';
import {PublicationService} from './publication.service';
import {StarComponent} from '../shared/star.component';

@Component({
   // selector:'am-publicationDetail',
    templateUrl:'app/publications/publication-detail.component.html',
    styleUrls:['app/publications/publication-detail.component.css'],
    directives:[StarComponent]
})

export class PublicationDetailComponent implements OnInit{
    pageTitle: string = 'Publication Detail';
    publication:IPublication;
    errorMessage:string;


    constructor(private _publicationService:PublicationService,
    private _router:Router,
    private _routeParams:RouteParams){
          
    }



    ngOnInit(){
    console.log('In OnInit -PublicationDetail');

       if(!this.publication){
            let id=this._routeParams.get('id');
            this.getPublication(id);
             console.log(this.publication);
       }
    }

    getPublication(id:string){
    this._publicationService.getPublication(id)
    .subscribe(
        publication =>this.publication=publication,
        error=> this.errorMessage=<any>error
    );
}
    onBack():void{
        this._router.navigate(['Publications'])
    }
}
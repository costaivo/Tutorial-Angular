import { Component, Input } from '@angular/core';

//required for routing, back button implementaion.
import { Router } from '@angular/router';

//required to fetch the paramters from the router
import { ActivatedRoute } from '@angular/router';

//Publication 
import { PublicationService } from './publication.service';
import { IPublication } from './publication';


@Component({
    moduleId: module.id,
    selector: 'am-publicationDetail',
    templateUrl: 'publication-details.component.html',
    styleUrls: ['publication-details.component.css']
})

export class PublicationDetailsComponent {

    pageTitle: string = "Publication Details";

    @Input()
    selectedPublication: IPublication;

    constructor(private _route: ActivatedRoute, private _router: Router,
        private _publicationService: PublicationService) {
        console.log('PublicationDetailsComponent --Constructor Called')
    }

    ngOnInit() {
        //Fetch paramters from the route using the snapshot method
        let id = this._route.snapshot.params['id'];

        //Load the publication from the id passed in parameter
        this._publicationService.getPublication(id)
            .subscribe(publication => {
                this.selectedPublication = publication;

                if (this.selectedPublication == null) {
                    alert('Publication not found in db with supplied id');
                    //TODO: Redirection not working. find solution for this to work. 
                    this._router.navigate['/publications'];
                }
            } );

    }

    onBack(): void {
        this._router.navigate(['/publications']);
    }
}
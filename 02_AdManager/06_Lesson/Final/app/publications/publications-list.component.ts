import { Component,OnInit } from '@angular/core';
import { PublicationService } from './publication.service';
import {IPublication} from './publication';

@Component({
    moduleId:module.id,
    selector: 'am-publicationList',
    templateUrl: 'publications-list.component.html',
    styleUrls: ['publications-list.component.css']
})

export class PublicationListComponent implements OnInit {
    selectedPublication: any;
    pageTitle: string = "Publications";
    publications: IPublication[];

    constructor(private _publicationService: PublicationService) {

    }

	ngOnInit(){
		this.publications = this._publicationService.getAll();
    }

    onRowClick(publication) {
        console.log("Row clicked " + publication.Name);
        this.selectedPublication = publication;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Publications :" + message;
    }
}
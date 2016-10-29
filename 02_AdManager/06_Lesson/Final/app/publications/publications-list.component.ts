import { Component,OnInit } from '@angular/core';
import { PublicationService } from './publication.service';

@Component({
    moduleId:module.id,
    selector: 'am-publicationList',
    templateUrl: 'publications-list.component.html',
    styleUrls: ['publications-list.component.css']
})

export class PublicationListComponent implements OnInit {
    fontColor = "red";
    selectedPublication: any;
    pageTitle: string = "Publications";
    publications: any[];

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
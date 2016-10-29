import { Component,OnInit } from '@angular/core';
import { PublicationService } from './publication.service';

@Component({
    selector: 'am-publicationList',
    templateUrl: 'app/publications/publications-list.component.html',
    styleUrls: ['app/publications/publications-list.component.css']
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
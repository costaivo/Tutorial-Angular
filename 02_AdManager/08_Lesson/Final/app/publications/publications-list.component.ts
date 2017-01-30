import { Component, OnInit } from '@angular/core';
import { PublicationService } from './publication.service';
import { IPublication } from './publication';

@Component({
    moduleId: module.id,
    selector: 'am-publicationList',
    templateUrl: 'publications-list.component.html',
    styleUrls: ['publications-list.component.css']
})

export class PublicationListComponent implements OnInit {

    pageTitle: string = "Publications";
    publications: IPublication[];
    errorMessage: string;

    constructor(private _publicationService: PublicationService) {

    }

    ngOnInit() {
        this._publicationService.getAll()
            .subscribe(publications => this.publications = publications,
            error => this.errorMessage = <any>error);
    }



    onRatingClicked(message: string): void {
        this.pageTitle = "Publications :" + message;
    }
}
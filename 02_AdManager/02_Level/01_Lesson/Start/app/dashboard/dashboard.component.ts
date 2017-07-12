import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../publications/publication.service';
import { ClientService } from '../clients/client.service';

@Component({
    moduleId: module.id,
    selector: 'am-dashboard',
    templateUrl: 'dasboard.component.html',
    styleUrls: ['dasboard.component.css']
})
export class DasboardComponent implements OnInit {

    publicationCount: number = 10;
    clientCount: number = 10;

    constructor(private _clientService: ClientService, private _publicationService: PublicationService) {

    }

    ngOnInit() {
        this._publicationService
            .getTotalCount()
            .subscribe(result => this.publicationCount = result);

        this._clientService
            .getTotalCount()
            .subscribe(result => this.clientCount = result);

    }

}
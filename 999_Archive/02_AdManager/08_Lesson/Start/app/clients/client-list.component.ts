import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
    moduleId: module.id,
    selector: 'am-clientlist',
    templateUrl: 'client-list.component.html',
    styleUrls: ['client-list.component.css']
})
export class ClientListComponent implements OnInit {
    pageTitle: string = "Clients";
    clients: any[];

    constructor(private _clientService: ClientService) { }

    ngOnInit() {
        this.clients = this._clientService.getAll();
    }
}
import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import {IClient} from './client';

@Component({
    moduleId: module.id,
    selector: 'am-clientlist',
    templateUrl: 'client-list.component.html',
    styleUrls: ['client-list.component.css']
})


export class ClientListComponent implements OnInit {
    
    pageTitle: string = "Clients";
    clients: IClient[];
    errorMessage:string;
    
    constructor(private _clientService: ClientService) { 

    }

    ngOnInit() {
        this._clientService.getAll()
        .subscribe(clients=> this.clients = clients,
        error =>this.errorMessage = <any>error);
    }
}
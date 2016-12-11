import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//required for back button
import { Router } from '@angular/router';

import { ClientService } from './client.service';
import { IClient } from './client';

@Component({
    moduleId: module.id,
    selector: 'am-clientDetail',
    templateUrl: 'client-details.component.html'
})
export class ClientDetailsComponent implements OnInit {

    pageTitle: string = "Client Details";

    @Input()
    selectedClient: IClient;

    constructor(private _route: ActivatedRoute,
        private _router: Router, private _clientService: ClientService) {

    }

    ngOnInit() {
        //Snapshot method to load the 
        let id = this._route.snapshot.params['id'];
        this.selectedClient = this._clientService.getClient(id);
        if (this.selectedClient == null)
            alert('Client not found in db');
    }

    onBack(): void {
        this._router.navigate(['/clients']);
    }
}
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//required for back button
import { Router } from '@angular/router';

//Client 
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

        //Load the client from the id passed in parameter
        this._clientService.getClient(id)
        .subscribe(client=>{
            this.selectedClient = client;

            if(this.selectedClient == null){
                alert('Publication not found in db with supplied id');
                this._router.navigate['/clients'];
            }
        });
    }

    onBack(): void {
        this._router.navigate(['/clients']);
    }
}
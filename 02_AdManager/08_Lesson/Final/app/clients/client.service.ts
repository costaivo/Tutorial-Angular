import { Injectable } from '@angular/core';

//required for http service
import {Http,Response} from '@angular/http';

//required for return type for http requests
import {Observable} from 'rxjs/Observable';

//Load the library into memory, but does not import any modules
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IClient } from './client';

@Injectable()
export class ClientService {

    private _clientUrl ='api/clients/clients.json';

    //Inject the http service
    constructor(private _http:Http) {

    }
   
	getTotalCount():Observable<number>{
		return this._http.get(this._clientUrl)
        .map((Response:Response)=>(<IClient[]>Response.json()).length)
        .do(data=>console.log('Count : '+JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    getClient(id:string):Observable<IClient>{
		return this._http.get(this._clientUrl)
        .map((response:Response)=> (<IClient[]>response.json()).find(x=>x.ID==id))
        .do(data => console.log('client :'+JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    getAll(): Observable<IClient []> {
        return this._http.get(this._clientUrl)
        .map((response:Response)=> <IClient[]>response.json())
        .do(data=> console.log('All Clients :'+JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}



import { Injectable } from '@angular/core';

//required for http service
import {Http,Response} from '@angular/http';

//required for return type for http requests
import {Observable} from 'rxjs/Observable';

//Loads the library but does not import any modules
import 'rxjs/add/operator/map';

//Loads the do & Map operator 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IPublication } from './publication';


@Injectable()
export class PublicationService {

    private _publicationUrl ='api/publications/publications.json';
 

    //Inject the http service
    constructor(private _http:Http) {

    }

    getTotalCount(): Observable<number> {
    return this._http.get(this._publicationUrl)
            //Map the response to IPublication array 
            .map((response: Response)=>  (<IPublication[]>response.json()).length)
            .do(data=> console.log('Count : '+JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPublication(id:string): Observable<IPublication> {
      return this._http.get(this._publicationUrl)
            //Map the response to IPublication array 
            .map((response: Response)=>  (<IPublication[]>response.json()).find(x=>x.ID==id))
            .do(data=> console.log('publication : '+JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAll(): Observable<IPublication[]> {
            return this._http.get(this._publicationUrl)
            //Map the response to IPublication array 
            .map((response: Response)=> <IPublication[]> response.json())
            .do(data=> console.log('All : '+JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}



import {Injectable} from 'angular2/core'
import {Http,Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import {IPublication} from './publication'

@Injectable()
export class PublicationService{

private _publicationUrl = 'api/publications/publications.json';

constructor(private _http:Http )
{

}

 getPublication(id:string):Observable<IPublication>{
     console.log("Fetching publication");
        return this.getPublications()
            .map((publications:IPublication[])=> publications.find(p=>p.ID ===  id));
    }

 getPublications():Observable<IPublication[]>{
        return this._http.get(this._publicationUrl)
        .map((response:Response)=> <IPublication[]>response.json())
       // .do(data => console.log('All: '+ JSON.stringify(data)))
        .catch(this.handleError);
    }

private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
    getPublication2():IPublication[]{
        return [
    {
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
        "IsActiveRecord": true,
        "Name": "Herald",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": .059,
        "Ratings":4
    },
    {
        "ID": "1806b70c-e47a-4c0b-835c-a88926d9723a",
        "IsActiveRecord": true,
        "Name": "Times of India (Goa Edition)",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.25,
        "CommisionRateForClassifieds": .050,
        "Ratings":2.5
    },
    {
        "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a6",
        "IsActiveRecord": false,
        "Name": "Times of India (Mumbai Edition)",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": .15,
        "CommisionRateForClassifieds": .10,
         "Ratings":5
    }
];
    }
}
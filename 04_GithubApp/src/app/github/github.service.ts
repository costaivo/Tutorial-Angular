import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username='costaivo';
    private client_id='';
    private client_secret='';

    constructor(private _http:Http){
        console.log('github service init');
    }
}
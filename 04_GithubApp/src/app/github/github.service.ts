import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'costaivo';
  private client_id = '9faec800821a3d0a58b0';
  private client_secret = '373731bb8a1cefe47db36c1e372f06bed99a6e83';

  constructor(private _http: Http) {
    console.log('Github service Init...');
  }

  getUser() {

    return this._http.get('https://api.github.com/users/' + this.username)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username+'/repos')
      .map(res => res.json());
  }
}

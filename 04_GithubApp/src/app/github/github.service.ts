import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { GitHttpClient } from '../shared/github-httpClient';

@Injectable()
export class GithubService {

  private username = 'costaivo';
  private client_id = '9faec800821a3d0a58b0';
  private client_secret = '373731bb8a1cefe47db36c1e372f06bed99a6e83';
  private urlPostfix: string = '';
  constructor(private http: HttpClient) {
    console.log('Github service Init...');
    this.urlPostfix = `?client_id=${this.client_id}&client_secret=${this.client_secret}`;
  }

  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username + this.urlPostfix)
      .map(res => res);
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos' + this.urlPostfix)
      .map(res => res);
  }
  updateUsername(username: string) {
    this.username = username;
  }
}

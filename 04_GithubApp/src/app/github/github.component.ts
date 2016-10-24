import { Component, OnInit } from '@angular/core';

import {GithubService} from './github.service';

@Component({
 // moduleId: module.id,
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:any;
  repos:any;
  username:string;

  constructor(private _githubService:GithubService) {
    console.log('github component constructor');


  }

  ngOnInit() {
    console.log('github component Init');
  }

  search(){
    console.log("searching for user:"+this.username);
    this._githubService.updateUsername(this.username);

    this._githubService.getUser()
                      .subscribe(user => {
                        console.log(user);
                        this.user = user;
                      });

                      this._githubService.getRepos()
                      .subscribe(repos=>{
              this.repos = repos;
                      })
  }
}

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

  constructor(private _githubService:GithubService) {
    console.log('github component constructor');

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

  ngOnInit() {
    console.log('github component Init');
  }

}

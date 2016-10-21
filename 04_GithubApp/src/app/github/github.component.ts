import { Component, OnInit } from '@angular/core';

import {GithubService} from './github.service';

@Component({
 // moduleId: module.id,
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private _githubService:GithubService) {
    console.log('github component constructor');
  }

  ngOnInit() {
    console.log('github component Init');
  }

}

import { Component,OnInit } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitHub Search App';

  constructor(){
    console.log('AppCompontent Constructor');
  }

ngOnInit(){
  console.log('AppComponent Init');
}
}

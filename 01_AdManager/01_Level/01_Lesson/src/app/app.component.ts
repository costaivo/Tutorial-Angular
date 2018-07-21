// import Component decorator from angular core
import { Component } from '@angular/core';


// metadata for the component using Component decorator
@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// create class for the AppComponent
export class AppComponent {
  title = 'Angular JS 5';
}


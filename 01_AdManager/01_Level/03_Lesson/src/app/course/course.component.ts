import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'Angular JS 4';

  lvlOne_Lessons: any[] = [
    {
      "id": "01",
      "title": "Running an AngularJS 2 Application",
      "isCompleted":"true",
      "link":""
    },
    {
      "ID": "02",
      "Title": "Building your first Component and Module",
       "isCompleted":"true",
          "link":""
    },
      {
      "ID": "03",
      "Title": "Component & DataBinding",
       "isCompleted":"true",
          "link":""
    },
       {
      "ID": "04",
      "Title": "Structural Directives",
       "isCompleted":"true",
          "link":""
    },
  ];

  constructor() { }


  ngOnInit() {
  }

}

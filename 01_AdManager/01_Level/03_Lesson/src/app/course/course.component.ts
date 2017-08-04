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
      "id": "02",
      "title": "Building your first Component and Module",
       "isCompleted":"true",
          "link":""
    },
      {
      "id": "03",
      "title": "Component & DataBinding",
       "isCompleted":"true",
          "link":""
    },
       {
      "id": "04",
      "title": "Structural Directives",
       "isCompleted":"true",
          "link":""
    },
       {
      "id": "05",
      "title": "Create a Custom Component",
       "isCompleted":"true",
          "link":""
    },
       {
      "id": "06",
      "title": "Services",
       "isCompleted":"true",
          "link":""
    },
       {
      "id": "07",
      "title": "Routing",
       "isCompleted":"true",
          "link":""
    },
     {
      "id": "05",
      "title": "Http",
       "isCompleted":"true",
          "link":""
    },
    
  ];

  constructor() { }


  ngOnInit() {
  }

}

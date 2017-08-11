import { Component, OnInit } from '@angular/core';

import { ILesson } from './lesson';

@Component({
  selector: 'am-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'Angular JS 4';

  lvlOne_Lessons: ILesson[] = [
    {
      'id': '01',
      'title': 'Running an AngularJS 2 Application',
      'isCompleted': true,
      'link': 'https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/01_Lesson'
    },
    {
      'id': '02',
      'title': 'Building your first Component and Module',
      'isCompleted': true,
      'link': 'https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/02_Lesson'
    },
    {
      'id': '03',
      'title': 'Component & DataBinding',
      'isCompleted': false,
      'link': 'https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/03_Lesson'
    },
    {
      'id': '04',
      'title': 'Structural Directives',
      'isCompleted': false,
      'link': 'https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/04_Lesson'
    },
    {
      'id': '05',
      'title': 'Services',
      'isCompleted': false,
      'link': 'https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/05_Lesson'
    },
    {
      'id': '06',
      'title': 'Routing',
      'isCompleted': false,
      'link': 'https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/06_Lesson'
    },
    {
      'id': '07',
      'title': 'Http',
      'isCompleted': false,
      'link': 'https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/07_Lesson'
    },

  ];

  constructor() { }


  ngOnInit() {
  }

}

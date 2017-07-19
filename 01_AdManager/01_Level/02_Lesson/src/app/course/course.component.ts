import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
title = 'Angular JS 4';

  constructor() { }

  ngOnInit() {
  }

}

# Lesson 03 -- Component & DataBinding

## Lesson Contents

1. Types of Databinding
    * Interpolation
    * Property Binding
    * Two way Binding
    * Event Binding
1. Re-factor Code

> Tip: To grasp the concepts properly, It is **strongly** recommended that you type out all the code instead of copy + pasting it. 

### 1. Types of Databinding

* Component to DOM
  * Interpolation
  * Property Binding
  * Two way Binding
* DOM to Component
  * Event Binding


#### Interpolation

``` typescript
    {{pageTitle}}
```

#### Property Binding

``` html
    <div [style.backcolor]="backcolor">{{pageTitle}}</div>
```

#### Two way Binding

import FormsModule in `app.modules.ts`

``` html
     <input [(ngModel)]="publication" placeholder="Publication Name"/>
```

#### Event Binding

``` html

            <tr (click)="onRowClick()">
```

``` typescript

    onRowClick(){
        console.log("Row clicked");
    }
 ```

## DEMO

Follow the instructions below as your instructor explains during the presentation. 

> Note this course is structured in collaboration with a trainer. Without a trainer you might loose some details which were not mentioned in the instructions below. 

### **Demo 1** - TypeScript,Template('',``) & Styles

* TypeScript

* Template ('',``)
* Styles

### **Demo 2** - interpolation, Property Binding,  Two way Binding.

* Interpolation - {{}}
* Property Binding - []
* Event binding = ()
* Two way data binding - [()]


### **Demo 3** - Moving Lesson Contents into typescript file

* Create a JSON object named lesson1 in `course.component.ts`

``` JSON

 lesson1 = {
      "id": "01",
      "title": "Running an AngularJS 2 Application",
      "isCompleted":"true",
      "link":""
    };

```

[:memo: code](https://gist.github.com/costaivo/d4bf4a2497064de1b5aea5c313eff974#file-json-lesson-object)

* Bind the content using interpolation on the view file
{{lesson1.id}} {{lesson1.title}}

* Instead of using seperate objects for each lesson. Lets convert it into an array

``` JSON

level1 :any[]=[{
      "id": "01",
      "title": "Running an AngularJS 2 Application",
      "isCompleted":"true",
      "link":""
    }]

```

[:memo: code](https://gist.github.com/costaivo/d4bf4a2497064de1b5aea5c313eff974#file-json-lesson-array)

* Replace the html code to list the topics from the array

 ``` HTML
 <a target="_blank" href="">Lesson {{lvlOne_Lessons[0].ID}} -- {{lvlOne_Lessons[0].title}}</a>
 ```
 
 [:memo: code](https://gist.github.com/costaivo/d4bf4a2497064de1b5aea5c313eff974#file-html-course-component-html)

* Create an interface lesson to define the lesson schema
``` typescript

export interface ILesson {
    id: string;
    title: string;
    isCompleted: boolean;
    link: string;
}

```

### Summary


* Significance of ` [backticks]
* Types of Databinding
* Code Re-Sturucting using templareUrl,styleUrls


[:arrow_left: Previous](<https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/02_Lesson>)&nbsp;&nbsp;
[:1234: Index](<https://github.com/costaivo/AdManagerUI-AngularJs/tree/master>)&nbsp;&nbsp;
[:arrow_right: Next](<https://github.com/costaivo/AdManagerUI-AngularJs/tree/master/01_AdManager/01_Level/04_Lesson>)




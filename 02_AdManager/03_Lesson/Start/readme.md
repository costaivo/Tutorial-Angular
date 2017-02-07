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

``` typescript
    <div [style.backcolor]="backcolor">{{pageTitle}}</div>
```

#### Two way Binding

import FormsModule in `app.modules.ts` file
``` typescript
     <input [(ngModel)]="publication" placeholder="Publication Name"/>
```

## **DEMO **

Follow the instructions below as your instructor explains during the presentation. 

> Note this course is structured in collaboration with a trainer. Without a trainer you might loose some details which were not mentioned in the instructions below. 

### **Demo 1** - TypeScript,interpolation,Template('',``) & Styles

### **Demo 2** - Property Binding,Two way Binding.

### **Demo 3** - Binding Publication data to a grid

* Copy the Publications json array from api/Publications/publication.json file
* Add publication property in the app.component.ts
* Bind the Name,Type and Language columns to the grid

### **Demo 4** - Refactoring Data

* use _templareUrl_
* use _styleUrls_


### Summary


* Significance of ` [backticks]
* Types of Databinding
* Code Re-Sturucting using templareUrl,styleUrls




[:arrow_left: Previous](https://github.com/costaivo/AngularJs2-AdManager/tree/Dev/02_AdManager/02_Lesson/Start)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    
[:1234: Index] (<https://github.com/costaivo/AdManagerUI-AngularJs2/tree/Dev>) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 [:arrow_right: Next] (https://github.com/costaivo/AngularJs2-AdManager/tree/Dev/02_AdManager/04_Lesson/Start)




# Lesson 03 -- Component & DataBinding
----------
## Lesson Contents
1. What is a component?
2. Types of Databinding
    * Interpolation
    * Property Binding
    * Two way Binding
    * Event Binding
3. Re-factor Code

> Tip: To grasp the concepts properly, It is **strongly** recommended that you type out all the code instead of copy + pasting it. 

### 1. What is a component ?

> Component = Template + Class + Metadata
>
**Template**
- View - HTML Markup
>
**Class**
- Methods
- Properties
- Code to interact with the view
>
**Metadata**
- instructs angular how to construct and use this component
- defined with a decorator

### 2. Types of Databinding
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

#### Todo: Binding Publication data to a grid
Copy the Publications json array from api/Publications/publication.json file


### 3. Re-factor Code
 * use templareUrl
 * use styleUrls



[:arrow_left: Previous](https://github.com/costaivo/AngularJs2-AdManager/tree/Dev/02_AdManager/02_Lesson/Start)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                     [:arrow_right: Next] (https://github.com/costaivo/AngularJs2-AdManager/tree/Dev/02_AdManager/04_Lesson/Start)




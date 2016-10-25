# Instructions for Lesson 03

## Main Points to be explained

### Explain about the Component contents

### Re-visit the application code an explain about the project w.r.t Component contents

### Explain about Different DataBinding Concepts with a diagram

![Component](https://snag.gy/mfVROY.jpg "Component Structure")

### **Start Demo 1** - TypeScript,interpolation,Template('',``) & Styles
* TypeScript Intro
* Create property in the application named as title
* Create html script using interpolation to display the title
```html
    '<div><h1>{{pageTitle}}</h1></div>'
   pageTitle:string = "Digital Ads : Ad Manager";
```

* Explain about type check in TypeScript
* Add CSS so that the head title color is changed to blue

``` html
 styles:['h1{color:blue}']
```

* Explain about ES6 feature of using multiline code using backticks
* Replace the styles code with multiline code

``` html
     styles:[`
     h1 {
        color: #369;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;
        }
      hr {
        display: block;
            height: 1px;
            border: 0;
            border-top: 2px solid #ccc;
            margin: 1em 0;
            padding: 0; 
        }
        p{
            color:#369
        }      
```

### **Start Demo 2** - Property Binding,Two way Binding.
* Explain about Property Binding
``` TypeScript
 fontColor="red";
 publication:string="Herald";

 <span [style.color]="fontColor">{{publication}}</span>
```

* Start binding to a input field and demonstrate one way binding.

``` html
 <br/>
 <input [value]="publication" placeholder="Publication Name"/> 
 ```
 * Explain the advantage of tested binding to html elements using property binding
 * Import FormsModule in `app.modules.ts` file
 
 ``` TypeScript
 //required for two-way binding
import {FormsModule} from '@angular/forms';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule 
        ],....
 ```

 ``` TypeScript
    <input [(ngModel)]="publication" placeholder="Publication Name"/>
 ```

### **Start Demo 3** - Binding Publication data to a grid
* Copy the Publications json array from api/Publications/publication.json file
* Add publication property in the app.component.ts

> app.component.ts
``` TypeScript
export class AppComponent{
    pageTitle:string = "Digital Ads : Ad Manager";
    
    fontColor="red";
    publication={
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
        "IsActiveRecord": true,
        "Name": "Herald",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.059
    };
```
``` html

```
### **Start Demo 4** - Refactoring Data
* use templareUrl
* use styleUrls
* create file app.component.html
* create file app.component.CSS
* link files in the component decorator 

 [ :house: Lesson 3](https://github.com/costaivo/AngularJs2-AdManager/tree/Dev/02_AdManager/03_Lesson/Start) 
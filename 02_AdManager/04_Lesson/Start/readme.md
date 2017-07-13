# Lesson 04 -- Structural Directives
----------
## Lesson Contents
1. Structural Directives
2. Types of Directives

> Tip: To grasp the concepts properly, It is **strongly** recommended that you type out all the code instead of copy + pasting it. 

### Structural Directives

A _structural directive_ changes the appearance or bheaviour of an element. A structural directive changes the DOM layout by adding and removing DOM elements. 

http://blog.angular-university.io/angular-2-ngfor/

### Directives

#### ngIf

``` html
	<table *ngIf="publications!=null">
    ...
    </table>
```
[Ref](https://angular.io/docs/ts/latest/api/common/index/NgIf-directive.html)

#### ngFor

``` html
<tbody>
			<tr *ngFor="let publication of publications">
				<td> {{publication.Name}}</td>
				<td> {{publication.TypexCD}}</td>
				<td> {{publication.LanguagexCD}}</td>
			</tr>
		</tbody>
```

[Ref](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html)

#### ngSwitch

``` html
<div class="container" [ngSwitch]="Status">
  <div *ngSwitchCase="'Inactive'">Is Inactive</div>
  <div *ngSwitchCase="Active">Is Active</div>
  <div *ngSwitchDefault>Invalid State</div>
</div>
```
[Ref](https://angular.io/docs/ts/latest/api/common/index/NgSwitch-directive.html)

#### ngStyle

using ngStyle we can easily style multiple properties of an element. 
``` html
<div [ngStyle]="{'color': 'blue', 'font-size': '24px', 'font-weight': 'bold'}">
  style using ngStyle
</div>
```
[Ref](https://angular.io/docs/js/latest/api/common/index/NgStyle-directive.html)

#### ngClass

``` html
<div [ngClass]="['bold-text', 'green']">array of classes</div>
<div [ngClass]="'italic-text blue'">string of classes</div>
<div [ngClass]="{'small-text': true, 'red': true}">object of classes</div>
```
[Ref](https://angular.io/docs/ts/latest/api/common/index/NgClass-directive.html)

## **DEMO** 
Follow the instructions below as your instructor explains during the presentation. 

> Note this course is structured in collaboration with a trainer. Without a trainer you might loose some details which were not mentioned in the instructions below. 

### **Start Demo 1** - ngFor

* Using *ngFor demonstrate the use of binding a list of data
* explain let i=index; let isEven=even;let isOdd=odd;trackBy publication?.id 

### **Start Demo 2** - ngIf

* Using *ngIf demonstrate the use of hide/show data based on conditions

### **Start Demo 3** - ngClass

* Using ngClass demonstrate the use of condional styling

### **Start Demo 4** - selecting a row

* Using event binding show the details of the selected row


## Summary

* ngIf,NgFor,NgSwitch
* ngClass,NgStyle




[:arrow_left: Previous](https://github.com/costaivo/AngularJs2-AdManager/tree/Dev/02_AdManager/03_Lesson/Start)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                     [:arrow_right: Next] (https://github.com/costaivo/AngularJs2-AdManager/tree/Dev/02_AdManager/05_Lesson/Start)




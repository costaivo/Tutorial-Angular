3. Structural Directive ngSwitch
	``` typescript
		    <td [ngSwitch]='publication.IsActiveRecord'>
                 <img *ngSwitchWhen="true" src="./app/assets/images/Active.png" [style.width.px]='imageWidth' [style.margin.px]='imageMargin'>
                 <img *ngSwitchWhen="false" src="./app/assets/images/Inactive.png" [style.width.px]='imageWidth' [style.margin.px]='imageMargin'>
            <td>
	```
	
---Lesson 05---
Add a New Column to the IPublication class
Ratings:number

Add the value for Ratings property in the `publication-list.component.ts`	

Modify the html file to show the Ratings column in grid. 

	
Creating Nested Components
1. Create a new folder called Shared
2. add the following files in the shared folder 
- star.component.ts
- star.component.html
- star.component.css
3. Add the below code in the `star.component.ts` file. 
``` typeScript
    import {Component,OnChanges} from 'angular2/Core';

    @Component({
        selector:'ct-star',
        templateUrl:'app/shared/star.component.html',
        styleUrls: ['app/shared/star.component.html']
    })


    export class StarComponent implements OnChanges{
        rating: number=4;
        startWidth:number;

        ngOnChanges():void{
            this.startWidth=this.rating *86/5;
        }
    }
```
4. Add the below code in the `star.component.html` file

``` html
    <div class="crop" 
    [style.width.px]="starWidth" 
    [title]='rating'
    (click)='onClick()'>
    <div style="width: 86px">
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
    </div>
</div>
```
5. Add the below code in the `star.component.css` file
``` css
.crop {
    overflow: hidden;
}

div {
    cursor: pointer;
}
``` 

6. Nesting the Component
    1. Import the StarComponent in the `publication-list.component.ts` file
    2. Add the directives property to the component in `publication-list.component.ts`
    3. use the <ct-star> in the html file

7. Run the application and see the stars dispalyed instead of rating numbers


###Passing Data to a Nested Component using Input properties
1. expose the property with @Input decorator
    `@Input() rating: number;`
2. Modify the html to pass the parameter 
    `<ct-star [rating]='publication.Ratings'>loading..</ct-star>`


###Passing Data from a Nested Component to the Parent Component using Output properties
1. decorate any property with @Output decorator to send the data back. 

``` typescript
     @Output() ratingClicked : EventEmitter<string>= 
        new EventEmitter<string>();

        onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked! `);
    }
```
2. Modify the star html file to add the click event 
`<div class="crop" 
    [style.width.px]="starWidth" 
    [title]='rating'
`
3. Modify the html in the publication list component
`<ct-star [rating]='publication.Ratings'
                         (ratingClicked)='onRatingClicked($event)'></ct-star>`

4. Modify the publiction list ts file
`onRatingClicked(message:string):void{
    this.pageTitle = 'Product List:'+message;
}`
                         
---Lesson 05---
---Lesson 06---
Explain Dependency Injection with example
Creating Service and using in angular 2
1. Create a service
2. Define metadata with a decorator -@Injectable
3. Import the required functions

Using the Service

1. Register it in app.component.ts as providers
2. using the provider property to register the service


----HTTP----
Observables & Reactive extensions
Sending an http request
1. add the script tag to the index.html file
2. register in app.component.ts
3. Modify the service to call the http get
4. subscribe to an observable

----Routing----
1. Configure routes
2. Tying Routes to actions
3. Placing the Views
4. Passing Parameters to Route
5. Activateing a Route with Code

Set up 
1. Include the angular router script in index.html file
2. in the Head section add <base href="/">
3. Register the routing provides in app.component

4. Add publication-detail.component.ts and its related files


Passing Parameters using routing
1. add 


---FORMS---

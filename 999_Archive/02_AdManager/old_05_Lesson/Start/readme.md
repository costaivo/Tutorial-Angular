# Lesson 05 -- Ad Manager : 
----------
### Lesson Contents
1.  Component Lifecycle Hooks
2.  Building Custom Pipes
3.  Using a Custom Pipe

> Tip: To grasp the concepts properly, It is  **`strongly`**  recommended that you **type** out all the code instead of **copy + pasting** it. 

-------------------------------

##### Overview of the application we are building in this lesson
- App Component  **[Done]**
- Publication List Component **[In Progress]**


### Course Starts 
Follow the instructions below as your instructor explains during the presentaion. 

> Note this course is structured in collobration with a trainer. Without a trainer you might loose some details which were not mentioned in the instructions below. 


##Creating Nested Components

1. Create a new folder called shared under app folder. 
2. add the following files in the shared folder 

    - active.component.ts
    - active.component.html
    - active.component.css

3. Add the below code in the `active.component.ts` file. 
``` typeScript
    import {Component,OnChanges} from 'angular2/Core';

    @Component({
        selector:'ct-active',
        templateUrl:'app/shared/active.component.html',
        styleUrls: ['app/shared/active.component.html']
    })


    export class ActiveComponent implements OnChanges{

        ngOnChanges():void{
           console.log('active component changed');
        }
    }
```
4. Add the below code in the `active.component.html` file

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
5. Add the below code in the `active.component.css` file
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

-------------------------------
#####END of Lesson 05

-------------------------------

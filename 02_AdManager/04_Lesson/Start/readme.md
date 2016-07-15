# Lesson 04 -- Ad Manager : Creating Custom Pipes and Understanding Component LifeCycle hooks
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


###Component Lifecycle Hooks
- Create
- Render
- Create and render children
- Process changes
- Destroy

https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#hooks-overview

### Integrating Lifecycle hooks with PublicationListComponent

**Step 1:** Use import statement to import the OnInit 
`import {Component,OnInit} from 'angular2/core'`

**Step 2:** add the `implements OnInit` to the PublicationListComponent Class

``` typescript
        export class PublicationListComponent implements OnInit
        {

        }
```

**Step 3:** Implement the method implementation for OnInit
``` typescript
        ngOnInit():void{
                console.log('In OnInit');
        }
```
###Building Custom Pipes

**Step 1:** 
- Add a new file `publication-filter.pipe.ts`
- Import the Pipe and PipeTransform directive
- Import the IPublication interface 

``` typescript
        import {PipeTransform,Pipe} from 'angular2/core';
        import {IPublication} from './publication';
```

**Step 2:** 
- Declare the @Pipe directive and specify the pipe name in the `name` selector

``` typescript
        @Pipe({
        name:"publicationFilter" 
        })
```

**Step 3:** 
- Create a class and implement PipeTransform interface

``` typescript
 transform(value:IPublication[],args:string[]):IPublication[]{
         console.log('In PublicationFilterPipe');
        return value;
    }
```

###Using a Custom Pipe

**Step 1:** 
- import the pipe in the component `publication-list.component.ts` file
``` typescript
        import {PublicationFilterPipe} from './publication-filter.pipe'
```

**Step 2**
- define the pipe in the pipes directive under the @Component directive
``` typescript
        @Component({
                ...
        pipes:[PublicationFilterPipe]
        })
```

**Step 3:**
- Use the pipe in the template.
``` html
   <tbody *ngFor='#publication of publications | publicationFilter:showOnlyActiveRecords '>
```

Run the application now and use the developer tools to check the messages in the console window. 
You will see the log messages specified in OnInit method and PublicationFilterPipe


### Optimizing the code we have written so far.
After learning about the new feature about building custom Pipers we no longer require the code we had used earlier to hide/show the Inactive records.
Refactor the code in the `publication-list.component.html` file, remove the extra block used to show/hide the Active/InActiveRecords.
The final code in the <tbody> should be as shown below 
``` html
   <tbody *ngFor='#publication of publications | publicationFilter:showOnlyActiveRecords '>
        <tr>
                <td>{{publication.Name | uppercase }}</td>
                <td>{{publication.TypexCD}}</td>
                <td>{{publication.LanguagexCD}}</td>
                <td>{{publication.CommissionRateForAdvertisments | percent :'2.2-2' }}</td>
                <td>{{publication.CommisionRateForClassifieds | percent :'2.2-2'}}</td>
                <td *ngIf='publication.IsActiveRecord'>
                        <img src="./app/assets/images/Active.png" 
                                [title]='publication.IsActiveRecord'
                                [style.width.px]='imageWidth'
                                [style.margin.px]='imageMargin'> 
                </td>
                <td *ngIf='!publication.IsActiveRecord'>
                        <img src="./app/assets/images/Inactive.png"
                                [title]='publication.IsActiveRecord'
                                [style.width.px]='imageWidth'
                                [style.margin.px]='imageMargin'>
                </td>
        </tr> 
   </tbody>
           
```

Write the logic in the transform method in `publication-filter.pipe.ts` file
``` typescript
      transform(value:IPublication[],args:string[]):IPublication[]{
         console.log('In PublicationFilterPipe');
         let filteredData : string = args[0]? args[0]:null;
         console.log('In PublicationFilterPipe '+filteredData);
         
        return filteredData ? value.filter((publication:IPublication)=>
        publication.IsActiveRecord== (<any>filteredData)):value;
    }
```

### Challenge: 
Find and fix the bug in the application developed so far. 


### **HomeWork:** 
Use Custom Pipes  for the following modules appropriately. 

| Module        | Json          | 
| ------------- |:-------------:| 
| Clients	    | clients.json  | 
| AdvertismentReleaseOrders     | << TODO >>   |  
| AdvertismentRates | << TODO >>     |    


-------------------------------
#####END of Lesson 04

-------------------------------
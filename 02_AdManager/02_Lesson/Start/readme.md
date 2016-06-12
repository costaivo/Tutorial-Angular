# Lesson 02 -- Ad Manager Getting Started : Using a Component as Directive
----------
### Lesson Contents
1.  Templates
2.  Interpolation 
3.  Directives
4.  Data Binding & Pipes

> Tip: To grasp the concepts properly, It is  **`strongly`**  recommended that you **type** out all the code instead of **copy + pasting** it. 


-------------------------------
-------------------------------
##### Overview of the application we are building in this lesson
- App Component  [Done]
- Publication List Component [Current Lesson]
-------------------------------
-------------------------------
##### What is a component ?

> Component = Template + Class + Metadata

**Template**
- View 

**Class**
- Methods
- Properties
- Code to interact with the view

**Metadata**
- instructs angular how to construct and use this component
- defined with a decorator

-------------------------------

### Course Starts 
Follow the instructions below to learn how to use a Component as Directive

1. Add new folder Publications
2. Add new component for publication module
    * publilcation-list.component.ts
    *   publicatioin-list.component.html
    *   publicatioin-list.component.css

3. Copy the html template below in the publicatioin-list.component.html file. 

``` html
<div class="panel panel-primary">
    <div class="panel-heading">
        {{pageTitle}}
    </div>
    <div class='panel-body'>
         <div class='row'>
            
        </div>
        <div class='table-responsive'>
            <table class='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Language</th>
                        <th>% Advertisments</th>
                        <th>% Classifieds</th>
                        <th>Active</th>
                     </tr>
                </thead>
                <tbody>
                   <tr>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Language</td>
                        <td>% Advertisments</td>
                        <td>% Classifieds</td>
                        <td>Active</td>
                     </tr>
                     
                </tbody>

            </table>
        </div>
    </div>
</div>
```

4. Add the below code in the `publilcation-list.component.ts` file
``` typescript
    import {Component} from 'angular2/core'
    
    @Component({
        selector:'am-publicationList',
        templateUrl:'app/publications/publication-list.component.html'
    })

    export class PublicationListComponent
    {
       
    }

```
5.  Using a Component as a Directive,to use a component as a directive you have to follow three steps
    * _#Step 1 :_ import the component `PublicationListComponent` in the `app.component.ts`  file
     * _#Step 2 :_ use the `am-publicationList` selector in the template view.
     * _#Step 3 :_ add the `PublicationListComponent` component to the directives array
    * the final code in `app.component.ts` file should look like as shown  below. 
   
``` typescript
    import  {Component} from 'angular2/core';
    import {PublicationListComponent} from './publications/publication-list.component';

    @Component({
        selector:'am-app',
        template:`<div >
          <h1> {{pageTitle}} : Advertisment Manager</h1>
          <am-publicationList></am-publicationList>
           </div>`,
           directives:[PublicationListComponent]
    })
    export class AppComponent{
        pageTitle:string = 'Digital Ads';
        
    }
```




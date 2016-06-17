# Lesson 02 -- Ad Manager Getting Started : Using a Component as Directive
----------
### Lesson Contents
1.  Using Templates Url
2.  Using StyleUrl
3.  Data Binding :Interpolation & Property Bindings
4.  Using a Component as a Directive

> Tip: To grasp the concepts properly, It is  **`strongly`**  recommended that you **type** out all the code instead of **copy + pasting** it. 

-------------------------------

##### Overview of the application we are building in this lesson
- App Component  [Done]
- Publication List Component [Current Lesson]

##### What is a component ?

> Component = Template + Class + Metadata
>
**Template**
- View 
>
**Class**
- Methods
- Properties
- Code to interact with the view
>
**Metadata**
- instructs angular how to construct and use this component
- defined with a decorator

-------------------------------

### Course Starts 
Follow the instructions below as your instructor explains during the presentaion. 

> Note this course is structured in collobration with a trainer. Without a trainer you might loose some details which were not mentioned in the instructions below. 

1. Add new folder Publications
2. Add new component for publication module
    * publilcation-list.component.ts
    * publicatioin-list.component.html
    * publicatioin-list.component.css

3. Copy the html template below in the publicatioin-list.component.html file. 
	``` html
	<div class="panel panel-primary">
	    <div class="panel-heading">
	        Publications
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
3. Copy the CSS template below in the publicatioin-list.component.html file. 
	``` css
		thead{
    			background-color: #337ab7;
     			color:#f5f5f5;
			}
	```

4. Add the below code in the `publilcation-list.component.ts` file
	```  typescript
		import {Component} from 'angular2/core'
		
		@Component({
			selector:'am-publicationList',
			templateUrl:'app/publications/publication-list.component.html',
			styleUrls:['app/publications/publication-list.component.css']
		})

		export class PublicationListComponent
		{
		
		}
	```
	The styleUrls property can be used to link the stylesheets with the view. 

5. Using a Component as a Directive,to use a component as a directive you have to follow three steps
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
			directives:[PublicationListComponent],
		})
		export class AppComponent{
			pageTitle:string = 'Digital Ads';
			
		}
	```
    
    
### DataBinding
* Interpolation : One way binding 
> Examlpe: `{{publication.Name}}`
* Property Binding : 
> Example : `<img [title]='publication.IsActiveRecord'>`

Add the property `pageTitle:string="Publications";` in `publication-list.component.ts` file

In the `publication-list.component.html` file replace the "Publications" with {{pageTitle}}
``` html 
	<div class="panel panel-primary">
    	<div class="panel-heading">
        	{{pageTitle}}
    	</div>
	</div>
```

### Structural Directives
	* *ngIf
	* *ngFor

 
Add the property `publications:any[];` in `publication-list.component.ts` file

Add the following code to load the table in the view only if the publications list is not null and there exists
some records. 
``` html
<table class='table table-hover table-striped' *ngIf='publications && publications.length'>
```

Copy the sample publications list provided in file api/publications/publications.json  in the `publication-list.component.ts` file assign it to publications array. 


Next Modify the code in `publication-list.component.html` tbody section as shown below. 

``` html
		<tbody>
		<tr *ngFor='#publication of publications' >
			<td>{{publication.Name}}</td>
			<td>{{publication.TypexCD}}</td>
			<td>{{publication.LanguagexCD}}</td>
			<td>{{publication.CommissionRateForAdvertisments}}</td>
			<td>{{publication.CommisionRateForClassifieds}}</td>
			<td>{{publication.IsActiveRecord}}</td>
		</tr>
		</tbody>
	```

8. Run the application, to view the records listed in the grid. 

### Challenge: 
Using the knowledge you have gained so far. Add logic to dispaly a image in the Active (last column) instead of true/false  
	* \app\assets\images\Inactive.png  -- InActive Record
	* \app\assets\images\Active.png  -- InActive Record

### HomeWork: 
Complete the Grid loading for the following modules

| Module        | Json          | 
| ------------- |:-------------:| 
| Clients	    | clients.json  | 
| AdvertismentReleaseOrders     | << TODO >>   |  
| AdvertismentRates | << TODO >>     |    





####END of Lesson 02 

-------------------------------



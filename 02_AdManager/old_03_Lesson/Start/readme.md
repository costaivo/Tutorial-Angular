# Lesson 03 -- Ad Manager : Using pipes and Events
----------
### Lesson Contents
1.  Transforming data with pipes
2.  Defining and Using Interfaces
3.  Handling Events with Event Bindings


> Tip: To grasp the concepts properly, It is  **`strongly`**  recommended that you **type** out all the code instead of **copy + pasting** it. 

-------------------------------

##### Overview of the application we are building in this lesson
- App Component  **[Done]**
- Publication List Component **[In Progress]**


### Course Starts 
Follow the instructions below as your instructor explains during the presentaion. 

> Note this course is structured in collobration with a trainer. Without a trainer you might loose some details which were not mentioned in the instructions below. 

## Pipes
Pipes allow transforming data before they are dispalyed to the end user. A pipe takes in data as input and transforms it to a desired output. 

- {{publication.Name | uppercase}}  apply uppercase formatting to publication name
- {{Advertisment.Rate | currency:'INR':true: '1.2-2' }} 	Chained pipes
- {{publication.CommisionRateForClassifieds | percent :'2.2-2'}}

**Further Reading:**
-  [Angularjs Pipes](https://angular.io/docs/ts/latest/guide/pipes.html)

## Using Interfaces
Accessing data objects with interfaces and its advantages.  

1. Add a new file Publication.ts
2. Type the code below in the Publication.ts file
``` typescript
	export interface IPublication{
		ID:string ,
        IsActiveRecord:Boolean ,
        Name:string,
        TypexCD:string,
        LanguagexCD: string,
        CommissionRateForAdvertisments:number ,
        CommisionRateForClassifieds:number 
}
```
3. import the publication in publication-list.component.ts file
4. Replace the any with IPublication
5. If you make any typo mistake in the declartion of publication, you will now get an error.


## Handling Events with Event Bindings

1. Add a button above the grid to hide/show Inactive records

	``` html
	<button class='btn btn-primary' (click)='showHideInactiveRecords()'>
					Show all  Records
	</button>
    ```  
2. Add the logic in the typescript file to handle the click event
	``` typescript
	
	//Variable to keep track of activeRecords visibility
	showOnlyActiveRecords:boolean=false;

	showHideInactiveRecords():void{
    	this.showOnlyActiveRecords = !this.showOnlyActiveRecords;
	}	 
	```       

### Challenge: 
Using the knowledge you have gained so far. Add logic to hide/unhide the records based on IsActiveStatus in the `publication-list.component.html`



### **HomeWork:** 
Use Pipes and Event bidings  for the following modules appropriately. 

| Module        | Json          | 
| ------------- |:-------------:| 
| Clients	    | clients.json  | 
| AdvertismentReleaseOrders     | << TODO >>   |  
| AdvertismentRates | << TODO >>     |    


-------------------------------
#####END of Lesson 03

-------------------------------


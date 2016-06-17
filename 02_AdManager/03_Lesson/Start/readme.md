# Lesson 03 -- Ad Manager : Using pipes and Events
----------
### Lesson Contents
1.  Transforming data with pipes
2.  Handling Events with Event Bindings
3.  

> Tip: To grasp the concepts properly, It is  **`strongly`**  recommended that you **type** out all the code instead of **copy + pasting** it. 

-------------------------------

##### Overview of the application we are building in this lesson
- App Component  **[Done]**
- Publication List Component **[In Progress]**


### Course Starts 
Follow the instructions below as your instructor explains during the presentaion. 

> Note this course is structured in collobration with a trainer. Without a trainer you might loose some details which were not mentioned in the instructions below. 

##Pipes
Pipes allow transforming data before they are dispalyed to the end user. A pipe takes in data as input and transforms it to a desired output. 

	* {{publication.Name | uppercase}}  apply uppercase formatting to publication name
	* {{Advertisment.Rate | currency:'INR':true: '1.2-2' }} 	Chained pipes
	* {{publication.CommisionRateForClassifieds | percent :'2.2-2'}}



**Further Reading:**
	* [Angularjs Pipes](https://angular.io/docs/ts/latest/guide/pipes.html)

### **Challenge:** 
Using the knowledge you have gained so far. Add logic to dispaly a image in the Active (last column) instead of true/false  
	* \app\assets\images\Inactive.png  -- InActive Record
	* \app\assets\images\Active.png  -- InActive Record

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


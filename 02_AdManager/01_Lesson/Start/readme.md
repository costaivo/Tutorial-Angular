# Lesson 01 -- Ad Manager Getting Started : Building your first Component
----------
#### Lesson Contents
1.  Adding the root component
2.  Bootstrapping the application
3.  Call the `am-app` selector in `index.html` file
4.  Running the application

> Tip: To grasp the concepts properly, It is **strongly** recommended that you type out all the code instead of copy + pasting it. 


#### 1.  Adding the root component
 * Add `app.component.ts` file in the app folder
``` typescript
            //import component from angular core
            import {Component} from 'angular2/core';
            
            //define the component 
            @Component({
                selector:'my-app',
                template:`<div ><h1> {{pageTitle}} : Ad Manager</h1>
                </div>`
            })
            
            //create class for the component
            export class AppComponent{
                pageTitle:string = "Digital Ads ";
            }
```
----------
##### Explanations 

**Import**

`import {Component} from 'angular2/core';`
> when we need something from a module or library, it has to be imported using the import statement
> In the current example we have imported the **Angular 2 core** so that our component code can have access to the @Component  decorator. 

**@Component**
``` typescript
 @Component({
      selector:'my-app',
      template:`<div >
      <h1> {{pageTitle}} : Ad Manager</h1>
       </div>`
     })
```  
> Component is a decorator function that takes metadata object as argument. The main objective of it is to add meta-data to the application that will tell **Angular 2** how to process a class. 

> **selector :** defines the name of the HTML tag. whenever Angular encouters a `my-app` it will create and display an instance of AppComponent.

> **template :** this part defines the html template. It tells Angular how to render the component view. 

**Component Class**
``` typescript
            export class AppComponent{
                pageTitle:string = "Digital Ads ";
            }
```

#### 2. Bootstrapping the application
* Add `main.ts` file
```typescript
        // import bootstrap 
        import {bootstrap} from 'angular2/platform/browser';
        
        // import our component
        import {AppComponent} from './app.component';
        
        //bootstrap the component
        bootstrap(AppComponent);
```
#### 3. Call the `am-app` selector in `index.html` file
* Call the `am-app` selector in html page
```html
<body>
    <!--TODO: Add your component here-->
    <am-app>Loading...</am-app>
</body>
```
### 4. Running the application
Open a command prompt in the project's root directory 
* Type: `npm install` This installs the dependencies as defined in the package.json file.

* Type: `npm start` This launches the TypeScript compiler (tsc) to compile the application and wait for changes. It also starts the lite-server and launches the browser to run the application.

import  {Component} from 'angular2/core';

@Component({
    selector:'am-app',
    template:`<div >
      <h1> {{pageTitle}} : Advertisment Manager</h1>
       </div>`
})
export class AppComponent{
    pageTitle:string = 'Digital Ads';
    
}
import {Component} from '@angular/core';



const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({
    selector:'my-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css']
    

})


/*
    {{}}  -- Interpolation : One-way data binding. 
    template:'' --single quote, back-ticks for multiline. 
*/
export class AppComponent{

   heroes = HEROES;
   selectedHero:Hero;

    title='Tour of Heroes';
  
    onSelect(hero:Hero):void{
        this.selectedHero=hero;
    }
}

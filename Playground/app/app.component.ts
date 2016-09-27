import {Component,OnInit} from '@angular/core';


import {Hero} from './hero';
import {HeroService} from './hero.service';



@Component({
    selector:'my-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css'],
    providers:[HeroService]

})


/*
    {{}}  -- Interpolation : One-way data binding. 
    template:'' --single quote, back-ticks for multiline. 
*/
export class AppComponent implements OnInit{

constructor(private heroservice:HeroService){

}
   
    selectedHero:Hero;
    heroes: Hero [];
    title='Tour of Heroes';
  
    onSelect(hero:Hero):void{
        this.selectedHero=hero;
    }

    ngOnInit():void{
        this.getHeroes();
    }
    getHeroes():void{
        this.heroservice.getHeroesSlowly().then(heroes=> this.heroes = heroes);
    }
}

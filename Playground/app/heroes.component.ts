import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';


import {Hero} from './hero';
import {HeroService} from './hero.service';



@Component({
    moduleId:module.id,
    selector:'my-heroes',
    templateUrl:'./heroes.component.html',
    styleUrls:['./heroes.component.css']
})


/*
    {{}}  -- Interpolation : One-way data binding. 
    template:'' --single quote, back-ticks for multiline. 
*/
export class HeroesComponent implements OnInit{

constructor(private heroservice:HeroService,
private router:Router){

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
    gotoDetail(){
        this.router.navigate(['/detail',this.selectedHero.id]);
    }
}

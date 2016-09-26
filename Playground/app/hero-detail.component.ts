import { Component, Input } from '@angular/core';

import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl:'./app/hero-detail.component.html'
  //template:'Hello BABA'
})
export class HeroDetailComponent {
    @Input()
    hero:Hero;
}

import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'ct-activeRecord',
    templateUrl:'isActive.component.html'
})

export class IsActiveComponent{
    imageWidth:number=16;
    imageMargin:number=2;

    @Input()
    isActiveRecord:boolean;
   
}
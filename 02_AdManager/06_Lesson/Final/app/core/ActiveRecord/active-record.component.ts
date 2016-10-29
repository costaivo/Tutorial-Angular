import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'ct-activeRecord',
    templateUrl:'active-record.component.html'
})

export class ActiveRecordComponent{
    imageWidth:number=16;
    imageMargin:number=2;

    @Input()
    isActiveRecord:boolean;
   
}
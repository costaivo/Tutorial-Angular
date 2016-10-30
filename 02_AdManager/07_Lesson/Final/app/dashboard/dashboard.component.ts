import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'am-dashboard',
    templateUrl: 'dasboard.component.html',
    styleUrls: ['dasboard.component.css']
})
export class DasboardComponent {

    publicationCount: number = 10;
    clientCount: number = 10;
}
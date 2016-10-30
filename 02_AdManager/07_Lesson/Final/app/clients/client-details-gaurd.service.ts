import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router } from '@angular/router';

@Injectable()
export class ClientDetailsGaurd implements CanActivate {

    constructor(private _router:Router){
        
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = route.url[1].path;

        if (id.length === 0) {
            alert('invalid client id');

            // start a new navigation to redirect to list page
            this._router.navigate(['/clients']);

            //canel the current navigation
            return false;
        };
        return true;

        //  let id = +route.url[1].path;
        // if (isNaN(id) || id < 1) {
        //     alert('Invalid product Id');
        //     // start a new navigation to redirect to list page
        //     this._router.navigate(['/clients']);
        //     // abort current navigation
        //     return false;
        // };
        // return true;
    }
}
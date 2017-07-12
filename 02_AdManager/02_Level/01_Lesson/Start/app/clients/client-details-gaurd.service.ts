import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ClientDetailsGaurd implements CanActivate {

    constructor(private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = route.url[1].path;
        console.log('router id : ' + id);
        if (!this.isGuid(id)) {
            alert('invalid client id');

            // start a new navigation to redirect to list page
            this._router.navigate(['/clients']);

            //canel the current navigation
            return false;
        };
        return true;
    }

    private isGuid(stringToTest: string): boolean {
        
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(stringToTest);
    }
}
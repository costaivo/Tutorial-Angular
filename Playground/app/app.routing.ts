import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';

const appRoutes:Routes=[
    {
        //the router matches this route's path to the URL in the browser address bar
        path:'heroes',
        //the compoenent that the router should create when navigating to this route
        component:HeroesComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        path:'detail/:id',
        component:HeroDetailComponent
    }
]

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
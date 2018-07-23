import { NgxMasonryModule } from 'ngx-masonry';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPage } from './pages/landing/landing.page';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HomeRoutingModule,
        NgxMasonryModule
    ],
    declarations: [
        LandingPage
    ]
})
export class HomeModule { }

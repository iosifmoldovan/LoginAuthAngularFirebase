import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { BibleFeedComponent } from './components/bible-feed/bible-feed.component';
import { FacebookFeedComponent } from './components/facebook-feed/facebook-feed.component';
import { VideoFeedComponent } from './components/video-feed/video-feed.component';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPage } from './pages/landing/landing.page';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HomeRoutingModule
    ],
    declarations: [
        LandingPage,
        FacebookFeedComponent,
        VideoFeedComponent,
        BibleFeedComponent
    ]
})
export class HomeModule { }

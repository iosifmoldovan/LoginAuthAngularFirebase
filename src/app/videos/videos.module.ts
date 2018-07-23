import { NgxMasonryModule } from 'ngx-masonry';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { ArchivePage } from './pages/archive/archive.page';
import { VideoDetailsPage } from './pages/video-details/video-details.page';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        VideosRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMasonryModule
    ],
    declarations: [
        ArchivePage,
        VideoDetailsPage
    ]
})
export class VideosModule { }

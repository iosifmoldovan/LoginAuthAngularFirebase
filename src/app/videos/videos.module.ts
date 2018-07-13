import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { ArchivePage } from './pages/archive/archive.page';
import { VideoDetailsPage } from './pages/video-details/video-details.page';
import { VideosService } from './services/videos.service';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        VideosRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ArchivePage,
        VideoDetailsPage
    ],
    providers: [
        VideosService
    ]
})
export class VideosModule { }

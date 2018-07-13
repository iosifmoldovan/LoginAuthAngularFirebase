import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchivePage } from './pages/archive/archive.page';
import { VideoDetailsPage } from './pages/video-details/video-details.page';

const routes: Routes = [
    {
        path: '',
        component: ArchivePage
    },
    {
        path: 'add',
        component: VideoDetailsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideosRoutingModule { }

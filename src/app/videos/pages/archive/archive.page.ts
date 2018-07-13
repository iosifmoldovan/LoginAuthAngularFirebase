import { Component } from '@angular/core';

import { VideosService } from '../../services/videos.service';

@Component({
    selector: 'v-archive-page',
    templateUrl: 'archive.page.html',
    styleUrls: ['archive.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ArchivePage {
    constructor(public videosService: VideosService) { }
}

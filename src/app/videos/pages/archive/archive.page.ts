import { Component } from '@angular/core';

import { VideosFeedService } from '../../../business/services/videos-feed.service';

@Component({
    selector: 'v-archive-page',
    templateUrl: 'archive.page.html',
    styleUrls: ['archive.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ArchivePage {
    constructor(public videosFeedService: VideosFeedService) { }
}

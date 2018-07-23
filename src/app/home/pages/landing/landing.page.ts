import { Component, OnInit } from '@angular/core';

import { combineLatest } from '../../../../../node_modules/rxjs';
import { FacebookFeedService } from '../../../business/services/facebook-feed.service';
import { VideosFeedService } from '../../../business/services/videos-feed.service';
import { FacebookPost } from '../../../models/facebook-post.model';
import { LandingPageCard } from '../../../models/landing-page-card.model';
import { Tag, Video } from '../../../models/video.model';

@Component({
    selector: 'h-landing-page',
    templateUrl: 'landing.page.html',
    styleUrls: ['landing.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class LandingPage implements OnInit {
    cards: Array<LandingPageCard> = [];

    constructor(
        private facebookFeedService: FacebookFeedService,
        private videosFeedService: VideosFeedService) { }

    ngOnInit(): void {
        combineLatest(
            this.facebookFeedService.posts(),
            this.videosFeedService.videos
        ).subscribe((data: any) => {
            const posts: Array<FacebookPost> = data[0];
            const videos: Array<Video> = data[1];

            posts.forEach((post: FacebookPost) => {
                const card: LandingPageCard = {
                    subtitle: post.created_time,
                    image: post.full_picture,
                    content: post.message,
                    link: post.link
                };

                this.cards.push(card);
            });

            videos.forEach((video: Video) => {
                const card: LandingPageCard = {
                    subtitle: video.date,
                    image: video.thumbnailUrl,
                    content: 'test',
                    link: video.videoUrl
                };

                this.cards.push(card);
            });
        });
    }

    openLink(link: string): void {
        // tslint:disable-next-line:no-console
        console.log(link);
    }
}

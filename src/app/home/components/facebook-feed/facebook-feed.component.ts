import { FacebookService, InitParams } from 'ngx-facebook';

import { Component } from '@angular/core';

import { DomSanitizer } from '../../../../../node_modules/@angular/platform-browser';
import { FacebookPost } from '../../models/facebook-post.model';

@Component({
    selector: 'h-facebook-feed',
    templateUrl: 'facebook-feed.component.html',
    styleUrls: ['facebook-feed.component.scss']
})
export class FacebookFeedComponent {
    posts: Array<FacebookPost>;

    constructor(
        private facebookService: FacebookService,
        public domSanitizer: DomSanitizer) {
        const initParams: InitParams = {
            appId: '1865729517056267',
            xfbml: true,
            version: 'v3.0'
        };

        this.facebookService.init(initParams);

        // tslint:disable-next-line:max-line-length
        const token: string = 'EAAag3wEccQsBAGUg8Iy9YI52ZBZCiDR2dQdimzkaT9XZCZBYFGvNfg9eKRigE0mNB69kjd9EuwZCwoXzTKqWJmzPswIJZAKGBNGgRjOg2YUZBsETUuzMDdjN6gK2rRfeZBuo817hd1ZBfg14N1C2ZCWEqRr2dExWhyOXIimnGR4ZAEkFAZDZD';

        // tslint:disable-next-line:max-line-length
        this.facebookService.api('194134437298702/posts?fields=message,created_time,full_picture,type,link', 'get', { access_token: token })
            .then((res: any) => {
                this.posts = res.data;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    openPost(link: string): void {
        window.open(link);
    }
}

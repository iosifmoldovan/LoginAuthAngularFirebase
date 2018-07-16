import { FacebookService, InitParams } from 'ngx-facebook';

import { Component } from '@angular/core';

import { FacebookPost } from '../../models/facebook-post.model';

@Component({
    selector: 'h-facebook-feed',
    templateUrl: 'facebook-feed.component.html',
    styleUrls: ['facebook-feed.component.scss']
})
export class FacebookFeedComponent {
    posts: Array<FacebookPost>;

    constructor(private facebookService: FacebookService) {
        const initParams: InitParams = {
            appId: '1865729517056267',
            xfbml: true,
            version: 'v3.0'
        };

        this.facebookService.init(initParams);

        // tslint:disable-next-line:max-line-length
        const token: string = 'EAAag3wEccQsBAGUg8Iy9YI52ZBZCiDR2dQdimzkaT9XZCZBYFGvNfg9eKRigE0mNB69kjd9EuwZCwoXzTKqWJmzPswIJZAKGBNGgRjOg2YUZBsETUuzMDdjN6gK2rRfeZBuo817hd1ZBfg14N1C2ZCWEqRr2dExWhyOXIimnGR4ZAEkFAZDZD';
        this.facebookService.api('194134437298702?fields=posts{created_time,message,full_picture,type}', 'get', { access_token: token })
            .then((res: any) => {
                this.posts = res.posts.data;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}

import { from, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { FacebookService, InitParams } from '../../../../node_modules/ngx-facebook';
import { FacebookPost } from '../../models/facebook-post.model';

@Injectable()
export class FacebookFeedService {
    constructor(
        private facebookService: FacebookService,
        public domSanitizer: DomSanitizer) {
        const initParams: InitParams = {
            appId: '1865729517056267',
            xfbml: true,
            version: 'v3.0'
        };

        this.facebookService.init(initParams);
    }

    posts(): Observable<FacebookPost> {
        // tslint:disable-next-line:max-line-length
        const token: string = 'EAAag3wEccQsBAGUg8Iy9YI52ZBZCiDR2dQdimzkaT9XZCZBYFGvNfg9eKRigE0mNB69kjd9EuwZCwoXzTKqWJmzPswIJZAKGBNGgRjOg2YUZBsETUuzMDdjN6gK2rRfeZBuo817hd1ZBfg14N1C2ZCWEqRr2dExWhyOXIimnGR4ZAEkFAZDZD';

        // tslint:disable-next-line:max-line-length
        return from(this.facebookService.api('194134437298702/posts?fields=message,created_time,full_picture,type,link', 'get', { access_token: token })
            .then((res: any) => {
                return res.data;
            })
            .catch((e: any) => {
                throw e;
            }));
    }
}

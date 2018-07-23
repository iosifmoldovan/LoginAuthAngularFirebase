import { ModuleWithProviders, NgModule } from '@angular/core';

import { FacebookFeedService } from './services/facebook-feed.service';
import { VideosFeedService } from './services/videos-feed.service';

@NgModule()
export class BusinessModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BusinessModule,
            providers: [
                FacebookFeedService,
                VideosFeedService
            ]
        };
    }
}

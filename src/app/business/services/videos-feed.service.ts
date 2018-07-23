import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { Video } from '../../models/video.model';

@Injectable()
export class VideosFeedService {
    videos: Observable<Array<Video>>;
    private videosCollection: AngularFirestoreCollection<Video>;

    constructor(private afs: AngularFirestore) {
        this.afs.firestore.settings({ timestampsInSnapshots: true });

        this.videosCollection = this.afs.collection<Video>('videos');
        this.videos = this.videosCollection.valueChanges();
    }

    add(video: Video): void {
        this.videosCollection.add(video);
    }
}

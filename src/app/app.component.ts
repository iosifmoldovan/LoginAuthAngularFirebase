import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';

export interface Video { data: Date; predicator: string; program: string; serie: string; tags: string; img: string; }

@Component({
    selector: 'b-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    videos: Observable<Array<Video>>;
    private videosCollection: AngularFirestoreCollection<Video>;

    constructor(private afs: AngularFirestore) {
        this.afs.firestore.settings({ timestampsInSnapshots: true });
    }

    ngOnInit(): void {
        this.videosCollection = this.afs.collection<Video>('videos');
        this.videos = this.videosCollection.valueChanges();
    }
}

import { ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

import { VideosFeedService } from '../../../business/services/videos-feed.service';
import { Tag, Video } from '../../../models/video.model';

@Component({
    selector: 'v-video-details-page',
    templateUrl: 'video-details.page.html',
    styleUrls: ['video-details.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class VideoDetailsPage implements OnInit {
    videoForm: FormGroup;
    tags: Array<Tag> = [];
    separatorKeysCodes: Array<number> = [ENTER];

    constructor(private formBuilder: FormBuilder, private videosFeedService: VideosFeedService) { }

    ngOnInit(): void {
        this.videoForm = this.formBuilder.group({
            date: new FormControl('', Validators.required),
            speaker: new FormControl('', Validators.required),
            tags: new FormControl('', Validators.required),
            thumbnailUrl: new FormControl('', Validators.required),
            videoUrl: new FormControl('', Validators.required)
        });
    }

    addTag(event: MatChipInputEvent): void {
        const input: HTMLInputElement = event.input;
        const value: string = event.value;

        if ((value || '').trim()) {
            this.tags.push({ name: value.trim() });
        }

        if (input) {
            input.value = '';
        }
    }

    removeTag(tag: Tag): void {
        const index: number = this.tags.indexOf(tag);

        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }

    onSubmit(): void {
        if (!this.videoForm.invalid) {
            const video: Video = {
                date: this.videoForm.value.date.getTime(),
                speaker: this.videoForm.value.speaker,
                tags: this.tags,
                thumbnailUrl: 'https://i.vimeocdn.com/video/705862498_640.jpg',
                videoUrl: 'http://player.vimeo.com/video/273941643'
            };

            this.videosFeedService.add(video);
        }
    }
}

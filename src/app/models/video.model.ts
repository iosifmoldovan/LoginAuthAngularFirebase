export class Video {
    date: string;
    speaker: string;
    tags: Array<Tag>;
    thumbnailUrl: string;
    videoUrl: string;
}

export class Tag {
    name: string;
}

export class Video {
    date: number;
    speaker: string;
    tags: Array<Tag>;
    thumbnailUrl: string;
    videoUrl: string;
}

export class Tag {
    name: string;
}

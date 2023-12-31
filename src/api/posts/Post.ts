export interface RawPost {
    id: string;
    authorId: string;
    textContent: string;
    replyToId?: string;
    datePosted: Date;
    dateEdited?: Date;
}

export interface PostEnhancements {
    stats: {
        replies: number;
        likes: number;
    }
}

export type Post = RawPost & PostEnhancements;
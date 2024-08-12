export type Post = {
    id: string;
    commentCount: number;
    thumbnailUrl: string;
    isVideo: boolean;
    hasLiked: boolean;
    likeCount: number;
    owner: Owner;
    caption: Caption;
    videoUrl: string;
}
import { User } from "./User";

export interface PostResponse {
    data: PostData;
    pagination_token: string;
}

export interface PostDetailResponse {
    data: Post;
}

export interface PostData {
    count: number;
    items: Array<Post>;
    profile_grid_items: any;
    profile_grid_items_cursor: any;
    user: User;
    pagination_token: string;
}

export interface Post {
    id: string;
    comment_count: number;
    thumbnail_url: string;
    is_video: boolean;
    has_liked: boolean;
    like_count: number;
    owner: Owner;
    caption: Caption;
    video_url: string;
}
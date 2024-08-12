import { UserResponse } from "./UserResponse";

export interface PostResponse {
    data: PostData;
    pagination_token: string;
}

export interface PostDetailResponse {
    data: PostItem;
}

export interface PostData {
    count: number;
    items: Array<PostItem>;
    profile_grid_items: any;
    profile_grid_items_cursor: any;
    user: UserResponse;
    pagination_token: string;
}

export interface PostItem {
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
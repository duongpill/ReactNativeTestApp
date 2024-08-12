import { PostDetailResponse, PostResponse } from "../models/Post";

export interface PostRepository {
    loadPost(): Promise<PostResponse | null>;

    loadMorePost(pagination_token: string): Promise<PostResponse | null>;

    getPostDetail(id: string): Promise<PostDetailResponse | null>;
}
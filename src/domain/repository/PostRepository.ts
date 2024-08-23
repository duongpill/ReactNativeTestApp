import { WrappedPostsResponse } from "../../data/WrappedPostsResponse";
import { Post } from "../entity/Post";

export interface PostRepository {
    loadPosts(pagination_token?: string): Promise<WrappedPostsResponse | null>;

    getPostDetail(id?: string): Promise<Post | null>;
}
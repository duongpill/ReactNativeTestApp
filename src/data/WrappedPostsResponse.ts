import { Post } from "../domain/entity/Post";

export interface WrappedPostsResponse {
    posts: Post[],
    paginationToken: string
}
import { WrappedPostsResponse } from "../../data/WrappedPostsResponse";
import { PostRepository } from "../repository/PostRepository";

export class GetPostsUseCase {

    postRepository?: PostRepository;

    constructor(postRepository?: PostRepository){
        this.postRepository = postRepository;
    }

    async invoke(pagination_token?: string): Promise<WrappedPostsResponse | null | undefined>{
        return this.postRepository?.loadPosts(pagination_token);
    }
}
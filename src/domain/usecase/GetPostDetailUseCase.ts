import { Post } from "../entity/Post";
import { PostRepository } from "../repository/PostRepository";

export class GetPostDetailUseCase {

    postRepository?: PostRepository;

    constructor(postRepository?: PostRepository){
        this.postRepository = postRepository;
    }

    async invoke(id: string): Promise<Post | null | undefined>{
        return this.postRepository?.getPostDetail(id);
    }
}
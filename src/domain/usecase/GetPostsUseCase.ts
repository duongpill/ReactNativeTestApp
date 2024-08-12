import { PostResponse } from "../../data/dto/Post";
import { PostRepository } from "../repository/PostRepository";

export class GetPostUseCase {

    postRepository: PostRepository;

    constructor(postRepository: PostRepository){
        this.postRepository = postRepository;
    }

    async invoke(): Promise<PostResponse | null>{
        return this.postRepository.loadPost();
    }
}
import { Post } from "../data/dto/Post";
import { PostRepositoryImpl } from "../data/repository/PostRepositoryImpl";
import { UserRepositoryImpl } from "../data/repository/UserRepositoryImpl";
import { PostRepository } from "../domain/repository/PostRepository";
import { UserRepository } from "../domain/repository/UserRepository";
import { GetPostDetailUseCase } from "../domain/usecase/GetPostDetailUseCase";
import { GetPostUseCase } from "../domain/usecase/GetPostsUseCase";
import { SearchUserUseCase } from "../domain/usecase/SearchUserUseCase";

export class Dependencies {

    static #instance: Dependencies;
    private userRepository: UserRepository | undefined;
    private postRepository: PostRepository | undefined;
    private getPostDetailUseCase: GetPostDetailUseCase;
    private getPostsUseCase: GetPostUseCase;
    private searchUserUseCase: SearchUserUseCase;

    private constructor() {}

    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    public static instance(): Dependencies {
        if (!Dependencies.#instance) {
            Dependencies.#instance = new Dependencies();
        }
        return Dependencies.#instance;
    }

    getUserRepository(): UserRepository{
        if(!this.userRepository){
            this.userRepository = new UserRepositoryImpl();
        }
        return this.userRepository;
    }

    getPostRepository(): PostRepository {
        if(!this.postRepository){
            this.postRepository = new PostRepositoryImpl();
        }
        return this.postRepository;
    }

    getPostDetailUseCase(id: string): Promise<Post[] | null> {
        this.getPostDetailUseCase = new GetPostDetailUseCase();
        return this.getPostDetailUseCase.invoke(id)
    }
}

enum DependencyType {
    SINGLETON,
    TRANSIENT
}
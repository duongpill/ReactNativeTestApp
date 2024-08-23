import { PostRepositoryImpl } from "../data/repository/PostRepositoryImpl";
import { UserRepositoryImpl } from "../data/repository/UserRepositoryImpl";
import { WrappedPostsResponse } from "../data/WrappedPostsResponse";
import { Post } from "../domain/entity/Post";
import { User } from "../domain/entity/User";
import { PostRepository } from "../domain/repository/PostRepository";
import { UserRepository } from '../domain/repository/UserRepository';
import { GetPostDetailUseCase } from "../domain/usecase/GetPostDetailUseCase";
import { GetPostsUseCase } from "../domain/usecase/GetPostsUseCase";
import { SearchUserUseCase } from "../domain/usecase/SearchUserUseCase";

export class DependencyInjections {

    static #instance: DependencyInjections;
    private _userRepository?: UserRepository;
    private _postRepository?: PostRepository;
    private _getPostDetailUseCase?: GetPostDetailUseCase;
    private _getPostsUseCase?: GetPostsUseCase;
    private _searchUserUseCase?: SearchUserUseCase;

    private constructor() {}

    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    public static instance(): DependencyInjections {
        if (!DependencyInjections.#instance) {
            DependencyInjections.#instance = new DependencyInjections();
        }
        return DependencyInjections.#instance;
    }

    initSingletonType(){
        if(!this._userRepository){
            this._userRepository = new UserRepositoryImpl();
        }
        if(!this._postRepository){
            this._postRepository = new PostRepositoryImpl();
        }
    }

    getUserRepository(): UserRepository | undefined{
        return this._userRepository;
    }

    getPostRepository(): PostRepository | undefined {
        return this._postRepository;
    }

    getPostDetailUseCase(id: string): Promise<Post | null | undefined> {
        this._getPostDetailUseCase = new GetPostDetailUseCase(this._postRepository);
        return this._getPostDetailUseCase.invoke(id)
    }

    getPostsUseCase(pagination_token?: string): Promise<WrappedPostsResponse | null | undefined> {
        this._getPostsUseCase = new GetPostsUseCase(this._postRepository);
        return this._getPostsUseCase.invoke(pagination_token)
    }

    searchUsersUseCase(query: string): Promise<User[] | null | undefined> {
        this._searchUserUseCase = new SearchUserUseCase(this._userRepository);
        return this._searchUserUseCase.invoke(query)
    }
}
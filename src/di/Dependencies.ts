import { PostRepositoryImpl } from "../data/PostRepositoryImpl";
import { SearchRepositoryImpl } from "../data/SearchRepositoryImpl";
import { PostRepository } from "../domain/PostRepository";
import { SearchRepository } from "../domain/SearchRepository";

export class Dependencies {
    static #instance: Dependencies;
    private searchRepository: SearchRepository | undefined;
    private postRepository: PostRepository | undefined;

    private constructor() { }

    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    public static get instance(): Dependencies {
        if (!Dependencies.#instance) {
            Dependencies.#instance = new Dependencies();
        }

        return Dependencies.#instance;
    }

    getSearchRepository(): SearchRepository{
        if(!this.searchRepository){
            this.searchRepository = new SearchRepositoryImpl();
        }
        return this.searchRepository;
    }

    getPostRepository(): PostRepository {
        if(!this.postRepository){
            this.postRepository = new PostRepositoryImpl();
        }
        return this.postRepository;
    }
}
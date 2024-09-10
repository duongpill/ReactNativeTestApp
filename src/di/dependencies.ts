import { Container } from "inversify"
import { PostRepository } from '../domain/repository/PostRepository';
import { PostRepositoryImpl } from "../data/repository/PostRepositoryImpl"
import { UserRepository } from "../domain/repository/UserRepository"
import { UserRepositoryImpl } from "../data/repository/UserRepositoryImpl"
import { GetPostsUseCase } from "../domain/usecase/GetPostsUseCase"
import { GetPostDetailUseCase } from "../domain/usecase/GetPostDetailUseCase"
import { SearchUserUseCase } from "../domain/usecase/SearchUserUseCase"

const container = new Container()

const postRepository = new PostRepositoryImpl()
const userRepository = new UserRepositoryImpl()

container.bind<PostRepository>('PostRepository').toConstantValue(postRepository)
container.bind<UserRepository>('UserRepository').toConstantValue(userRepository)

container.bind<GetPostsUseCase>('GetPostsUseCase').toConstantValue(new GetPostsUseCase(postRepository))
container.bind<GetPostDetailUseCase>('GetPostDetailUseCase').toConstantValue(new GetPostDetailUseCase(postRepository))
container.bind<SearchUserUseCase>('SearchUserUseCase').toConstantValue(new SearchUserUseCase(userRepository))

export default container
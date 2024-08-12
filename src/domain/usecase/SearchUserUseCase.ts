import { UserResponse } from "../../data/dto/User";
import { UserRepository } from "../repository/UserRepository";

export class SearchUserUseCase {

    userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    async invoke(query: string): Promise<UserResponse | null>{
        return this.userRepository.search(query);
    }
}
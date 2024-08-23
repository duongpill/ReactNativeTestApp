import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";

export class SearchUserUseCase {

    userRepository?: UserRepository;

    constructor(userRepository?: UserRepository){
        this.userRepository = userRepository;
    }

    async invoke(query: string): Promise<User[] | null | undefined>{
        return this.userRepository?.search(query);
    }
}
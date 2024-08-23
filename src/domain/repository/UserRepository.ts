import { User } from "../entity/User";

export interface UserRepository {
    search(query: string): Promise<User[] | null>;
}
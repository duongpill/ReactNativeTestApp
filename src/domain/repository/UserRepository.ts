import { UserResponse } from "../../data/dto/User";

export interface UserRepository {
    search(query: string): Promise<UserResponse | null>;
}
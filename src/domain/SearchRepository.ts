import { UserResponse } from "../models/User";

export interface SearchRepository {
    search(query: string): Promise<UserResponse | null>;
}
import { User } from "../../domain/entity/User";
import { MapToUser } from "../../domain/mapper/ToEntity";
import { UserRepository } from "../../domain/repository/UserRepository";
import { API } from "../../utils/Constants";
import { UserResponse } from "../dto/UserResponse";

export class UserRepositoryImpl implements UserRepository {
    async search(query: string): Promise<User[] | null> {
        const url = `${API.url}/v1/search_users?search_query=${query}`;
        const options = {
            method: 'GET',
            headers: API.headers
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();

            const userResponse: UserResponse = JSON.parse(result)
            const users  = userResponse.data.items.map(item => MapToUser(item))
            return users;
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
import { SearchRepository } from "../domain/SearchRepository";
import { UserResponse } from "../models/User";
import { API } from "../utils/Constants";

export class SearchRepositoryImpl implements SearchRepository {
    async search(query: string): Promise<UserResponse | null> {
        const url = `${API.url}/v1/search_users?search_query=${query}`;
        const options = {
            method: 'GET',
            headers: API.headers
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();

            const userReponse: UserResponse = JSON.parse(result)
            return userReponse;
        } catch (error) {
            console.error(error);
        }
        return null;
    }
}
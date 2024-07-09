import { PostRepository } from "../domain/PostRepository";
import { PostDetailResponse, PostResponse } from "../models/Post";
import { API } from "../utils/Constants";

export class PostRepositoryImpl implements PostRepository {
    async loadPost(): Promise<PostResponse | null> {
        return await this.loadMorePost('');
    }
    
    async loadMorePost(pagination_token: string): Promise<PostResponse | null> {
      var url = `${API.url}/v1.2/posts?username_or_id_or_url=mrbeast`;
      if(pagination_token){
        url = `${url}&pagination_token=${pagination_token}`;
      }
      const options = {
        method: 'GET',
        headers: API.headers
      };
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const postResponse: PostResponse = JSON.parse(result);
        return postResponse;
      } catch (error) {
          console.error("Error: " + error)
      }
      return null;
    }

    async getPostDetail(id: string): Promise<PostDetailResponse | null> {
        if(!id) {
            return null;
        }

        const url = `${API.url}/v1/post_info?code_or_id_or_url=${id}&include_insights=true`;
        const options = {
            method: 'GET',
            headers: API.headers
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const postDetailReponse: PostDetailResponse = JSON.parse(result);
            return postDetailReponse;
        } catch (error) {
            console.error(error);
        }
        return null;
    }

}
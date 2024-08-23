import { Post } from "../../domain/entity/Post";
import { MapToPost } from "../../domain/mapper/ToEntity";
import { PostRepository } from "../../domain/repository/PostRepository";
import { API } from "../../utils/Constants";
import { PostDetailResponse, PostResponse } from "../dto/PostResponse";
import { WrappedPostsResponse } from "../WrappedPostsResponse";

export class PostRepositoryImpl implements PostRepository {
    async loadPosts(pagination_token?: string): Promise<WrappedPostsResponse | null> {
      let url = `${API.url}/v1.2/posts?username_or_id_or_url=mrbeast`;
      if(pagination_token) {
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
        const posts = postResponse.data.items.map(item => MapToPost(item));
        const wrappedPostsResponse: WrappedPostsResponse = { posts: posts, paginationToken: postResponse.pagination_token };
        return wrappedPostsResponse;
      } catch (error) { 
          console.error("Error: " + error)
      }
      return null;
    }

    async getPostDetail(id?: string): Promise<Post | null> {
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
            const postDetailResponse: PostDetailResponse = JSON.parse(result);
            const post = MapToPost(postDetailResponse.data)
            return post;
        } catch (error) {
            console.error(error);
        }
        return null;
    }

}
import { PostItem } from "../../data/dto/PostResponse";
import { Post } from "../entity/Post";

export function MapToPost(item: PostItem): Post{
    return new Post(item.id, item.comment_count, item.thumbnail_url, item.is_video, item.has_liked, item.like_count, item.owner, item.caption, item.video_url)
}
import { PostItem } from "../../data/dto/PostResponse";
import { UserItem } from "../../data/dto/UserResponse";
import { Post } from '../entity/Post';
import { User } from "../entity/User";

export function MapToPost(item: PostItem): Post {
    return { 
        id: item.id,
        commentCount: item.comment_count, 
        thumbnailUrl: item.thumbnail_url, 
        isVideo: item.is_video, 
        hasLiked: item.has_liked, 
        likeCount: item.like_count, 
        owner: item.owner, 
        caption: item.caption,
        videoUrl: item.video_url
     }
}

export function MapToUser(item: UserItem): User {
    return {
        id: item.id,
        fullName: item.full_name,
        isPrivate: item.is_private,
        isVerified: item.isverified,
        profilePicUrl: item.profile_pic_url,
        profilePicId: item.profile_pic_id,
        userName: item.username
    }
}
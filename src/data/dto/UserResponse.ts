export interface UserResponse {
    data: UserData;
}

interface UserData {
    items: Array<UserItem>;
    count: number;
}

export interface UserItem {
    id: string;
    full_name: string;
    is_private: boolean;
    isverified: boolean;
    profile_pic_url: string;
    profile_pic_id: string;
    username: string;
}
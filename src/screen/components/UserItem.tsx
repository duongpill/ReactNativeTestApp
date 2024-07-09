import React, { FC, memo } from "react";
import { User } from "../../models/User";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../../../styles/UserStyles"

const UserItem: FC<User> = ({id, full_name, is_private, isverified, profile_pic_url, profile_pic_id, username}) => {
    return (
        <View style={styles.container}>
            <FastImage style={styles.avatarStyle}
                source={{ uri: profile_pic_url }} />
            <View>
                <Text style={styles.userNameStyle}>{username}</Text>
                <Text style={styles.userNameStyle}>{full_name}</Text>
            </View>
        </View>
    );
}

export default memo(UserItem);
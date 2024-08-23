import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../../../styles/UserStyles"
import { User } from "../../domain/entity/User";

const UserItem: FC<User> = ({id, fullName, profilePicUrl, userName}) => {
    return (
        <View style={styles.container}>
            <FastImage style={styles.avatarStyle}
                source={{ uri: profilePicUrl }} />
            <View>
                <Text style={styles.userNameStyle}>{userName}</Text>
                <Text style={styles.userNameStyle}>{fullName}</Text>
            </View>
        </View>
    );
}

export default memo(UserItem);
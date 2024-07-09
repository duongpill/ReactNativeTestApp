import React, { FC, memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../../../styles/PostStyles";
import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import { Post } from "../../models/Post";

const PostCard: FC<Post> = ({id, owner, has_liked, like_count, caption, is_video, thumbnail_url, video_url}) => {
    
  const navigation = useNavigation<any>();

  const _moveToDetail = () => {
      navigation.navigate('Detail', {id})
  }

  return (
      <View style={styles.postContainer}>
          <View style={styles.postHeader}>
              <FastImage style={styles.avatarStyle}
                  source={{ uri: owner.profile_pic_url }} />
              <Text style={styles.userNameStyle}>{owner.username}</Text>
          </View>
          <TouchableOpacity onPress={_moveToDetail}>
            <Text style={styles.textDescription}>{caption.text}</Text>
            <View style={styles.imageContainer}>
            { is_video 
                ? <VideoPlayer url={video_url} />
                : <FastImage 
                    style={styles.imageStyle} 
                    resizeMode={FastImage.resizeMode.cover} 
                    source={{uri: thumbnail_url}} />  
            }
            </View>
          </TouchableOpacity>
          <View style={styles.reactions}>
              <Image
                  style={{width: 22, height: 22, marginLeft: 4, marginRight: 8}}
                  source={has_liked ? require("../../assets/heart.png") :require("../../assets/heart_outline.png")}
                  tintColor={has_liked ? 'red' : '#000'}
                  />
              <Text style={styles.text}>{like_count}</Text>
          </View>
      </View>
  );
}

export default memo(PostCard);

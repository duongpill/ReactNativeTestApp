import React, { FC, memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../../../styles/PostStyles";
import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import { Post } from "../../domain/entity/Post";

const PostCard: FC<Post> = ({id, owner, hasLiked, likeCount, caption, isVideo, thumbnailUrl, videoUrl}) => {

  const navigation = useNavigation<any>();

  const _moveToDetail = () => {
      navigation.navigate('Detail', {id})
  }

  return (
      <View key={id} style={styles.postContainer}>
          <View style={styles.postHeader}>
              <FastImage style={styles.avatarStyle}
                  source={{ uri: owner.profile_pic_url }} />
              <Text style={styles.userNameStyle}>{owner.username}</Text>
          </View>
          <TouchableOpacity onPress={_moveToDetail}>
            <Text style={styles.textDescription}>{caption.text}</Text>
            <View style={styles.imageContainer}>
            { isVideo 
                ? <VideoPlayer id={id} url={videoUrl} />
                : <FastImage 
                    style={styles.imageStyle} 
                    resizeMode={FastImage.resizeMode.cover} 
                    source={{uri: thumbnailUrl}} />  
            }
            </View>
          </TouchableOpacity>
          <View style={styles.reactions}>
              <Image
                  style={{width: 22, height: 22, marginLeft: 4, marginRight: 8}}
                  source={hasLiked ? require("../../assets/heart.png") :require("../../assets/heart_outline.png")}
                  tintColor={hasLiked ? 'red' : '#000'}
                  />
              <Text style={styles.text}>{likeCount}</Text>
          </View>
      </View>
  );
}

export default memo(PostCard);

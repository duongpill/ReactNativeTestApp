import React, { FC, memo, useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "../../styles/PostDetailStyles"
import FastImage from "react-native-fast-image";
import { Post } from "../models/Post";
import { Dependencies } from "../di/Dependencies";
import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";

const Detail: FC = ({route}: any) => {

    const { id } = route.params;

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    getPostDetail();
  }, [])

  const getPostDetail = async() => {
    console.log(`post Detail: ${id}`)
    const result = await Dependencies.instance.getPostRepository().getPostDetail(id);
    if(result){
        setPost(result.data)
    }
  }

    return (
        <View style={styles.postContainer}>
            <Header title="Detail" />
            <ScrollView>
                <View style={styles.postHeader}>
                    <FastImage style={styles.avatarStyle}
                        source={{ uri: post?.owner?.profile_pic_url }} />
                    <Text style={styles.userNameStyle}>{post?.owner?.username}</Text>
                </View>
                <Text style={styles.textDescription}>{post?.caption?.text}</Text>
                <View style={styles.imageContainer}>
                { post?.is_video 
                    ? <VideoPlayer url={post?.video_url} />
                    : <FastImage 
                        style={styles.imageStyle} 
                        resizeMode={FastImage.resizeMode.cover} 
                        source={{uri: post?.thumbnail_url}} />  
                }
                </View>
                <View style={styles.reactions}>
                    <Image
                        style={{width: 22, height: 22, marginLeft: 4, marginRight: 8}}
                        source={post?.has_liked ? require("../assets/heart.png") :require("../assets/heart_outline.png")}
                        tintColor={post?.has_liked ? 'red' : '#000'}
                        />
                    <Text style={styles.text}>{post?.like_count ? post?.like_count : 0}</Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default memo(Detail);
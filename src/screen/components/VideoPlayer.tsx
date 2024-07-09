import React, { FC, memo, useRef, useState } from "react";
import Video, { BufferingStrategyType, OnBufferData, OnProgressData, OnVideoAspectRatioData, OnVideoErrorData, VideoRef } from "react-native-video";
import { bufferConfig, defaultValue } from "../../utils/Constants";
import styles from "../../../styles/PostStyles";

interface VideoPlayerProps{
    url: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({url}) => {
    
    const videoRef = useRef<VideoRef>(null);
    const [state, setState] = useState(defaultValue);

    const onAspectRatio = (data: OnVideoAspectRatioData) => {
        console.log('onAspectRadio called ' + JSON.stringify(data));
        setState({
          ...state,
          videoWidth: data.width,
          videoHeight: data.height,
        });
    };
  
    const onVideoBuffer = (param: OnBufferData) => {
        console.log('onVideoBuffer');
        setState({...state, isLoading: param.isBuffering});
    };
  
    const onProgress = (data: OnProgressData) => {
        setState({...state, currentTime: data.currentTime});
    };
  
    const onError = (err: OnVideoErrorData) => {
        console.log(JSON.stringify(err));
    };

    return (
        <Video
        ref={videoRef}
        style={styles.videoStyle}
        source={{uri: url}}
        paused={false}
        preventsDisplaySleepDuringVideoPlayback={true}
        bufferingStrategy={BufferingStrategyType.DEFAULT}
        onAspectRatio={onAspectRatio}
        onBuffer={onVideoBuffer}
        bufferConfig={{
            ...bufferConfig,
            cacheSizeMB: state.useCache ? 200 : 0,
        }}
        playInBackground={false}
        playWhenInactive={false}
        repeat={true}
        onProgress={onProgress}
        onError={onError} />
    )
}

export default memo(VideoPlayer);
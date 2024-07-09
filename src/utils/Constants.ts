import { BufferConfig, ResizeMode, SelectedVideoTrackType } from "react-native-video";

export const API = {
    url: 'https://instagram-scraper-api2.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': 'f7a3ef1d49mshc8f5be43cb0ba30p156b3ejsne7083b61cf72',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
    }
}

export const defaultValue = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: ResizeMode.CONTAIN,
    duration: 0.0,
    currentTime: 0.0,
    videoWidth: 0,
    videoHeight: 0,
    paused: false,
    fullscreen: true,
    decoration: true,
    isLoading: false,
    audioTracks: [],
    textTracks: [],
    videoTracks: [],
    selectedAudioTrack: undefined,
    selectedTextTrack: undefined,
    selectedVideoTrack: {
      type: SelectedVideoTrackType.AUTO,
    },
    srcListId: 0,
    loop: false,
    showRNVControls: false,
    useCache: false,
    poster: undefined,
    showNotificationControls: false,
    isSeeking: false,
  };

export const bufferConfig: BufferConfig = {
    minBufferMs: 15000,
    maxBufferMs: 50000,
    bufferForPlaybackMs: 2500,
    bufferForPlaybackAfterRebufferMs: 5000,
    live: {
      targetOffsetMs: 500,
    },
}
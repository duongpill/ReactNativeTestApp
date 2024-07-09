import { StyleSheet } from "react-native";

const PostStyle = StyleSheet.create({
    postContainer: {
        flex: 1,
        color: '#000'
    },
    postHeader: {
        flexDirection: 'row',
        marginBottom: 10
    },
    imageContainer: {
        flex: 1,
    },
    imageStyle: {
        width: '100%',
        aspectRatio: 1
    },
    avatarStyle: {
        borderColor: '#ddd',
        borderWidth: 0.3,
        height: 36,
        width: 36,
        borderRadius: 36,
        marginRight: 10,
    },
    userNameStyle: {
        fontWeight: '600',
        fontSize: 14,
        color: '#000'
    },
    videoStyle: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        aspectRatio: 1,
    },
    reactions: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#aaa',
        borderWidth: 0.5,
        padding: 10
    },
    text: {
        fontSize: 12,
        color: '#000'
    },
    textDescription: {
        color: '#000',
        fontSize: 12,
        marginBottom: 10
    }
})

export default PostStyle
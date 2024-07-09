import { StyleSheet } from "react-native";

const PostDetailStyle = StyleSheet.create({
    postContainer: {
        flex: 1,
        color: '#000',
        paddingHorizontal: 15
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
    reactions: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#aaa',
        borderTopWidth: 0.5,
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

export default PostDetailStyle
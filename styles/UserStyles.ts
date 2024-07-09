import { StyleSheet } from "react-native";

const UserStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        color: '#000',
        padding: 10,
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
        color: '#000',
        width: '100%'
    },
})

export default UserStyle
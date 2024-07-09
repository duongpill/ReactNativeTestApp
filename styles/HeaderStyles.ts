import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
    },
    navText: {
        color: '#444',
        fontSize: 26,
        fontWeight: '700',
    },
    navBack: {
        tintColor: '#000',
        width: 22,
        height: 22,
        padding: 10
    }
})

export default HeaderStyle
import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window')

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        minHeight: dimensions.height,
        paddingHorizontal: 15
    },
    flatListContainer: {
        flex: 1,
    },
    textEmpty: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FF0000'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60,
    },
    headerText: {
        color: '#444',
        fontSize: 26,
        fontWeight: '700',
    },
    searchButton: {
        tintColor: '#000',
        width: 22,
        height: 22,
        padding: 10,
        alignItems: 'flex-end'
    }
})

export default HomeStyle;
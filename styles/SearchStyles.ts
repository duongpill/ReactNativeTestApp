import { StyleSheet } from "react-native";

const SearchStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15
    },
    searchBox: {
        flexDirection: 'row',
        backgroundColor: '#404040',
        borderRadius: 8,
        alignItems: 'center'
    },
    searchIcon: {
        width: 22, 
        height: 22, 
        marginLeft: 10, 
        marginRight: 10
    },
    searchInput: {
        color: 'white'
    },
    textEmpty: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FF0000'
    }
})

export default SearchStyle
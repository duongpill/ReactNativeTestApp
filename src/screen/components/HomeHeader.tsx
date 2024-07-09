import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../../../styles/HomeStyles"
import { useNavigation } from "@react-navigation/native";
import React from "react";

interface HeaderProps {
    title?: string;
}

const HomeHeader: FC<HeaderProps> = ({title}) => {
    const navigation = useNavigation();

    const moveToSearch = () => {
        navigation.navigate('Search');
    }

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={moveToSearch}>
                <Image
                    source={require('../../assets/search.png')}
                    style={styles.searchButton}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader;
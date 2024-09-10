import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../../../styles/HeaderStyles";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
    title?: string;
}

const Header: FC<HeaderProps> = ({title}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity testID="headerBackButton" style={styles.navContainer} onPress={() => navigation.goBack()}>
            <Image
                source={require('../../assets/ic_back.png')}
                style={styles.navBack}
            />
            <Text style={styles.navText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Header;
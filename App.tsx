import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/screen/Home";
import Search from "./src/screen/Search";
import Detail from "./src/screen/Detail";
import { DependencyInjections } from "./src/di/DependencyInjections";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

    DependencyInjections.instance().initSingletonType();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
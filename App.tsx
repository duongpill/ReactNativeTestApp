import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/presentation/Home";
import Search from "./src/presentation/Search";
import Detail from "./src/presentation/Detail";
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
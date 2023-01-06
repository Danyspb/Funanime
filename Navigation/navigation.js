import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Setting from "./Settings";


const Navigation  = () =>{
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
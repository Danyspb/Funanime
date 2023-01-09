import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../Screens/Home";
import Settings from "../Screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigation = () =>{

    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigation} />
            <Stack.Screen name="Setting" component={Settings} />
        </Stack.Navigator>
    )
}

const TabNavigation = () =>{
    retun (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen  name="Setting" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;
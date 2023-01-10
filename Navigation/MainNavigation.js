import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import Profil from "../Screens/Profil";


const Stack = createStackNavigator();

const MainNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profil" component={Profil} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({


})

export default MainNavigation;
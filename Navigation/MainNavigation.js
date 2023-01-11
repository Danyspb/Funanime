import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import Favoris from "../Screens/Favoris";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";
import Search from "../Screens/Search";
import Download from "../Screens/Download";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const bottomNav = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Acceuil" component={Home} />
            <Tab.Screen name="Favoris" component={Favoris} />
            <Tab.Screen name="Search" component={Search={}} />
            <Tab.Screen name="Download" component={Download} />
        </Tab.Navigator>
    )
}

const MainNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={bottomNav} />
            <Stack.Screen name="Favoris" component={Favoris} options={{
                headerTitle: "Favoris",
                headerBackTitle: "Retour"


            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({


})

export default MainNavigation;
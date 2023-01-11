import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import Favoris from "../Screens/Favoris";
import Search from "../Screens/Search";
import Download from "../Screens/Download";
import { Ionicons } from '@expo/vector-icons';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const BottomNav = () =>{
    return (
        <Tab.Navigator screenOptions={{
            headerTitle: ''
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: () =><Ionicons name="home" size={24} color="black" />
            }}/>
            <Tab.Screen name="Favoris" component={Favoris} options={{
                tabBarIcon: ()=><Ionicons name="star" size={24} color="black" />
            }} />
            <Tab.Screen name="Search" component={Search}  options={{
                tabBarIcon: ()=><Ionicons name="search" size={24} color="black" />
            }}/>
            <Tab.Screen name="Download" component={Download} options={{
                tabBarIcon: ()=><Ionicons name="download" size={24} color="black" />
            }} />
        </Tab.Navigator>
    )
}

const MainNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Acceuil" component={BottomNav} options={{headerShown: false}} />
            <Stack.Screen name="Favoris" component={Favoris} options={{
                headerTitle: "Favoris",
               
            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    
})

export default MainNavigation;
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import Favoris from "../Screens/Favoris";




const Stack = createStackNavigator();

const MainNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Favoris" component={Favoris} options={{
                headerTitle: "Favoris",
                headerBackTitle: "Retour",


            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({


})

export default MainNavigation;
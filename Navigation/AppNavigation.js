import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import MainNavigation from "./MainNavigation";


const AppNavigation = () =>{
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    
})

export default AppNavigation;
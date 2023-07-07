import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import MainNavigation from "./MainNavigation";
import { navigationRef } from '../utils/RootNavigation';


const AppNavigation = () =>{
    return (

       <NavigationContainer ref={navigationRef}>
            <MainNavigation />
       </NavigationContainer>
       
    )
}


export default AppNavigation;
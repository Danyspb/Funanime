import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";


const AppNavigation = () =>{
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation;
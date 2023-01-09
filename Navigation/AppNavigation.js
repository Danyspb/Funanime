import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import MainNavigation from "./MainNavigation";

const AppNavigation = () =>{
    return (

        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation;
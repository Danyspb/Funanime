import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Setting from "./Settings";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MainNavigation  = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BottNavi} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}

const BottNavi = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>
    )
}



export default MainNavigation;
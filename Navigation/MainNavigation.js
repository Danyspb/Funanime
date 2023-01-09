import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../Screens/Home";
import Settings from "../Screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile";




    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
    
    
    
    const MainNavigation = (props)=>{
    
    
        return(
            <Stack.Navigator>
                    <Stack.Screen name='Acceuil' component={TabNavigator}  options={{headerShown: false}}/>
                    <Stack.Screen name='Settings' component={Settings} options={{
                        headerTitle: "Settings",
                        headerBackTitle: "Back"
                    }} />
                    <Stack.Screen name='Profile' component={Profile} options={{
                        headerBackTitle: "Back",
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        )
    }
    
    const TabNavigator = ()=>{
        return(
          <Tab.Navigator screenOptions={{headerTitle: ''}}>
            <Tab.Screen name='Home' component={Home} options={{
              tabBarLabel: 'Home'
              
              }}/>
            <Tab.Screen name='Settings' component={Settings} options={{
              tabBarLabel: "Settings"
              }} />
          </Tab.Navigator>
        )
      }


export default MainNavigation;
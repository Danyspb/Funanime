import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screens/Home";
import Favoris from "../Screens/Favoris";
import Search from "../Screens/Search";
import Download from "../Screens/Download";
import { Ionicons } from '@expo/vector-icons';
import Details from "../Screens/Details";
import PlayerView from "../Screens/PlayerView";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const BottomNav = () =>{
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            tabBarShowLabel: false
            
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: () =><Ionicons name="home" size={24} color="blue" />,
                tabBarActiveBackgroundColor: "#E3ACF9",
                headerStyle:{
                    backgroundColor: 'blue',
                
                },

            }}/>
            <Tab.Screen name="Favoris" component={Favoris} options={{
                tabBarIcon: ()=><Ionicons name="star" size={24} color="gold" />,
                tabBarActiveBackgroundColor: "#E3ACF9",
                headerStyle:{
                    backgroundColor: 'gold'
                },
                
            }} />
            <Tab.Screen name="Search" component={Search}  options={{
                tabBarIcon: ()=><Ionicons name="search" size={24} color="red" />,
                tabBarActiveBackgroundColor: "#E3ACF9",
                headerStyle:{
                    backgroundColor: 'red'
                }
            }}/>
            <Tab.Screen name="Download" component={Download} options={{
                tabBarIcon: ()=><Ionicons name="download" size={24} color="purple" />,
                tabBarActiveBackgroundColor: "#E3ACF9",
                headerStyle:{
                    backgroundColor: 'purple'
                }
            }} />
        </Tab.Navigator>
    )
}

const MainNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Acceuil" component={BottomNav} options={{
                headerShown: false,
                
                }} />
            <Stack.Screen name="Favoris" component={Favoris} options={{
                headerShown: false,
                
                }} />
            <Stack.Screen name="Search" component={Search} options={{
                headerShown: false,
                
                }} />
            <Stack.Screen name="Download" component={Download} options={{
                headerShown: false,
                
                }} />
            <Stack.Screen name="Details" component={Details} options={{
                headerShown: false,
                animationEnabled: true
            }}/> 
            <Stack.Screen name="PlayerView" component={PlayerView} options={{
                headerShown: false,
                animationEnabled: true
            }}/> 
        </Stack.Navigator>
    )
}



export default MainNavigation;
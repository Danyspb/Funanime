import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Films from "../Data/Films";






const Home = () =>{

    return(
        <View >
            <Films />
        </View>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181D31',
    },
    text:{
        color: '#F0E9D2'
    }
         
})

export default Home;
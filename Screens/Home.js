import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Films from "../Data/Films";
import PopularAnime from "../Data/PopularAnime";



const Home = () =>{

    return(
        <View style={styles.container}>
           <Films /> 
           <View>
           <PopularAnime /> 
           </View>
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
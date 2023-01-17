import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FilmDesign from "../Design/FilmDesign";



const Home = () =>{

    return(
        <View style={styles.container}>
            <FilmDesign />
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
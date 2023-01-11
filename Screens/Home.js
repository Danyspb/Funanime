import React from "react";
import {Button, StyleSheet, Text, View } from "react-native";




const Home = (props) =>{
    return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to my home page
                </Text>
                <Button title="go to Favoris"  onPress={()=>{props.navigation.navigate("Favoris")}}/>
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
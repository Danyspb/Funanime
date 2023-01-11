import React from "react";
import {Button, StyleSheet, Text, View } from "react-native";




const Home = (props) =>{
    return(
            <View style={styles.container}>
                <Text>
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
        alignItems: 'center'
        
    }
         
})

export default Home;
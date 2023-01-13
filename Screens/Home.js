import React from "react";
import { StyleSheet, View } from "react-native";
import Films from "../data/Films";





const Home = (props) =>{
    
   

    return(
            <View style={styles.container}>
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
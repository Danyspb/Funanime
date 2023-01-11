import React from "react";
import { StyleSheet, Text, View } from "react-native";



const Favoris = (props) =>{
    return(
        <View style={styles.container}>
            <Text>
                Welcome to my Favoris page
            </Text>
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

export default Favoris;
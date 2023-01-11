import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Download = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                welcome to my Download Page
            </Text>
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

export default Download;
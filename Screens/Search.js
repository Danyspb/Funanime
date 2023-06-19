
import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const Search = () =>{



    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to the search pages
            </Text>
            <TextInput 
                style={styles.textbox}
                placeholder="Search"
             /> 
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
    },
    textbox:{
        width: 300,
        backgroundColor: 'cyan',
        borderWidth: 1,
        borderRadius: 50,
        marginHorizontal: 10,
        paddingHorizontal: 12,
        
    }
})

export default Search;


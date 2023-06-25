import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const SearchPreview = ({id, title, url, picture, date, type}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.texStyle}>
                les resultats des recherhes
            </Text>

        </View>   
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
    },
    texStyle:{
        color: 'cyan',
        marginTop: 20

    }
})
export default SearchPreview;
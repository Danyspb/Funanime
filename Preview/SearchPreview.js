import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const SearchPreview = ({id, title, link, picture, date, type}) =>{
    return(
        <View style={styles.container}>
            

        </View>   
    )
}

const styles = StyleSheet.create({
    card:{
        marginTop: 10,
        width: 120,
        height: 160,
        margin: 5,
        marginBottom: 70,
        

    },
    cardPic:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        

    },
    titre:{
        color: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    labelAnime: {
        color: 'white',
        marginTop: -30,
        marginBottom: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    textLabel:{
        color: 'white',
        marginTop: -30,
        marginBottom: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    epi:{
        color: 'white',
        backgroundColor: 'red',
        marginTop: -15,
        borderBottomLeftRadius: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
export default SearchPreview;
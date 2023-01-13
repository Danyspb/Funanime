import React from "react";
import { StyleSheet, Text, View } from "react-native";




const FilmsDesign = (props) =>{
    const {animeId, animeTitle, animeUrl, animeImg, releasedDate } = props;
    return (
        <View style={styles.container}>
            <Text>{animeId}</Text>
            <Text>{animeTitle}</Text>
            <Text>{animeUrl}</Text>
            <Text>{animeImg}</Text>
            <Text>{releasedDate}</Text>
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

export default FilmsDesign;
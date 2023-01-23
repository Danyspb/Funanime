import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Details = () =>{

    return(
        <View style={styles.container}>
            <Text>
                welcome to details page 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'baseline',
    }
})

export default Details;
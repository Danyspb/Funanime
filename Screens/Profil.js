import React from "react";
import { StyleSheet, View } from "react-native";



const Profil = () =>{
    return(
        <View style={styles.container}>
            <Text>
                Welcome to my profil page
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

export default Profil;
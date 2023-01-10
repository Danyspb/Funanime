import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";




const Home = () =>{
    return(
            <View style={styles.container}>
                <Text>
                    Welcome to my home page
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
         
})

export default Home;
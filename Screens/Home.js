import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Films from "../Data/Films";
import PopularAnime from "../Data/PopularAnime";



const Home = () =>{

    return(
        <View style={styles.container}>
         <ScrollView >
            <View>
                
                <Films />
            </View>
            <View>
                <Text style={styles.labelAnime}>Popular Anime</Text>
                <PopularAnime /> 
            </View>
         </ScrollView>

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
    labelAnime: {
        color: 'white',
        marginTop: 20,
        marginBottom: -15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
   
})

export default Home;
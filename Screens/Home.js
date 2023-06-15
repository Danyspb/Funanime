import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PopularAnime from "../data/PopularAnime";
import RecentAnime from "../data/RecentAnime";
import Films from "../data/Airing";








const Home = () =>{

    return(
        <View style={styles.container}>
         <ScrollView >
            <View>
                <Films /> 
            </View>
            <View>
                <PopularAnime /> 
            </View>
            <View>
                <RecentAnime /> 
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
    }

})

export default Home;
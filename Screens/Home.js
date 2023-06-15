import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import RecentAnime from "../data/RecentEpisode";
import Films from "../data/Airing";








const Home = () =>{

    return(
        
        <View style={styles.container}>
            <ScrollView style={{paddingBottom: 120}}>
                <Films />
            </ScrollView>
            <ScrollView>
                <RecentAnime />
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
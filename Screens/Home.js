import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Films from "../Data/Films";
import PopularAnime from "../Data/PopularAnime";
import RecentAnime from "../Data/RecentAnime";
import Test from "../design/Test";




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
            <View>
                <Test /> 
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
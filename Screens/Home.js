import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FilmsDesign from "../Design/FilmsDesign";







const Home = (props) =>{
    const {item} = props;
    console.log({item});
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <FilmsDesign 
                {...item} />
            </View>
        </TouchableOpacity>   
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
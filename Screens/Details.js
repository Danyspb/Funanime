import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ImageBackground, Text, View } from "react-native";
import { StyleSheet } from "react-native";



const Details =(props)=>{

    const [id, setId] = useState(props.route.params.id);
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState([]);

    const url = `https://api.consumet.org/anime/gogoanime/info/${id}`;

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then(
            (result) =>{
                setLoading(false);
                setInfo(result);
            }
        )

    },[]);

    if(loading){
        return<View style={styles.activityStyle}>
            <ActivityIndicator size={"large"} color={"#00ff00"} />
        </View>
    }
    return(
        <ImageBackground  style={styles.container}
        blurRadius={5}
        resizeMode="cover"
        source={{uri: info.image}}

        >

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignContent:"center",
        alignItems: "center",
        justifyContent: "center",
    },
    activityStyle:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#181D31',
    },
    imagContainer:{
        height: 300,
        width: 400,
    }
})

export default Details;
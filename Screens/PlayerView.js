import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import NexenPlayer, { NexenPlayerRef } from 'react-native-nexen-player';


const PlayerView = ({route})=>{

    let serverID = route.params;
    let [link, setLink] = useState([]);
    let [loading, setLoading] = useState([]);
    l


    const url = `https://api.consumet.org/anime/gogoanime/watch/${serverID}`;

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then(
            (result) =>{
                setLoading(false);
                setLink(result);
            }
        )
    },[]);

   

    {
        link.sources?.map((item)=>{
            return(
                console.log(item.url),
                console.log(item.quality)
            )
        })
    }

    if(loading){
        return<View style={styles.activityStyle}>
            <ActivityIndicator size={"large"} color={"#00ff00"} />
        </View>
    }

    return(
        <View style={styles.videoContainer}>
           <Text> hello to the  player screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    activityStyle:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#181D31',
    },
    videoContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",

    }
})

export default PlayerView;

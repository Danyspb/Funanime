import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, ActivityIndicator,ScrollView, Button, SafeAreaView, TouchableOpacity, Modal, Dimensions } from "react-native";




const PlayerView = ({route})=>{

    let serverID = route.params;
    let [link, setLink] = useState([]);
    let [loading, setLoading] = useState([]);
    let video = React.useRef(null);
    let [status, setStatus] = React.useState({});

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


    

    if(loading){
        return<View style={styles.activityStyle}>
            <ActivityIndicator size={"large"} color={"#00ff00"} />
        </View>
    }

    return(
        <View style={styles.container}>
                {
                    link.sources?.map((item,index)=>{
                        return<Video 
                                key={index}
                                ref={video}
                                style={styles.video}
                                source={{uri: item.url}}
                                useNativeControls
                                resizeMode={ResizeMode.COVER}
                                isLooping
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    })
                }
            
           <View>
                <Button 
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={()=>
                        status.isPlaying ?  video.current.pauseAsync() : video.current.playAsync()
                    }
                /> 
           </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 3,

        backgroundColor: '#181D31'

    },
   
    activityStyle:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#181D31',
    },
    video:{
       flex: 1,
      
    },

})

export default PlayerView;

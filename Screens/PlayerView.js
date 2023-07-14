import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Button } from "react-native";



const PlayerView = ({route})=>{

    let serverID = route.params;
    let [link, setLink] = useState([]);
    let [loading, setLoading] = useState([]);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({})


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
                return<Video key={index}
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: item.url
                    }}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            })
           }
           <View>
                <Button 
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={()=>
                        status.isPlaying ?  video.current.pauseAsync(3000) : video.current.playAsync()
                    }
                /> 
           </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'blue'

    },
    activityStyle:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#181D31',
    },
    video:{
       margin: 5,
       height: "40%",
       width: '90%',
       justifyContent: 'center',
       
        
    }
})

export default PlayerView;

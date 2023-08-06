import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, Button} from "react-native";
import LottieView from 'lottie-react-native';


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
            <LottieView  style={styles.animStyle}
                    autoPlay
                    loop
                    source={require('../assets/kakashi.json')}
                /> 
            <Text style={{color: 'white', top: 150, fontFamily: 'lobster2', fontSize: 25}}>
                Loading...
            </Text>
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
                                resizeMode={ResizeMode.CONTAIN}
                                isLooping
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    })
                }
            
           <View style={styles.buttonViewStyle}>
                 
                <Button
                title="quality"
                    color={'grey'}
                 />
                <Button 
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={()=>
                        status.isPlaying ?  video.current.pauseAsync() : video.current.playAsync()
                    }
                />
                <Button
                title="Download"
                color={'purple'}
                    onPress={''}
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
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#181D31',
    },
    video:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonViewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        marginLeft: 20,
        marginRight: 20,
        top: -50
    },
    animStyle: {
        width: 300,
        height: 300,
        backgroundColor: '#181D31',
        top: 100
    }

})

export default PlayerView;

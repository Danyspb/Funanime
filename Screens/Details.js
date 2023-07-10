import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ImageBackground, ScrollView, Text, View } from "react-native";
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
                <Image style={styles.imagContainer}
                    resizeMode="contain"
                    source={{uri: info.image}}
                />
            <ScrollView>
                <View style={styles.infoContainer}>
                    <Text style={styles.titleStyle}>
                        {
                            info.title ? (info.title.length > 20 ? info.title.slice(0, 25) + "..." : info.title) : true
                        }
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignItems: "center",
        justifyContent:"flex-start",
    },
    activityStyle:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#181D31',
    },
    imagContainer:{
        marginTop: 50,
        height: 296,
        width: 200,
        borderRadius: 10
    },
    infoContainer:{
        marginTop: 10,
        backgroundColor: 'hsla(0, 0%, 0%, 0.45)',
        borderRadius: 20,
        width: 360,
        height: 440,
    },
    titleStyle:{
        marginTop: 5,
        fontSize : 20,
        color: 'white',
        fontWeight:'bold',
        textAlign :"center",

    }
    
})

export default Details;
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { navigate } from "../utils/RootNavigation";
import { useFonts } from "expo-font";


const Height = Dimensions.get('screen')


const Details =(props)=>{

    let [id, setId] = useState(props.route.params.id);
    let [info, setInfo] = useState([]);
    let [loading, setLoading] = useState([]);
    let [Fontload] = useFonts({
        'lobster':require('../assets/fonts/Lobster-Regular.ttf'),
        'playfaire': require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
        'ultra': require('../assets/fonts/Ultra-Regular.ttf'),
    })

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
            <ActivityIndicator size={"large"} color={"#00ff00"}
            />
            <Text style={{color: 'white', fontWeight: 'bold', left:175}}>
                Loading
            </Text>
        </View>
    }
    return(

        <ScrollView showsVerticalScrollIndicator={false}>
            
            <ImageBackground  style={styles.container}
            blurRadius={3}
            resizeMode="cover"
            source={{uri: info.image}}
            
        >

                <Image style={styles.imagContainer}
                    resizeMode="stretch"
                    source={{uri: info.image}}
                />
            <View >
                <View style={styles.infoContainer}>
                    <Text style={styles.titleStyle}>
                        {
                            info.title ? (info.title.length > 20 ? info.title.slice(0, 21) + "..." : info.title) : true
                        }
                    </Text>
                    <Text style={styles.genreStyles}>
                        <Text style={{fontSize: 18, color: 'white'}}>Genres : </Text>
                        {info.genres+ ''}
                    </Text>
                    <View style={styles.extraInfoContainer}>
                        <Text style={styles.extraInfo}>
                            {info.releaseDate}
                        </Text >
                        <Text style={styles.extraInfo}>
                            {info.subOrDub}
                        </Text>
                        <Text style={styles.extraInfo}>
                            {info.type}
                        </Text>
                        <Text style={styles.extraInfo}>
                            {info.status}
                        </Text>
                    </View>
                    <View style={styles.descContainStyle}>
                        <Text style={styles.descTextStyle}>
                        {
                             info.description
                        }
                        </Text>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={styles.epiTotaView}>
                            {`Total Episodes : ${info.totalEpisodes}`} 
                        </Text>
                    </View>
                    <View style={styles.episodeContainer}>
                            {
                                info.episodes?.map((item,index)=>{
                                    return<TouchableOpacity key={index} onPress={()=>{
                                        navigate('PlayerView',(item.id))
                                    }}>
                                         <Text style={styles.episodeStyle} >
                                                {item.number}
                                        </Text>
                                    </TouchableOpacity>
                                })
                            }
                    </View>
                </View>
            </View>
        </ImageBackground>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignItems: "center",
        paddingBottom: 100,
        
    },
    activityStyle:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#181D31',
        
        
    },
    imagContainer:{
        marginTop: 50,
        marginBottom: 10,
        height: 340,
        width: 275,
        borderRadius: 10,
        
        
    },
    infoContainer:{
        marginTop: 10,
        backgroundColor: 'hsla(0, 0%, 0%, 0.45)',
        borderRadius: 20,
        margin: 5,
        paddingBottom: 100,
        
        
    },
    titleStyle:{
        marginTop: 5,
        fontSize : 20,
        color: 'white',
        fontFamily: 'lobster',
        textAlign :"center",
        textDecorationLine: "underline",
       
    },
    genreStyles:{
        color: 'white',
        fontSize: 15,
        fontFamily: 'playfaire',
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 8,
        marginLeft: 5,
        
    },
    extraInfoContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
        
    },
    extraInfo:{
        color: 'white',
        backgroundColor: 'hsla(237, 100%, 50%, 0.37)',
        padding: 10,
        fontFamily: 'ultra',
        borderRadius: 25,
        fontSize: 10,
        marginLeft: 4,
        marginRight: 4,
        borderColor: 'cyan',
        borderWidth: 1.5,
        
    },
    descContainStyle:{
        margin: 10,
        marginTop: 20,
        borderStyle: "solid",
        borderColor: 'cyan',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: 'hsla(237, 100%, 50%, 0.37)',
        
    },
    descTextStyle:{
        color: 'white',
        lineHeight: 20,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 7,
        fontFamily: 'playfaire'
    },
    episodeContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        justifyContent: 'space-evenly',
        marginBottom: 5,
        padding: 5,
        borderStyle: "solid",
        borderColor: 'cyan',
        borderWidth: 1,
        borderRadius: 8,
    },
    episodeStyle:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'hsla(237, 100%, 50%, 0.37)',
        borderColor: 'cyan',
        borderStyle: "solid",
        borderWidth: 1,
        padding: 10,
        fontFamily: 'playfaire',
        borderRadius: 10,
        alignContent: 'center'
    }, 
    epiTotaView: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'ultra'
    }
    
})

export default Details;
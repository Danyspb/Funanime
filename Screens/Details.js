import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ImageBackground, ScrollView, Text, View } from "react-native";
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground  style={styles.container}
            blurRadius={5}
            resizeMode="cover"
            source={{uri: info.image}}
        >
                <Image style={styles.imagContainer}
                    resizeMode="contain"
                    source={{uri: info.image}}
                />
            <View >
                <View style={styles.infoContainer}>
                    <Text style={styles.titleStyle}>
                        {
                            info.title ? (info.title.length > 20 ? info.title.slice(0, 25) + "..." : info.title) : true
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
                            {info.description}
                        </Text>
                    </View>
                    <View>
                       
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
        height: 300,
        width: 250,
        borderRadius: 10
    },
    infoContainer:{
        marginTop: 10,
        backgroundColor: 'hsla(0, 0%, 0%, 0.45)',
        borderRadius: 20,
        margin: 5
    },
    titleStyle:{
        marginTop: 5,
        fontSize : 20,
        color: 'white',
        fontWeight:'bold',
        textAlign :"center",
        textDecorationLine: "underline"
    },
    genreStyles:{
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 8
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
        fontWeight: "bold",
        borderRadius: 25,
        marginLeft: 4,
        marginRight: 4
    },
    descContainStyle:{
        margin: 10,
        marginTop: 20,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: 'hsla(216, 74%, 48%, 0.47)'
    },
    descTextStyle:{
        color: 'white',
        lineHeight: 20,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 7
    }
    
})

export default Details;
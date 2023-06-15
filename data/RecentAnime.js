import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const url = 'https://api.consumet.org/anime/gogoanime/recent-episodes';

const RecentAnime = () =>{

    let [isloading, setIsloading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) =>{
            setIsloading(false);
            setResponse(result.results);
            },
            (error) =>{
                setIsloading(false);
                setError(error);
            }
          )
    }, []);


    const NouvAnimme = ({title, picture, link, episode, type }) =>{

        return(

            <TouchableOpacity >
                <View style={styles.card}>
                    <View >
                        <Image style={styles.cardPic}
                        source={{uri: picture}}
                        />
                    </View>
                    <View>
                        <Text style={styles.titre}>
                            {
                                title ? (title.length > 30 ? title.slice(0, 25) + "..." : title) : true
                            }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    const getRecAnime = () =>{
        if(isloading){
            <ActivityIndicator
             size={'large'} />
        }
        return(

            <SafeAreaView>
                <Text style={styles.textLabel}>Recent Episodes</Text>
                <FlatList
                numColumns={3}
                data={response}
                renderItem={({item})=>
                <NouvAnimme key={item.animeId}
                title={item.animeTitle}
                picture={item.animeImg}
                episode={item.episodeNum}
                type={item.subOrDub}
                link={item.episodeUrl}
                />}
                />
            </SafeAreaView>
        )
    }
    
    return(
        <View>
            {getRecAnime ()}
        </View>
        
    )

}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'pink',
        width: 125,
        height: 170,
        borderColor: 'yellow',
        borderRadius: 10,
        borderWidth: 1,
        margin: 6,
        marginBottom: 50
    },
    cardPic:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 11,

    },
    titre:{
        color: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelAnime: {
        color: 'white',
        marginTop: -30,
        marginBottom: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    textLabel:{
        color: 'white',
        color: 'white',
        marginTop: -30,
        marginBottom: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,

    }
})
export default RecentAnime;
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


let url = 'https://gogoanime.consumet.stream/popular';

const PopularAnime = () =>{

    let [isloading, setIsloading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();
    let [setSelection, Selection] = useState();

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) =>{
            setIsloading(false);
            setResponse(result);
            },
            (error) =>{
                setIsloading(false);
                setError(error);
            }
          )
    }, []);

    const AnimeDesign = ({id,title,picture, link}) =>{
         
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

    const getAnimePop = () =>{
        if(isloading){
            <ActivityIndicator size={'large'} />
        }
        
        return(
            <SafeAreaView>
                <Text style={styles.labelAnime}>Popular Anime</Text>
              <FlatList
                horizontal
                pagingEnabled
                data={response}
                extraData={Selection}
                renderItem={({item}) => 
                <AnimeDesign key={item.animeId}
                id={item.animeId}
                picture={item.animeImg}
                link={item.animeUrl}
                title={item.animeTitle}
                 />
                }
                keyExtractor={item => item.animeId}
              />
            </SafeAreaView>
        )
    }

    return(

        <View>
            {getAnimePop()}
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
})

export default PopularAnime;
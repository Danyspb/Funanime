import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


let url = 'https://gogoanime.consumet.org/popular';

const PopularAnime = () =>{

    let [isloading, setIsloading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

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
            <TouchableOpacity>
                <View style={styles.card}>
                    <Image style={styles.cardPic}
                    source={{uri: picture}}
                    />

                </View>
            </TouchableOpacity>
        )

    }

    const getAnimePop = () =>{
        if(isloading){
            <ActivityIndicator size={'large'} />
        }
        return(
            <SafeAreaView style={styles.container}>
              <FlatList 
                numColumns={3}
                data={response}
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
        margin: 6
    },
    cardPic:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 11,

    }
})

export default PopularAnime;
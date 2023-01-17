import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
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


    const AnimeDesign = ({title}) =>{
        return(
            <View>
                <Text>{title}</Text>
            </View>
        )

    }

    const getAnimePop = () =>{
        if(isloading){
            <ActivityIndicator size={'large'} />
        }
        return(
            <SafeAreaView style={styles.container}>
              <FlatList
                horizontal
                data={response}
                renderItem={({item}) => 
                <AnimeDesign key={item.animeId}
                title={item.animeTitle} />
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

})

export default PopularAnime;
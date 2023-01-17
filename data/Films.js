import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmDesign from "../Design/FilmDesign";




let url = "https://gogoanime.consumet.org/anime-movies";



const Films = ()=>{
    let [isloading, setIsLoading] = useState(true)
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(()=> {
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) =>{
            setIsLoading(false);
            setResponse(result);
            },
            (error) =>{
                setIsLoading(false);
                setError(error);
            }
          )
        
    }, []);

    
    
    const getContent = () =>{
        if(isloading){
            return <ActivityIndicator  size={"large"}/>
        }
        
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                horizontal
                data={response}
                renderItem={({item}) => 
                <FilmDesign key={item.animeId}  
                title={item.animeTitle}
                date={item.releasedDate}
                picture={item.animeImg}
                link={item.animeUrl} />
                }
                keyExtractor={item => item.animeId}
              />
            </SafeAreaView>
          );
    }

    return (
      <View>
        {getContent()}
      </View>
    )
}

export default Films;
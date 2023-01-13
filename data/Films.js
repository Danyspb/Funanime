import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




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

    const FilmDesign = ({animeId, animeTitle, animeImg, animeUrl , releasedDate}) =>{
      return (
        <View>
          <Text>{animeId}</Text>
          <Text>{animeTitle}</Text>
          <Text>{animeImg}</Text>
          <Text>{animeUrl}</Text>
          <Text>{releasedDate}</Text>
        </View>
      )
    }
  

    const getContent = () =>{
        if(isloading){
            return <ActivityIndicator  size={"large"}/>
        }
        
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={response}
                renderItem={({item}) => 
                <FilmDesign key={item.animeId}  animeTitle={item.animeTitle}/>
                }
                keyExtractor={item => item.animeId}
              />
            </SafeAreaView>
          );
    }


    return (
       <SafeAreaView>
        {getContent()}
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default Films;
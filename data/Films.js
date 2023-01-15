import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
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
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{animeTitle.lenght > 10 ? animeTitle.substring(0, 10 - 3) 
                +'...': animeTitle}</Text>
          <Text style={styles.cardDate}>{releasedDate}</Text>
          <Image 
            source={{uri: `${animeImg}`}}
          />
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
                horizontal
                data={response}
                renderItem={({item}) => 
                <FilmDesign key={item.animeId}  
                animeTitle={item.animeTitle}
                releasedDate={item.releasedDate}
                animeImg={item.animeImg}
                animeUrl={item.animeUrl}
                                           />
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

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'gainsboro',
      height: 250,
      width: 390,
      borderColor: 'red',
      borderWidth: 1,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 20,
    },
    cardTitle:{
      fontSize: 16,
      marginLeft: 25,
      marginTop: 180,
      fontWeight: 'bold',
    },
    cardDate:{
      marginLeft: 25,
      paddingTop: 5,
      fontSize: 16

    }
})

export default Films;
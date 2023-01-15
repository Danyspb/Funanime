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

    const FilmDesign = ({id, title, picture, link , date}) =>{
      return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image 
                  style={styles.cardPic}
                  source={{uri: picture}}
                />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{title.lenght > 10 ? title.substring(0, 10 - 3) 
                    +'...': title}</Text>
                <Text style={styles.cardDate}>Released: {date}</Text>
            </View>
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
      marginTop: -150,
      fontWeight: 'bold',
      fontSize: 15
    },
    cardDate:{
      marginTop: -50
    },
    cardPic:{
      height: '100%',
      width: '50%',
      borderRadius: 20,
      alignItems:'center',
      justifyContent: 'center'
    },
    cardInfo:{
      marginLeft: 210,
    },
    

})

export default Films;
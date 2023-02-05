import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


let url = "https://gogoanime.consumet.stream/anime-movies";


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
        <TouchableOpacity>
          <View >
              <View style={styles.card}>
                  <Image 
                    style={styles.cardPic}
                    source={{uri: picture}}
                  />
              </View>
              <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
                    {
                       title ? (title.length > 20 ? title.slice(0, 22) + "..." : title) : true
                    }
                    </Text>
                  <Text style={styles.cardDate}>Released: {date}</Text>
              </View>
          </View>
        </TouchableOpacity>
        
      )
    }
    
    const getFilm = () =>{

      
        if(isloading){
            return <ActivityIndicator  
            size={"large"}/>
        }
        return (

            <SafeAreaView >
              <Text style={styles.labelMovie}>Anime Movies</Text>
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
          {getFilm()}
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
    labelMovie: {
      color: 'white',
      paddingLeft: 20,
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: -40,
      marginBottom: 20,
  }
})

export default Films;
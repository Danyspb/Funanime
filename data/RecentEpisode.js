import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import RecentEpisodePreview from "../Preview/RecentEpisodePreview";


const url = 'https://api.consumet.org/anime/gogoanime/recent-episodes';

const RecentAnime = () =>{

    let [isloading, setIsloading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState([]);

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

    const getRecAnime = () =>{

        if(isloading){
            return<View>
                  <ActivityIndicator size={"large"} color={"#00ff00"} />
            </View>
        }
        return(
            <View>
                <Text style={styles.text}>
                    Recent Episodes : 
                </Text>
                <FlatList
                numColumns={3}
                data={response}
                renderItem={({item})=>
                <RecentEpisodePreview 
                    key={item.episodeId}
                    title={item.title}
                    picture={item.image}
                    episode={item.episodeNumber}
                />
            }/>
            </View>
        )
    }
    
    return(
        <View>
            {getRecAnime ()}
        </View>
        
    )

}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        textDecorationLine: 'underline'
    
      }
})

export default RecentAnime;
import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecentEpisodePreview from "../Preview/RecentEpisodePreview";


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

    const getRecAnime = () =>{
        if(isloading){
            <ActivityIndicator
             size={'large'} />
        }
        return(

            <SafeAreaView>
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
            </SafeAreaView>
        )
    }
    
    return(
        <View>
            {getRecAnime ()}
        </View>
        
    )

}

export default RecentAnime;
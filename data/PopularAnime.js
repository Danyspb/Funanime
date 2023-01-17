import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";


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

    const getAnimePop = () =>{
        if(isloading){
            <ActivityIndicator size={'large'} />
        }
        console.log(response);
    }


    return(

        <View>

        </View>

    )

}
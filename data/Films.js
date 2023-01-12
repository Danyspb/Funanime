import react, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


let url = "https://gogoanime.consumet.org/anime-movies";



const Films = (props)=>{
    let [isloading, setIsLoading] = useState(true);
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
        console.log(response);
        return <Text>ok ca marche</Text>
        
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
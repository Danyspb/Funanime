import react, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




const url = 'https://gogoanime.consumet.stream/recent-release';


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
            setResponse(result);
            },
            (error) =>{
                setIsloading(false);
                setError(error);
            }
          )
    }, []);


    const NouvAnimme = () =>{
        return(
            <View>

            </View>
        )
    }

    const getRecAnime = () =>{
        if(isloading){
            <ActivityIndicator
             size={'large'} />
        }

        console.log(response);
        return(

            <SafeAreaView>
                <FlatList 
                data={response}
                renderItem={({item})=>
                <NouvAnimme 
                />}
                />
            </SafeAreaView>
        )
    }
    
    return(
        <View>
            {getRecAnime ()}
        </View>
        
    )

}

const styles = StyleSheet.create({

})
export default RecentAnime;
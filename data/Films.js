import react, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


let url = "https://gogoanime.consumet.org/anime-movies";



const Films = ()=>{
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


    const Item = ({url}) => (
        <View >
            <Text>
                {url}
            </Text>
        </View>
      );


    const getContent = () =>{
        if(isloading){
            return <ActivityIndicator  size={"large"}/>
        }
        
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={response}
                renderItem={({item}) => <Item url={item.animeUrl} />}
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
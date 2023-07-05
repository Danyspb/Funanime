import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import AiringPreview from "../Preview/AiringPreview";




let url = "https://api.consumet.org/anime/gogoanime/top-airing";

const Films = ()=>{
    let [isloading, setIsLoading] = useState(true)
    let [error, setError] = useState();
    let [response, setResponse] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) =>{
            setIsLoading(false);
            setResponse(result.results);
            },
            (error) =>{
                setIsLoading(false);
                setError(error);
            }
          )
        
    }, []);
    
  const getFilm = () =>{

        if(isloading){
            return<View>
                  <ActivityIndicator size={"large"} color={"#00ff00"}/>
            </View>
        }

        return (
            <View>
              <Text style={styles.text}>
                    Top Airing : 
                </Text>
              <FlatList
                horizontal
                pagingEnabled={true}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                data={response}
                renderItem={({item}) => 
                <AiringPreview 
                  title={item.title}
                  image={item.image}
                  genres={item.genres}
                  id={item.id}
                  key={item.id}  
                /> 
                }
                keyExtractor={item => item.id}
              />
            </View>
              
          );
    }

    return (
      <View>
          {getFilm()}
      </View>
    )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    textDecorationLine: 'underline'
  }
})

export default Films;

import React, { useEffect, useState } from "react";
import {  TextInput} from "react-native";
import { StyleSheet,  View } from "react-native";
import SearchPreview from "../Preview/SearchPreview";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import useDebounce from "../utils/SearchUtility";


const SearchData = () =>{

    const [result, setResult] = useState([])
    const [search, setSearch] = useState(null) 
    const [loading, setLoading] = useState(false)
    const debounceSearch = useDebounce(search, 300);

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            setResult([]);
            const data = await fetch(`https://api.consumet.org/anime/gogoanime/${debounceSearch}?page={number}`)
            .then(res => res.json());
        setResult(data.results);
        setLoading(false)
        }
        if(debounceSearch) fetchData()
    },[debounceSearch])

    const getSearchAnime = () =>{
       
        if(loading){
            return<View>
                  <ActivityIndicator size={"large"} color={"#00ff00"} />
            </View>
        }
        return(
            <View>
                <FlatList 
                    numColumns={3}
                    data={result}
                    renderItem={({item})=>
                    <SearchPreview 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    picture={item.image}
                    date={item.releaseDate}
                    type={item.subOrDub}
                    link={item.url}
                    /> 

                    }
                />
            </View>
        )
    }

    return (
            <View style={styles.container}>
                    <TextInput 
                        style={styles.textbox}
                        onChangeText={(text) =>setSearch(text)}
                        value={search}
                        placeholder=" search the title of the anime"
                    /> 
                    {getSearchAnime()}
                <SearchPreview /> 
            </View>
        
    )
}

const styles = StyleSheet.create({

    textbox:{
       width: 250,
       height: 40,
       marginBottom: 20,
       backgroundColor: 'cyan',
       borderRadius: 15,
       textAlign: "center",
       textShadowColor: 'gold',
       fontSize: 15,
       marginLeft: 15
    },
    container:{
        flex: 1,
        marginTop: 20,
        alignItems:"center",
    }

})

export default SearchData;
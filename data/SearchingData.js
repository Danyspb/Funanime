
import React, { useCallback, useEffect, useState } from "react";
import { TextInput} from "react-native";
import { StyleSheet,  View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native";
import SearchPreview from "../Preview/SearchPreview";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";




const SearchData = () =>{

    const [result, setResult] = useState([])
    const [search, setSearch] = useState(null) 
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            const data = await fetch(`https://api.consumet.org/anime/gogoanime/${search}?page={number}`)
            .then(res => res.json());
        setResult(data.results);
        setLoading(false)
        }
        fetchData()
    },[search])

    const getSearchAnime =() =>{
        if(loading){
            <ActivityIndicator 
             size={16}
             color={"#00ff00"}
            /> 
        }
        return(
            <View>
                <FlatList 
                    numColumns={3}
                    data={result}
                    renderItem={({item})=>
                    <SearchPreview 
                    item={item}
                    /> 

                    }
                />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <KeyboardAvoidingView>
                    <TextInput 
                        style={styles.textbox}
                        onChangeText={(text) =>setSearch(text)}
                        value={search}
                        placeholder=" search the title of the anime"
                    /> 
                </KeyboardAvoidingView>
                <SearchPreview /> 
            </View>
        </SafeAreaView>
    )

     
}

const styles = StyleSheet.create({

    textbox:{
       width: 250,
       height: 40,
       backgroundColor: 'cyan',
       borderRadius: 15,
       textAlign: "center",
       textShadowColor: 'gold',
       fontSize: 15
       

    },
    container:{
        flex: 1,
        marginTop: 20,
    }

})

export default SearchData;
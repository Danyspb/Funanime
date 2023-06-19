
import React, { useCallback, useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet,  View } from "react-native";
import { Feather } from '@expo/vector-icons';

const Search = () =>{

    const [search, setSearch] = useState('')

    const sendInfo = useCallback(()=>{
        setSearch("");
    }, [search])

  

    return (
        <View style={styles.container}>
        
            <TextInput 
                style={styles.textbox}
                onChangeText={(text) =>setSearch(text)}
                value={search}
                placeholder="search"
                onSubmitEditing={sendInfo} 
                
             /> 
             
             
        </View>
    )



     
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181D31',
    },
    text:{
        color: '#F0E9D2'
    },
    textbox:{

        width: 300,
        backgroundColor: 'cyan',
        borderWidth: 1,
        borderRadius: 50,
        marginHorizontal: 10,
        paddingHorizontal: 12,
        
    }
})

export default Search;
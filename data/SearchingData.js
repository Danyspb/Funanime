
import React, { useCallback, useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet,  View } from "react-native";
import { Feather } from '@expo/vector-icons';


const SearchData = () =>{

    const [search, setSearch] = useState('')

    const sendInfo = useCallback(()=>{
        setSearch("");
    }, [search])

  

    return (
        <View>

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

    textbox:{
        width: 300,
        height: 45,
        backgroundColor: 'cyan',
        borderWidth: 1,
        borderRadius: 50,
        marginHorizontal: 10,
        paddingHorizontal: 12,
        marginTop: -180,
        textAlign: "center"
    }
})

export default SearchData;
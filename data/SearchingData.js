
import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet,  View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native";


const SearchData = () =>{

    const [search, setSearch] = useState('')

    const sendInfo = useCallback(()=>{
        setSearch("");
    }, [search])
  

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <KeyboardAvoidingView>
                    <TextInput 
                        style={styles.textbox}
                        onChangeText={(text) =>setSearch(text)}
                        value={search}
                        placeholder="search"
                        onSubmitEditing={sendInfo} 
                    /> 
                    <TouchableOpacity>
                        <Ionicons name="search" size={24} color="cyan" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )

     
}

const styles = StyleSheet.create({

    textbox:{
       width: 200,
       height: 35,
       backgroundColor: 'cyan',
    },
    searcheIcon:{
        
    },
    container:{
        display: 1,
    }

})

export default SearchData;
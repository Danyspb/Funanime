import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const SearchPreview = ({data,search,setSearch}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.texStyle}>
                les resultats des recherhes
            </Text>
            <FlatList 
                data={data} 
                renderItem={({item})=>{
                    if(search === ""){
                        return(
                            <View>
                                <Text>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    }
                    if(item.name.tolowerCase().includes(search.tolowerCase())){
                        return(
                            <View>
                                <Text>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    }

                }}
            />
        </View>   
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
    },
    texStyle:{
        color: 'cyan',
        marginTop: 20

    }
})
export default SearchPreview;
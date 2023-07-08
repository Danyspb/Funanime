import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import DetailsPreview from "../Preview/DetailsPreview";


const Details =(props)=>{

    const [id, setId] = useState(props.route.params.id);
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState([]);

    const url = `https://api.consumet.org/anime/gogoanime/info/${id}`;

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then(
            (result) =>{
                setLoading(false);
                setInfo(result);
            }
        )

    },[]);

    
    const getInfo =()=>{

        if(loading){
            return<View >
                  <ActivityIndicator size={"large"} color={"#00ff00"}/>
                </View>
        }
        return(
            <View>
                <FlatList 
                    data={info}
                    renderItem={({item})=>
                     <DetailsPreview 
                       key={item.id}
                       
                    />}
                />
            </View>
        )
    }

    return(
        <View style={styles.container}>
            {getInfo()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#181D31',
       

    }
})

export default Details;
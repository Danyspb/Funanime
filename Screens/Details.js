import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";


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

    },[])
    
    console.log(info);
   
    return(
        <View>
            <Text>
                Welcome to the details page : {id}
            </Text>
        </View>
    )
}

export default Details;
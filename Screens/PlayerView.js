import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";


const PlayerView = (props)=>{

    let [serverID, setServerID] = useState(props.route.params);
    let [link, setLink] = useState([]);
    let [loading, setLoading] = useState([]);

    const url = `https://api.consumet.org/anime/gogoanime/watch/${serverID}`;

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then(
            (result) =>{
                setLoading(false);
                setLink(result);
            }
        )
    },[]);


    console.log(link);

    return(
        <View>
            <Text>
                Welcome to the view player :
            </Text>
        </View>
    )
}

export default PlayerView;

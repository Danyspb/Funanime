import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
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

    },[])

    const getInfo =()=>{
        if(loading){
            return<View>
                  <ActivityIndicator size={"large"} color={"#00ff00"} />
                </View>
        }
        return(
            <FlatList 
            data={info}
            renderItem={({item})=><
            DetailsPreview 
            key={item.id}
            title={item.title}
            id={item.id}
            image={item.image}
            description={item.description}
            listEpisode={item.episodes}
            numEpis={item.totalEpisodes}
            otherTitle={item.otherName}
            sortie={item.releaseDate}
            status={item.status}
            subOrDub={item.subOrDub}
            genres={item.genres}
            types={item.type}
              />}
            />
        )
    }

   
    return(
        <View>
            {getInfo()}
        </View>
    )
}

export default Details;
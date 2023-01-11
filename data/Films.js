import react, { useEffect, useState } from "react";
import { View } from "react-native";

let url = "https://gogoanime.consumet.org/anime-movies";

const Films = (props)=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(()=> setLoading(false))
    }, []);


    return (
        <View>

        </View>
    )
}
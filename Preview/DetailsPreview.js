import React from "react";
import { Text, View } from "react-native";


const DetailsPreview = ({id,title, genres ,numEpis,image, sortie, description, types, status, otherTitle, listEpisode, subOrDub}) =>{
    return(
        <View>
            <Text>
                {title}
            </Text>
        </View>
    )
}

export default DetailsPreview;
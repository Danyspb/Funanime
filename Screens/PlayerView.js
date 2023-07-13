import React from "react";
import { View, Text } from "react-native";


const PlayerView = (props)=>{
console.log(props.route.params);
    return(
        <View>
            <Text>
                Welcome to the view player : {props.route.params}
            </Text>
        </View>
    )
}

export default PlayerView;

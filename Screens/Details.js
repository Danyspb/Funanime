import React, { useState } from "react";
import { Text, View } from "react-native";

const Details =(props)=>{

    const [id, setId] = useState((props.route.params.id))
    console.log(id);
   
    return(
        <View>
            <Text>
                Welcome to the details page : {id}
            </Text>
        </View>
    )
}

export default Details
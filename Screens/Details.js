import React, { useState } from "react";
import { Text, View } from "react-native";

const Details =(props)=>{

    const [infId, setInfId] = useState(props.route.params.id)
    console.log("Details", props);

    return(
        <View>
            <Text>
                welcome to the details page : 
            </Text>
        </View>
    )
}

export default Details
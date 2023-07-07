import React, { useState } from "react";
import { Text, View } from "react-native";

const Details =(props)=>{

    const [infId,setInfId] = useState(props.params.id);
    const [availability, setAvailability] = useState(null);
    return(
        <View>
            <Text>
                welcome to the details page : {id}
            </Text>
        </View>
    )
}

export default Details
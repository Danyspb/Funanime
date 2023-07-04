import React, { useState } from "react";
import { Text, View } from "react-native";

const Details = (props) =>{
    const [item,setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState(null);

    return(
        <View>
            <Text>
                {item.id}
            </Text>
        </View>
    )
}

export default Details;
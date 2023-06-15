import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";


const RecentEpisodePreview = ()=>{

    return(
        <TouchableOpacity >
                <View style={styles.card}>
                    <View >
                        <Image style={styles.cardPic}
                        source={{uri: picture}}
                        />
                    </View>
                    <View>
                        <Text style={styles.titre}>
                            {
                                title ? (title.length > 30 ? title.slice(0, 25) + "..." : title) : true
                            }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
    )

}
export default RecentEpisodePreview;
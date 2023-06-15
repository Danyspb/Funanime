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
const styles = StyleSheet.create({
    card:{
        backgroundColor: 'pink',
        width: 125,
        height: 170,
        borderColor: 'yellow',
        borderRadius: 10,
        borderWidth: 1,
        margin: 6,
        marginBottom: 50
    },
    cardPic:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 11,

    },
    titre:{
        color: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelAnime: {
        color: 'white',
        marginTop: -30,
        marginBottom: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    textLabel:{
        color: 'white',
        marginTop: -30,
        marginBottom: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,

    }
})
export default RecentEpisodePreview;
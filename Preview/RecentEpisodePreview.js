import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";


const RecentEpisodePreview = ({title, picture, url ,episode,episodeId})=>{

    return(

        <TouchableOpacity >
            <View>
                <View style={styles.card}>
                    <View >
                        <Image style={styles.cardPic}
                        source={{uri: picture}}
                        />
                        <Text style={styles.epi}>
                            {`Episode: ${episode}`}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.titre}>
                            {
                                title ? (title.length > 20 ? title.slice(0, 25) + "..." : title) : true
                            }
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    card:{
        marginTop: 10,
        width: 120,
        height: 160,
        margin: 5,
        marginBottom: 70,
        

    },
    cardPic:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        

    },
    titre:{
        color: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
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
    },
    epi:{
        color: 'white',
        backgroundColor: 'red',
        marginTop: -15,
        borderBottomLeftRadius: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
export default RecentEpisodePreview;
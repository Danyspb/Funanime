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
                    <View>
                        
                    </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    card:{
        width: 120,
        height: 160,
        borderRadius: 10,
        margin: 5,
        marginBottom: 70,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25

    },
    cardPic:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        

    },
    titre:{
        color: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
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
        marginTop: -13,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        textAlign: 'center'
    }
})
export default RecentEpisodePreview;
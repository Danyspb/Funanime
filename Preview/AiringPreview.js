import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AiringPreview = ({id,title, url, image, genres}) =>{

    return(
        <TouchableOpacity>
            <View>
                <View style={styles.container}>
                        <Image source={{uri: image}}
                        style={styles.cardPic}
                        /> 
                        <Text style={styles.cardTitle}>
                            <Text style={styles.type}>Title: </Text>
                        { title }
                        </Text>
                        <Text style={styles.carGenre}>
                            <Text style={styles.type}>Genres: </Text>
                            {
                                genres +' '
                            }
                        </Text>
                    </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        width: 350,
        height: 200,
        backgroundColor: 'hsla(341, 100%, 66%, 0.16)',
        borderRadius: 25,
        marginLeft: 21
    },
    cardPic:{
        height: '100%',
        width: '50%',
        borderRadius: 20,
    },
    cardTitle:{
        marginLeft: '53%',
        marginTop: '-50%',
        color: 'pink',
        fontWeight: 'bold'
    },
    type: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
      
    },
    carGenre: {
        marginTop: 15,
        marginLeft: '53%',
        color: 'cyan',
        fontWeight: 'bold'
    }
  
  })
export default AiringPreview;
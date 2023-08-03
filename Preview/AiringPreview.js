
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigate } from "../utils/RootNavigation";
import { useFonts } from "expo-font";


const { width} = Dimensions.get('screen');


const AiringPreview = ({title, image, genres, id }) =>{

    let [Fontload] = useFonts({
    'lobster2':require('../assets/fonts/LobsterTwo-Regular.ttf'),
    'playfaire': require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
})

    
    return(
        <TouchableOpacity
        onPress={()=>{
            navigate('Details',{id})  
        }}
        >
            <View>
                <View style={styles.container}>
                        <Image source={{uri: image}}
                        resizeMode="stretch"
                        style={styles.cardPic}
                        /> 
                        <Text style={styles.cardTitle}>
                            <Text style={styles.type}>Title:{"\n"}</Text>
                        { 
                            title ? (title.length > 20 ? title.slice(0, 40) + "..." : title) : true
                         }
                        </Text>
                        <Text style={styles.carGenre}>
                            <Text style={styles.type}>Genres: {"\n"}</Text>
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
        width: width -15,
        marginLeft: 8,
        height: 250,
        backgroundColor: 'hsla(341, 100%, 66%, 0.16)',
        borderRadius: 25,
        margin: 5
        
    },
    cardPic:{
        height: '100%',
        width: '50%',
        borderRadius: 20,
    },
    cardTitle:{
        marginLeft: '53%',
        marginTop: '-50%',
        color: 'white',
        fontFamily: 'playfaire'
    },
    type: {
        fontSize: 20,
        fontFamily: 'lobster2',
        color: 'cyan',
        textDecorationLine: 'underline',
      
    },
    carGenre: {
        marginTop: 15,
        marginLeft: '53%',
        color: 'white',
        fontFamily: 'playfaire'
    }
  
  })
export default AiringPreview;
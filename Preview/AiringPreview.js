
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const { width} = Dimensions.get('screen');

const AiringPreview = (props) =>{
    const {item} = props;
    return(
        <TouchableOpacity 
        onPress={()=>{
            props.navigation.navigate('Details',{item:item})
            console.log({item});
        }}
        >
            <View>
                <View style={styles.container}>
                        <Image source={{uri: item.image}}
                        resizeMode="contain"
                        style={styles.cardPic}
                        /> 
                        <Text style={styles.cardTitle}>
                            <Text style={styles.type}>Title: </Text>
                        { 
                        item.title ? (item.title.length > 20 ? item.title.slice(0, 40) + "..." : item.title) : true
                         }
                        </Text>
                        <Text style={styles.carGenre}>
                            <Text style={styles.type}>Genres: </Text>
                            {
                                item.genres +' '
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
        width: width,
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
        color: 'pink',
        fontWeight: 'bold'
    },
    type: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        textDecorationLine: 'underline'
      
    },
    carGenre: {
        marginTop: 15,
        marginLeft: '53%',
        color: 'cyan',
        fontWeight: 'bold',
    }
  
  })
export default AiringPreview;
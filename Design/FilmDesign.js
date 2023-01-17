import React from "react";
import { StyleSheet } from "react-native";

const FilmDesign = ({id, title, picture, link , date}) =>{
    return (
      <View style={styles.container}>
          <View style={styles.card}>
              <Image 
                style={styles.cardPic}
                source={{uri: picture}}
              />
          </View>
          <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{title.lenght > 10 ? title.substring(0, 10 - 3) 
                  +'...': title}</Text>
              <Text style={styles.cardDate}>Released: {date}</Text>
          </View>
      </View>
      
      
    )
  }

  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'gainsboro',
      height: 250,
      width: 390,
      borderColor: 'red',
      borderWidth: 1,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 20,
    },
    cardTitle:{
      marginTop: -150,
      fontWeight: 'bold',
      fontSize: 15
    },
    cardDate:{
      marginTop: -50
    },
    cardPic:{
      height: '100%',
      width: '50%',
      borderRadius: 20,
      alignItems:'center',
      justifyContent: 'center'
    },
    cardInfo:{
      marginLeft: 210,
    },
    

})

export default FilmDesign;
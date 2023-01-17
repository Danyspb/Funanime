import React from "react";
import { StyleSheet, View } from "react-native";



let url = 'https://gogoanime.consumet.org/popular';



const PopularAnime = () =>{

    const AnimePop = ()=>{
        let [isloading, setIsLoading] = useState(true)
        let [error, setError] = useState();
        let [response, setResponse] = useState();
    
        useEffect(()=> {
            fetch(url)
            .then((res) => res.json())
            .then(
                (result) =>{
                setIsLoading(false);
                setResponse(result);
                
                },
                (error) =>{
                    setIsLoading(false);
                    setError(error);
                }
              )
            
        }, []);
    
        const AnimePopDesign = ({id, title, picture, link , date}) =>{
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
        
        const GetAnime = () =>{
            if(isloading){
                return <ActivityIndicator  size={"large"}/>
            }
            
            return (
                <SafeAreaView style={styles.container}>
                    <FlatList
                        horizontal
                        data={response}
                        renderItem={({item}) => 
                        <FilmDesign key={item.animeId}  
                        title={item.animeTitle}
                        date={item.releasedDate}
                        picture={item.animeImg}
                        link={item.animeUrl} />
                        }
                        keyExtractor={item => item.animeId}
                    />
            </SafeAreaView>
              );
        }
    
    
        return (
          <View>
            {GetAnime()}
          </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default PopularAnime;
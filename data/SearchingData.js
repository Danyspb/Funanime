
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SearchPreview from "../Preview/SearchPreview";
import { ActivityIndicator, Text } from "react-native";
import { FlatList } from "react-native";
import { VStack, Input, Icon, NativeBaseProvider, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';
import useDebounce from "../utils/SearchUtility";

var {width} = Dimensions.get("screen");

const SearchData = () =>{

    const [result, setResult] = useState([]);
    const [search, setSearch] = useState(''); 
    const [loading, setLoading] = useState(false);
    const debounceSearch = useDebounce(search, 300);

    useEffect(()=>{
        async function fetchData(){
                setLoading(true);
                setResult([]);
                const data = await fetch(`https://api.consumet.org/anime/gogoanime/${debounceSearch}?page={number}`)
                .then(res => res.json());
                setResult(data.results);
                setLoading(false)
        }
        if(debounceSearch)fetchData()
    },[debounceSearch])

    const getSearchAnime = () =>{
       
        if(loading){
            return<View style={{marginBottom: 300}}>
                  <ActivityIndicator size={"large"} color={"#00ff00"}  />
                  <Text style={{color: 'white', fontWeight: 'bold', left:3}}>
                    Loading
                </Text>
            </View>
        }
        if(debounceSearch === ''){
            return <View style={styles.animecontain}>
                <LottieView  style={styles.animStyle}
                    autoPlay
                    loop
                    source={require('../assets/animation.json')}
                /> 
                <Text style={styles.textStyl}>Search Something !!!</Text>
            </View>
        }
        return(
            <View>
                <FlatList 
                    numColumns={3}
                    data={result}
                    renderItem={({item})=>
                    <SearchPreview 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    picture={item.image}
                    date={item.releaseDate}
                    type={item.subOrDub}
                    link={item.url}
                    /> 
                }
                />
            </View>
        )
    }

    return (
        <NativeBaseProvider>
            <Box style={{marginBottom: 65}}>
                <View style={styles.container}>
                    <VStack style={{marginBottom: 15}}>
                        <Input 
                            color="white"
                            width={width - 20}
                            placeholder="Search the title of the Anime" 
                            borderRadius="4" 
                            py="3" px="1" fontSize="14" 
                            InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />}
                            onChangeText={(text) =>setSearch(text)}
                            value={search}
                        /> 
                    </VStack>
                    {getSearchAnime()}
                    <SearchPreview /> 
                </View>
            </Box>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginTop: 20,
        alignItems:"center",
    }, 
    activityStyle:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: '#181D31',
    },
    animStyle: {
        width: 200,
        height: 200,
        backgroundColor: '#181D31'
    },
    animecontain:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        top: 90,
    },
    textStyl:{
        color: 'white',
        fontFamily: 'lobster2',
        fontSize: 25,
        marginBottom: 200,
        marginTop: 20,
    }


})

export default SearchData;
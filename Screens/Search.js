import { StyleSheet,  View } from "react-native";
import SearchData from "../data/SearchingData";

const Search = () =>{

    return(
        <View style={styles.container}>
            <SearchData /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181D31',
    },
    text:{
        color: '#F0E9D2'
    }
})

export default Search;


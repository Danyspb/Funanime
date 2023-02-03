import react, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";



const url = 'https://gogoanime.consumet.stream/recent-release';


const RecentAnimes = () =>{

    
    let [isloading, setIsloading] = useState(true);
    let [error, setError] = useState;
    let [response, setResponse] = useState();
    let [setSelection, Selection] = useState();

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) =>{
            setIsloading(false);
            setResponse(result);
            },
            (error) =>{
                setIsloading(false);
                setError(error);
            }
          )
    }, []);

    

}

const styles = StyleSheet.create({

})
export default RecentAnimes;
import { useEffect, useState } from "react";
import axios from 'axios';
import Spiner from "./Spiner";
import { useGif } from "../HOOks/useGif";
// 
// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


export function Random() {
//     const [gif, setGif] = useState('');
//     const [loading, setLoading] =useState(false);  

//     async function fetchData() {
//         setLoading(true);
//        const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
       
//        try {
//         const response = await axios.get(URL);
//         const gifData = response.data.data;
//         const gifUrl = gifData?.images?.downsized?.url;
        
//         if (gifUrl) {
//             setGif(gifUrl);
//         } else {
//             console.error('GIF URL not found in the response');
//         }
//     } catch (error) {
//         console.error("Error fetching the GIF", error);
//     }
//     setLoading(false);
// }
//     useEffect(()=>{
//         fetchData();
//     },[]);
 
    // function clickHandle() {
    //     fetchData();
    // }
    const {gif ,loading ,fetchData} =useGif();

    return (
        <div>
            <h1>Random Gif</h1>
          { loading ? <Spiner/> : <img src={gif} width="450" alt="Random Gif" />}
            <button onClick={()=>{fetchData()}}>Generate Gif</button>
        </div>
    );
}

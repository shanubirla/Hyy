import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export function useGif(tag = '') { // Provide a default value for tag
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag = '') { // Ensure tag has a default value
        setLoading(true);
        let URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        
        if (tag) {
            URL += `&tag=${tag}`;
        }

        try {
            const response = await axios.get(URL);
            const gifData = response.data.data;
            const gifUrl = gifData?.images?.downsized?.url;

            if (gifUrl) {
                setGif(gifUrl);
            } else {
                console.error('GIF URL not found in the response');
            }
        } catch (error) {
            console.error("Error fetching the GIF", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(tag); // Fetch data based on the tag
    }, [tag]);

    return { gif, loading, fetchData };
}

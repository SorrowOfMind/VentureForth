import axios from 'axios';
import {IBoundry} from '../models/interfaces';
  
export const getPlaces = async (type : string, {sw, ne} : IBoundry) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        },
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY_TRVL as string
        }});
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getWeather = async (lat : number, lng : number) => {
    try {
        const {data} = await axios.get(`'https://community-open-weather-map.p.rapidapi.com/find`, {params: {
            lon : lng,
            lat,
          },
          headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY_TRVL as string
          }})
          return data;
    } catch (err) {
        console.log(err);
    }
}
import axios from 'axios';
import {IBoundry} from '../models/interfaces';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  
export const getPlaces = async ({sw, ne} : IBoundry) => {
    try {
        // const {data: {data}} = await axios.get(url, {params: {
        //     bl_latitude: sw.lat,
        //     tr_latitude: ne.lat,
        //     bl_longitude: sw.lng,
        //     tr_longitude: ne.lng,
        // },
        // headers: {
        //     'content-type': 'application/json',
        //     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        //     'x-rapidapi-key': process.env.REACT_APP_API_KEY_TRVL as string
        // }});
        // return data;
    } catch (err) {
        console.log(err);
    }
}
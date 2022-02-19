import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY_TRVL as string
    }
  };
  
export const getPlaces = async () => {
    try {
        const {data: {data}} = await axios.get(url, options);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}
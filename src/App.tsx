import {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import TopBar from './components/TopBar/TopBar';
import Map from './components/Map/Map';
import List from './components/List/List';
import {getPlaces} from './api/index';
import {ICoordinates, IBoundry, IPlace} from './models/interfaces';

const App = (): JSX.Element =>  {
    const [places, setPlaces] = useState<Array<IPlace>>([]);
    const [filteredPlaces, setFilteredPlaces] = useState<Array<IPlace>>([]);
    const [mapClicked, setMapClicked] = useState(null);
    const [type, setType] = useState<string>('restaurants');
    const [rating, setRating] = useState<number>(0);
    const [coords, setCoords] = useState<ICoordinates>({lat: 0, lng: 0});
    const [boundry, setBoundry] = useState<IBoundry>({sw: {lat: '', lng: ''}, ne: {lat: '', lng: ''},});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => setCoords({lat: pos.coords.latitude, lng: pos.coords.longitude}));
    }, []);

    useEffect(() => {
        const filtered = places.filter(place => Number(place.rating) > Number(rating));
        setFilteredPlaces(filtered);
    }, [rating]);

    useEffect(() => {
        setIsLoading(true);
        getPlaces(type, boundry).then(res => {
            setPlaces(res);
            setFilteredPlaces([]);
            setIsLoading(false);
        });
    }, [coords, boundry]);

    return (
        <>
            <CssBaseline />
            <TopBar setCoords={setCoords}/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places} 
                        mapClicked={mapClicked} 
                        isLoading={isLoading} 
                        type={type} 
                        setType={setType}
                        rating={rating}
                        setRating={setRating}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords}
                        setBoundry={setBoundry}
                        setMapClicked = {setMapClicked}
                        places={filteredPlaces.length ? filteredPlaces : places}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;

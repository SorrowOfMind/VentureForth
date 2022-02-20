import {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import TopBar from './components/TopBar/TopBar';
import Map from './components/Map/Map';
import List from './components/List/List';
import {getPlaces} from './api/index';
import {ICoordinates, IBoundry} from './models/interfaces';

const App = (): JSX.Element =>  {
    const [places, setPlaces] = useState([]);
    const [mapClicked, setMapClicked] = useState(null);

    const [coords, setCoords] = useState<ICoordinates>({lat: 0, lng: 0});
    const [boundry, setBoundry] = useState<IBoundry>({sw: {lat: '', lng: ''}, ne: {lat: '', lng: ''},});

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => setCoords({lat: pos.coords.latitude, lng: pos.coords.longitude}));
    }, [])

    useEffect(() => {
        setIsLoading(true);
        getPlaces(boundry).then(res => {
            setPlaces(res);
            setIsLoading(false);
        });
    }, [coords, boundry]);

    return (
        <>
            <CssBaseline />
            <TopBar />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places} mapClicked={mapClicked} isLoading={isLoading}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords}
                        setBoundry={setBoundry}
                        setMapClicked = {setMapClicked}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;

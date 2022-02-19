import {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import TopBar from './components/TopBar/TopBar';
import Map from './components/Map/Map';
import List from './components/List/List';
import {getPlaces} from './api/index';
import {IPlace, ICoordinates} from './models/interfaces';

const App = (): JSX.Element =>  {
    const [places, setPlaces] = useState<IPlace[]>([]);

    const [coords, setCoords] = useState<ICoordinates>({lat: 0, lng: 0});
    const [boundry, setBoundry] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => setCoords({lat: pos.coords.latitude, lng: pos.coords.longitude}));
    }, [])

    useEffect(() => {
        getPlaces().then(res => setPlaces(res));
    }, [coords, boundry]);

    return (
        <>
            <CssBaseline />
            <TopBar />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords}
                        setBoundry={setBoundry}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;

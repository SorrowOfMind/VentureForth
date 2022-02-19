import {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import TopBar from './components/TopBar/TopBar';
import Map from './components/Map/Map';
import List from './components/List/List';
import {getPlaces} from './api/index';
import {IPlace} from './models/interfaces';

const App = (): JSX.Element =>  {
    const [places, setPlaces] = useState<IPlace[]>([]);

    useEffect(() => {
        getPlaces().then(res => setPlaces(res));
    }, []);

    return (
        <>
            <CssBaseline />
            <TopBar />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </>
    )
}

export default App;

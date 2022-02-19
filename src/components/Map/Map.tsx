import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './style';
import { ICoordinates } from '../../models/interfaces';

const Map = (): JSX.Element =>  {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coords: ICoordinates = {lat: 0, lng: 0};

    return (
        <section className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: ''}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={}
                // onChange={}
                // onChildClick={}
            >

            </GoogleMapReact>
        </section>
    )
}

export default Map

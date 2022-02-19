import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './style';
import {IMapProps } from '../../models/interfaces';
import React from 'react';

const Map: React.FC<IMapProps> = ({coords, setCoords, setBoundry}): JSX.Element =>  {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
    return (
        <section className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY_MAP as string}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={}
                onChange={(e) => {
                    setCoords({lat: e.center.lat, lng: e.center.lng});
                    setBoundry({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                // onChildClick={}
            >

            </GoogleMapReact>
        </section>
    )
}

export default Map

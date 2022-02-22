import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import {IMapProps, IPlace } from '../../models/interfaces';
import React from 'react';

declare module 'react' {
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		lat?: number;
        lng?: number;
	}
}

const Map: React.FC<IMapProps> = ({coords, setCoords, setBoundry, places, setMapClicked, weather}): JSX.Element =>  {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');
    return (
        <section className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY_MAP as string}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{disableDefaultUI: true, zoomControl: true}}
                onChange={(e) => {
                    setCoords({lat: e.center.lat, lng: e.center.lng});
                    setBoundry({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={child => setMapClicked(child)}
            >
                {places?.map((place: IPlace, idx: React.Key) => (
                    <div 
                       className={classes.markerContainer} 
                       lat={Number(place.latitude)}
                       lng={Number(place.longitude)}
                       key={idx}
                   >
                       { !isDesktop
                           ? (<LocationOnOutlinedIcon color="primary" fontSize="large" />)
                           : (<Paper className={classes.paper} elevation={3}>
                               <Typography variant="subtitle2" gutterBottom>{place.name}</Typography>
                               <img 
                                   src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
                                   alt={place.name} 
                                   className={classes.pointer}
                               />
                               <Rating size="small" value={Number(place.rating)} readOnly />
                           </Paper>
                           )}
                   </div>)
                )}
                {weather?.list?.map((data : any, idx : React.Key) => (
                    <div key={idx} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                    </div>
                ))}
            </GoogleMapReact>
        </section>
    )
}

export default Map

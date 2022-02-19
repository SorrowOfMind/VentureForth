import React, {useState} from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid, Typography, CircularProgress } from '@material-ui/core';
import useStyles from './style';
import {IPlace} from '../../models/interfaces';
import Details from '../Details/Details';

const List = ({places} : any): JSX.Element => {
    const [type, setType] = useState<string>('restaurants');
    const [rating, setRating] = useState<number>(0);

    const classes = useStyles();
    
    return (
        <section className={classes.container}>
            <Typography variant="h4">Food, Hotels & Attractions</Typography>

            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType((e.target as HTMLInputElement).value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value as number)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>&gt; 3.0</MenuItem>
                    <MenuItem value={4}>&gt; 4.0</MenuItem>
                    <MenuItem value={4.5}>&gt; 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place: IPlace, idx: React.Key) => (
                    <Grid item key={idx} xs={12}>
                        <Details {...place} />
                    </Grid>
                ))}
            </Grid>

        </section>
    )
}

export default List;

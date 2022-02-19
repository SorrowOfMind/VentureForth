import React, {useState} from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid, Typography, CircularProgress } from '@material-ui/core';
import useStyles from './style';
import {ISpot} from '../../models/interfaces';
import Details from '../Details/Details';

const List = (): JSX.Element => {
    const [type, setType] = useState<string>('restaurants');
    const [rating, setRating] = useState<number>(0);

    const classes = useStyles();

    const spots = [
        {name: "Some spot"},
        {name: "Some spot2"},
        {name: "Some spot3"},
        {name: "Some spot4"},
        {name: "Some spot5"}
    ];
    
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
                {spots?.map((spot, idx) => (
                    <Grid item key={idx} xs={12}>
                        <Details {...spot} />
                    </Grid>
                ))}
            </Grid>

        </section>
    )
}

export default List;

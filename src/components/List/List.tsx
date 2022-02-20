import React, {useState, useEffect, createRef} from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid, Typography, CircularProgress } from '@material-ui/core';
import useStyles from './style';
import {IPlace} from '../../models/interfaces';
import Details from '../Details/Details';

const List = ({places, mapClicked, isLoading} : any): JSX.Element => {
    const [type, setType] = useState<string>('restaurants');
    const [rating, setRating] = useState<number>(0);
    const [elementsRefs, setElementsRefs] = useState<Array<any>>([]);

    const classes = useStyles();

    useEffect(() => {
        const refs: Array<any> = Array(places?.length).fill(0).map((_, idx) => elementsRefs[idx] || createRef());
        setElementsRefs(refs);
    }, [places]);
    
    return (
        <section className={classes.container}>
            <Typography variant="h4">Food, Hotels & Attractions</Typography>
            {isLoading 
                ? (<div className={classes.loading}>
                    <CircularProgress size="4rem"/>
                  </div>)
                : (<>
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
                        {places?.map((place: IPlace, idx: number) => (
                            <Grid item key={idx} xs={12}>
                                <Details 
                                    place={place}
                                    selected={Number(mapClicked) == idx}
                                    refProp={elementsRefs[idx]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                 </>)
            }

        </section>
    )
}

export default List;

import React from 'react';
import { Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Chip  } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import {IPlace} from '../../models/interfaces';

const Details: React.FC<IPlace | any> = (props): JSX.Element => {
    const classes = useStyles();

    if (props.selected)
        props.refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"});
    
    return (
        <Card elevation={6}>
            <CardMedia 
                style={{height: 350}}
                image={props.photo ? props.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{props.name}</Typography>
                <Rating value={Number(props.rating)} readOnly />
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{props.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{props.ranking}</Typography>
                </Box>
                {props?.awards?.map((award : object | any) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {props?.cuisine?.map(({name} : string | any) => (<Chip key={name} size="small" label={name} className={classes.chip} />))}
                {props?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {props.address}
                    </Typography>
                )}
                {props?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {props.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(props.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(props.website_url, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Details

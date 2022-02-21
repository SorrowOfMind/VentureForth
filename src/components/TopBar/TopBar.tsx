import React, {useState} from 'react';
import {Autocomplete} from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import useStyles from './style';
import {ICoordinates} from '../../models/interfaces';

const TopBar: React.FC<any> = ({setCoords}): JSX.Element => {
    const [autocomplete, setAutocomplete] = useState<any>(null); 
    const classes = useStyles();

    const handleOnLoad = (autocomp: any) => setAutocomplete(autocomp);
    const handleOnPlaceChange = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoords({lat, lng});
    }

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    VentureForth
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        your personal travel advisor
                    </Typography>
                    <Autocomplete onLoad={handleOnLoad} onPlaceChanged={handleOnPlaceChange}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="search..." classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;

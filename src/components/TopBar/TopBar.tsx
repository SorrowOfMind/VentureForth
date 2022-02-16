import React from 'react';
import {Autocomplete} from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import useStyles from './style';

const TopBar = (): JSX.Element => {
    const classes = useStyles();
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
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="search..." classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;

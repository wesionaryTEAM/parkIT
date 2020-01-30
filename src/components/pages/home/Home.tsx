import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import locationIcon from '../../../assests/images/location.png'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import carIcon from '../../../assests/images/car.png';
import busIcon from '../../../assests/images/bus.png';
import bikeIcon from '../../../assests/images/bike.png';
import happyIcon from '../../../assests/images/happy.png';
import rentIcon from '../../../assests/images/rent.png';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ButtonGroup from "@material-ui/core/ButtonGroup";
const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(1)
    },
    box: {
        textAlign: "left"
    },
    titleText: {
        padding: "10px 10px 10px 0px"
    },
    happyIcon: {
        width: 60,
        height: 60
    },
    button:{
        textTransform: "none"
    }
}));
function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Paper variant="elevation" className={classes.paper}>
                <Grid container alignItems="center">
                    <Grid item sm={1} md={1}>
                        <img src={locationIcon} />
                    </Grid>
                    
                    <Grid item sm={10} md={10}>
                        <Typography variant="caption" color="textSecondary">You are near</Typography>
                        <Typography variant="body2">Ganesh Mandir, Devnagar, Shankhamul, Patan, Lalitpur</Typography>
                    </Grid>
                    <Grid item sm={1} md={1}>
                        <ArrowForwardIosIcon />
                    </Grid>
                </Grid>
            </Paper>
            <Paper variant="elevation" className={classes.paper}>
                <Grid container alignItems="center">
                    <Grid item md={1}>
                        <img className={classes.happyIcon} src={bikeIcon} />
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="body1" >Search for a parking space</Typography>
                        <Typography variant="caption" color="textSecondary">for bike, car, bicycle and heavy vehicles</Typography>

                    </Grid>
                    <Grid item md={1}>
                        <ArrowForwardIosIcon />
                    </Grid>
                </Grid>
            </Paper>
            <Paper variant="elevation" className={classes.paper}>
                <Grid container alignItems="center">
                    <Grid item md={1}>
                        <img className={classes.happyIcon} src={busIcon} />
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant="body1" >Rent a parking space</Typography>
                        <Typography variant="caption" color="textSecondary">such that others can find and park in your space. You will obviously earn money :) </Typography>

                    </Grid>
                    <Grid item md={1}>
                        <ArrowForwardIosIcon />
                    </Grid>
                </Grid>
            </Paper>
            

        </Box >
    )

}
export default Home;
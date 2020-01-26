import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../assests/images/logo.png';
import { Paper } from '@material-ui/core';
import { ButtonComponent } from '../Layouts/ButtonComponent';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(9),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(6),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loginCard: {
        width: "100%"
    },
    paperText: {
        color: "#41a886"
    }
}));


function Register() {
    const classes = useStyles();
    return (
        <Container
            component="main"
            className={classes.container}
            maxWidth="md">
            <CssBaseline />
            <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                className={classes.loginCard}
                spacing={6}>
                <Grid
                    item
                    md={4}>
                    <img src={logo} alt="Parkit Logo" />

                </Grid>
                <Grid
                    item
                    md={7}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.paperText} variant="h5">
                            Sign Up
                    </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth

                                label="Full Name"
                                name="full_name"
                                autoComplete="full_name"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth

                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"


                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="confirmPassword"


                            />

                            <ButtonComponent
                                primary
                                size="large"
                                type="submit">
                                Sign In
                                </ButtonComponent>
                            <Grid container>

                                <Grid item >
                                    <Link to="/">
                                        {"Already have account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    )
}
export default Register;
import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../assests/images/logo.png';
import { Paper } from '@material-ui/core';
import { ButtonComponent } from './ButtonComponent';

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
    paperText:{
        color: "#41a886"
    }
}));


function Login() {
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
                            Sign in
                    </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
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
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel

                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <ButtonComponent
                                primary
                                size="large"
                                type="submit">
                                Sign In
                                </ButtonComponent>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
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
export default Login;
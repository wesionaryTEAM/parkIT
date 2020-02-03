import React, { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../assests/images/logo.png';
import { Paper, Box } from '@material-ui/core';
import { ButtonComponent } from '../Layouts/ButtonComponent';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userDataProps } from '../../interface/UserInterface'
import validator from "validator";
import backgroundImage from '../../assests/images/carpark.png'
//redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(9),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
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
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: '10px'
    },
    box: {
        background: "url(" + backgroundImage + ")",
        padding: theme.spacing(10)
    },
    title: {
        color: "#fff",

    },
    label: {
        color: '#636161'
    },
    textRight: {
        textAlign: 'right',

    },
    textColor: {
        color: '#545454'
    },
    link: {
        fontSize: '15px',
        textDecoration: 'none',
        color: '#545454',
        "&:hover": {
            color: "#4e5bb9"
        }
    },
    image: {
        width: '80%'
    }
}));


interface formError extends userDataProps {
    message: string;
}

function Login(props: any) {

    const classes = useStyles();
    const [values, setValues] = useState({
        email: "",
        password: ""
    } as userDataProps);
    const [errors, setErrors] = useState({} as formError);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (props.UI.errors) {
            setErrors(props.UI.errors);


        }
        setLoading(props.UI.loading);



    }, [props.UI])


    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }
        const userData = {
            email: values.email,
            password: values.password,

        };
        props.loginUser(userData, props.history);
    }

    const handleChange = (e: any) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};

        if (!validator.trim(values.email)) {
            errors.email = "Email field is required!";
        }

        if (!validator.trim(values.password)) {
            errors.password = "Password field is required!";
        }

        handleErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleErrors = (newErrors: { [key: string]: string }) => {
        setErrors(errors => ({
            ...errors,
            ...newErrors
        }));
    };
    return (
        <Box>
            <Box className={classes.box}>
                <Typography variant="h4" className={classes.title}>
                    <Box fontWeight={600} letterSpacing={3}>
                        SIGN IN
                    </Box>
                </Typography>
            </Box>
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
                    spacing={3}>
                    <Grid
                        item
                        md={3}>
                        <img className={classes.image} src={logo} alt="Parkit Logo" />
                    </Grid>
                    <Grid item md={9}>
                        <Paper className={classes.paper}>
                            <Box className={classes.form}>
                                <TextField
                                    variant="outlined"
                                    margin="none"
                                    value={values.email}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    helperText={errors.email}
                                    error={errors.email ? true : false}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    value={values.password}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    onChange={handleChange}
                                    helperText={errors.password}
                                    error={errors.password ? true : false}
                                />
                                {errors.message && (
                                    <Typography variant="body2" className={classes.customError}>
                                        {errors.message}
                                    </Typography>
                                )}
                                <Grid container>
                                    <Grid item sm={6} md={6}>
                                        <FormControlLabel
                                            className={classes.textColor}
                                            control={
                                                <Checkbox value="remember" color="primary" />
                                            }
                                            label="Remember me"
                                        />
                                    </Grid>
                                    <Grid item sm={6} md={6} className={classes.textRight}>
                                        <Link to="#" className={classes.link}>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                </Grid>
                                <ButtonComponent
                                    primary
                                    size="large"
                                    type="submit"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    loading={loading}>
                                    Sign In

                                </ButtonComponent>
                                <Typography variant="h6" color="textSecondary" align="center">
                                    OR
                                </Typography>
                                <Typography align="center">
                                    <Link to="/register" className={classes.link}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container >
        </Box>
    )
}

//component ma state ma vako data dinxa
const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI

});

//component ma actions function haru provide garxa
const mapActionsToProps = {
    loginUser
};
export default connect(mapStateToProps, mapActionsToProps)(Login)
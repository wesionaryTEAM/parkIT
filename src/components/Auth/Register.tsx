import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../assests/images/logo.png';
import { Paper, Box } from '@material-ui/core';
import { ButtonComponent } from '../Layouts/ButtonComponent';
import { Link, useHistory } from 'react-router-dom'
import { userDataProps } from '../../interface/UserInterface'
import validator from "validator";
import backgroundImage from '../../assests/images/carpark.png'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../redux/actions/userActions'

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


interface profileData extends userDataProps {
    firstname: string;
    lastname: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors extends profileData {
    errors: string;
}

function Register(props: userDataProps) {

    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        confirmPassword: ""
    } as profileData);
    const [errors, setErrors] = useState({} as FormErrors);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        clearErrors();
        if (!validateForm()) {
            setLoading(false);
            return;
        }

        const userData = {
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            firstname: values.firstname,
            lastname: values.lastname
        }

        dispatch(userRegister(userData, history))
    }

    const clearErrors = () => {
        const errors: { [key: string]: string } = {};
        errors.email = "";
        errors.password = "";
        handleErrors(errors);
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

        if (!validator.trim(values.confirmPassword)) {
            errors.confirmPassword = "Password field is required!";
        }

        if (!validator.trim(values.firstname)) {
            errors.firstname = "Firstname is required!";
        }

        if (!validator.trim(values.lastname)) {
            errors.lastname = "Lastname is required!";
        }

        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password not matched!";
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
                        REGISTER
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
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            value={values.firstname}
                                            fullWidth
                                            id="firstname"
                                            label="First Name*"
                                            name="firstname"
                                            type="text"
                                            onChange={handleChange}
                                            helperText={errors.firstname}
                                            error={errors.firstname ? true : false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            value={values.lastname}
                                            fullWidth
                                            id="lastname"
                                            label="Last Name*"
                                            name="lastname"
                                            type="text"
                                            onChange={handleChange}
                                            helperText={errors.lastname}
                                            error={errors.lastname ? true : false}
                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    value={values.email}
                                    fullWidth
                                    id="email"
                                    label="Email*"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    helperText={errors.email}
                                    error={errors.email ? true : false}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    value={values.password}
                                    fullWidth
                                    id="password"
                                    label="Password*"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    helperText={errors.password}
                                    error={errors.password ? true : false}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    value={values.confirmPassword}
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password*"
                                    type="password"
                                    onChange={handleChange}
                                    helperText={errors.confirmPassword}
                                    error={errors.confirmPassword ? true : false}
                                />
                                <ButtonComponent
                                    primary
                                    size="large"
                                    type="submit"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    loading={loading}>
                                    Register
                                </ButtonComponent>
                                <Typography variant="h6" color="textSecondary" align="center">
                                    OR
                                </Typography>
                                <Typography align="center">
                                    <Link to="/" className={classes.link}>
                                        {"Already have an account? Sign in"}
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
export default Register;
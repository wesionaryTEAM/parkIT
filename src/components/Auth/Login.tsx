import React, { useContext, useState } from "react";
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
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userDataProps } from '../../interface/UserInterface'
import validator from "validator";
import axios from 'axios'

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
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: '10px'
    },


}));


interface formError extends userDataProps {
    message: string;


}



function Login(props: userDataProps) {
   
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [values, setValues] = useState({
        email: "",
        password: ""
    } as userDataProps);
    const [errors, setErrors] = useState({} as formError);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        // if (!validateForm()) {
        //     setLoading(false);
        //     return;
        // }

        const userData = {
            email: values.email,
            password: values.password,
            
        }

        axios.post('login',userData)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('token', `Bearer ${res.data.token}`);
                setLoading(false);
                history.push('/');

            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data);
                setLoading(false);
               

            });



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
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
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
                                </Typography>)}



                            <FormControlLabel

                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <ButtonComponent
                                primary
                                size="large"
                                type="submit"
                                disabled={loading}
                                loading={loading}
                            >
                                Sign In

                                </ButtonComponent>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="#">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/register" >
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
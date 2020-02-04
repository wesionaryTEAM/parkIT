import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DateFnsUtils from '@date-io/date-fns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import validator from "validator";
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { ButtonComponent } from '../../Layouts/ButtonComponent';
import { userUpdateProfile } from '../../../redux/actions/userActions';
import { useDispatch, useSelector, } from 'react-redux';
import { useEffect } from 'react'



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "100%",
  },

  photo: {
    width: 100,
    height: 100,
    margin: "auto"
  },
  inputFile: {
    display: "none"
  },
  cloudIcon: {
    paddingRight: 5
  },
  uploadButton: {
    marginLeft: 5
  },
  photoErrorText: {
    color: theme.palette.error.main,
    marginLeft: 5
  },
  title: {
    padding: 7
  }
}));


interface ProfileFormData {
  firstName: string;
  lastName: string;
  name: string;
  photoURL: string;
  gender: string;
  birthday: string;
  city: string;
  province: string;
  phone: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  newPhotoURL: string;
  newPhotoObj: any;
}

interface FormError extends ProfileFormData {
  formError: string;
}

interface state {
  user: any,
  UI: any
}


function ProfileForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    name: "",
    photoURL: "",
    gender: "",
    birthday: "",
    city: "",
    province: "",
    country: "",
    phone: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [errors, setErrors] = useState({} as FormError);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const UI = useSelector((state: state) => state.UI)
  const user = useSelector((state: state) => state.user)


  //functions

  useEffect(() => {
    if (UI.errors) {
      setErrors(UI.errors);
    }
    setLoading(UI.loading);
  }, [UI])

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    } else {
      dispatch(userUpdateProfile(values));
    }
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!validator.trim(values.firstName)) {
      errors.firstName = "First Name is required!";
    }

    if (!validator.trim(values.lastName)) {
      errors.lastName = "Last Name is required!";
    }

    if (!validator.trim(values.gender)) {
      errors.gender = "Gender is required!";
    }

    if (!validator.trim(values.phone)) {
      errors.phone = "Phone Number is required!";
    }

    if (!validator.trim(values.city)) {
      errors.city = "City is required!";
    }

    if (!validator.trim(values.province)) {
      errors.province = "Province is required!";
    }

    handleErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handleChange = (event: any) => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const handleErrors = (newErrors: { [key: string]: string }) => {
    setErrors(errors => ({
      ...errors,
      ...newErrors
    }));
  };

  return (
    <Box
      component="main"
      maxWidth="md">

      <Typography
        className={classes.title}
        variant="h6"
        align="left"
        color="primary">Your Profile</Typography>

      <Grid
        container
        className={classes.mainGrid}
        justify="center"
        alignItems="center"
        spacing={1}>

        <Grid
          container
          alignItems="center"
          justify="center"
          xs={12}
          sm={12}
          md={12}>

          <Grid
            item
            md={3}
            sm={12}
            xs={12}
            justify="center">

            <Avatar
              alt={values.name}
              src="A"
              className={classes.photo} />

            <input
              type="file"
              name="photoURL"
              id="photo"
              accept="image/*"
              className={classes.inputFile} />

            <label htmlFor="photo">
              <Button
                color="primary"
                size="small"
                component="span"
                className={classes.uploadButton}>
                <CloudUploadIcon className={classes.cloudIcon} />
                Select image
                </Button>

              {errors.newPhotoObj && (
                <FormHelperText className={classes.photoErrorText} error>
                  {errors.newPhotoObj}
                </FormHelperText>
              )}

            </label>
          </Grid>

          <Grid item xs={12} sm={12} md={9}>

            <TextField
              variant="outlined"
              margin="normal"
              value={values.firstName}
              fullWidth
              label="First Name*"
              name="firstName"
              type="text"
              onChange={handleChange}
              helperText={errors.firstName}
              error={!!errors.firstName} />

            <TextField
              variant="outlined"
              margin="normal"
              value={values.lastName}
              fullWidth
              label="Last Name*"
              name="lastName"
              type="text"
              onChange={handleChange}
              helperText={errors.lastName}
              error={!!errors.lastName}
            />

          </Grid>

        </Grid>

        <Grid container spacing={1} xs={12} sm={12} md={12}>

          <Grid item xs={12} sm={12} md={12}>

            <FormControl
              fullWidth
              error={!!errors.gender} margin="normal">

              <Typography align="left" color="textSecondary">Gender *</Typography>

              <RadioGroup
                aria-label="gender"
                name="gender"
                onChange={handleChange}
                value={values.gender}
                row={true}>

                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />

                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                />

                <FormControlLabel
                  value="noAnswer"
                  control={<Radio color="primary" />}
                  label="No answer"
                />

              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>

              <KeyboardDatePicker
                margin="normal"
                fullWidth
                inputVariant="outlined"
                label="Birthday *"
                format="yyyy/MM/dd"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />

            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              variant="outlined"
              margin="normal"
              value={values.phone}
              fullWidth
              label="Phone Number *"
              name="phone"
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">+977</InputAdornment>,
              }}
              type="number"
              helperText={errors.phone}
              error={!!errors.phone}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              variant="outlined"
              margin="normal"
              value={values.city}
              fullWidth
              label="City *"
              onChange={handleChange}
              name="city"
              type="text"
              helperText={errors.city}
              error={!!errors.city}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>

            <TextField
              variant="outlined"
              margin="normal"
              value={values.province}
              fullWidth
              onChange={handleChange}
              label="Province *"
              name="province"
              type="text"
              helperText={errors.province}
              error={!!errors.province}
            />

          </Grid>

          <Grid item xs={12} sm={12} md={6}>

            <TextField
              variant="outlined"
              margin="normal"
              value={values.emergencyContactName}
              onChange={handleChange}
              fullWidth
              label="Emergency Contact Name *"
              name="emergencyContactName"
              type="text"
              helperText={errors.emergencyContactName}
              error={!!errors.emergencyContactName}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>

            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              value={values.emergencyContactNumber}
              fullWidth
              id="emergencyContactNumber"
              label="Emergency Contact Phone*"
              name="emergencyContactNumber"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">+977</InputAdornment>,
              }}
              helperText={errors.emergencyContactNumber}
              error={!!errors.emergencyContactNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ButtonComponent
              primary
              size="large"
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              loading={loading}>
              Update

            </ButtonComponent>
          </Grid>

        </Grid>

      </Grid>
    </Box >

  )
}

export default ProfileForm;
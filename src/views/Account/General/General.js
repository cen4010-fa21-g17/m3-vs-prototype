import React from 'react';
import { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Page from '../components/Page';
import Main from 'layouts/Main';

import axios from 'axios'
import { useContext } from 'react'
import { SnackBarContext } from 'contexts/SnackBarContext'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  // bio: yup
  //   .string()
  //   .trim()
  //   .max(500, 'Should be less than 500 chars'),
  // country: yup
  //   .string()
  //   .trim()
  //   .min(2, 'Please enter a valid name')
  //   .max(80, 'Please enter a valid name')
  //   .required('Please specify your country name'),
  // city: yup
  //   .string()
  //   .trim()
  //   .min(2, 'Please enter a valid name')
  //   .max(80, 'Please enter a valid name')
  //   .required('Please specify your city name'),
  // address: yup
  //   .string()
  //   .required('Please specify your address')
  //   .min(2, 'Please enter a valid address')
  //   .max(200, 'Please enter a valid address'),
});

const General = () => {

  const snackbar = useContext(SnackBarContext)

  const initialValues = {
    firstName: '',
    lastName: '',
    // bio: '',
    email: '',
    // country: '',
    // city: '',
    // address: '',
  };

  const onSubmit = (values) => {

    console.log(values.firstName)
    //return values;
    const user = JSON.parse(window.localStorage.getItem('user'))
    
    axios.put(`/api/user/${user._id}/account`, {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    }).then(response => {
      console.log(response.data)
      if (response.status >= 200 && response.status < 300) {
        console.log('info updated successfully')
        snackbar.showAlert('success', 'Information updated successfully')
      }
    }).catch(error => {
      console.log(error)
      snackbar.showAlert('error', 'Could not update information')
    })
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Main>
      <Page>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Change your private information
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Please read our{' '}
            <Link color={'primary'} href={'/company-terms'} underline={'none'}>
              terms of use
            </Link>{' '}
            to be informed how we manage your private data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your first name
                </Typography>
                <TextField
                  label="First name *"
                  variant="outlined"
                  name={'firstName'}
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your last name
                </Typography>
                <TextField
                  label="Last name *"
                  variant="outlined"
                  name={'lastName'}
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              {/* <Grid item xs={12}> */}
                {/* <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Bio
                </Typography> */}
                {/* <TextField
                  label="Bio"
                  variant="outlined"
                  name={'bio'}
                  multiline
                  rows={5}
                  fullWidth
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                /> */}
              {/* </Grid> */}
              <Grid item xs={12}>
                <Divider />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Country
                </Typography>
                <TextField
                  label="Country *"
                  variant="outlined"
                  name={'country'}
                  fullWidth
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  City
                </Typography>
                <TextField
                  label="City *"
                  variant="outlined"
                  name={'city'}
                  fullWidth
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your address
                </Typography>
                <TextField
                  label="Address *"
                  variant="outlined"
                  name={'address'}
                  fullWidth
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid> */}
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      You may also consider to update your{' '}
                      <Link
                        color={'primary'}
                        href={'/account-billing'}
                        underline={'none'}
                      >
                        billing information.
                      </Link>
                    </Typography>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Page>
    </Main>
  );
};

export default General;

import React from 'react';
import Main from 'layouts/Main'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar  from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useContext } from 'react'
import { SnackBarContext } from 'contexts/SnackBarContext'


const drawerWidth = 240

const PortfolioPage = () => {

  const snackbar = useContext(SnackBarContext)

  const [state, setState] = React.useState({
    biography: "",
    goal1: "",
    goal2: "",
    goal3: "",
    goal4: "",
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state)
  }

  // Create a new experience and store it in the database
  const savePortfolio = () => {

    // Retrieve user data from browser local storage
    const userData = window.localStorage.getItem('user')
    const jsonUserData = JSON.parse(userData)

    // Make a PUT request to the server with the correspondent 
    // experience data to be stored in the database
    axios.put(`/api/user/${jsonUserData._id}/portfolio`, {
       biography: state.biography,
       goal1: state.goal1,
       goal2: state.goal2,
       goal3: state.goal3,
       goal4: state.goal4
    }).then(response => {
      // If the experience was successfully created, then notify the user
      console.log("hello " + response.statusText)
      if (response.statusText == "OK") {
        snackbar.showAlert('success', ' Information saved successfully')
      }
    }).catch(error => {
      // Notify the user if an error occured
      console.log(error)
      snackbar.showAlert('error', 'Error saving information')
    })
  }
    

  return (
      <Main>
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
        <CssBaseline />
        <Toolbar/>


         
          <Box
            component="form"
            width={1/2}
            
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            noValidate
            autoComplete="off"
          >
         
          <Typography variant="h4">
            Edit Biography and Goals
          </Typography>

            <Toolbar/>
            <TextField 
              id="goal1" 
              name="goal1"
              label="Goal" 
              variant="standard" 
              fullWidth
              onChange={handleChange}
              value={state.goal1}
            />

            <Toolbar />

            <TextField 
              id="goal2" 
              name="goal2"
              label="Goal" 
              variant="standard" 
              fullWidth
              onChange={handleChange}
              value={state.goal2}
            />

            <Toolbar />

            <TextField 
              id="goal3" 
              name="goal3"
              label="Goal" 
              variant="standard" 
              fullWidth
              onChange={handleChange}
              value={state.goal3}
            />

            <Toolbar/>

            <TextField 
              id="goal4" 
              name="goal4"
              label="Goal" 
              variant="standard" 
              fullWidth
              onChange={handleChange}
              value={state.goal4}
            />

            <Toolbar/>

            <TextField 
              id="biography" 
              name="biography"
              label="Enter biography" 
              variant="outlined" 
              multiline
              rows={20}
              fullWidth
              onChange={handleChange}
              value={state.biography}
            />

            <Toolbar />
            <Button onClick={savePortfolio} color="primary" variant="outlined">Save</Button>
            <Button href="/portfolio-page" color="primary" variant="outlined">My Profile</Button>
          </Box>
          
          <Toolbar />
        </Box>
      </Main>
  );
};

export default PortfolioPage;
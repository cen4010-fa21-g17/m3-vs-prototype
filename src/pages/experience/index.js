import React from 'react';
import Main from 'layouts/Main'

import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar  from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'

import JourneySideBar from 'components/JourneySideBar'

import axios from 'axios'

import { useContext } from 'react'
import { SnackBarContext } from 'contexts/SnackBarContext'


const drawerWidth = 240

const ExperiencePage = () => {

  const snackbar = useContext(SnackBarContext)

  const [state, setState] = React.useState({
    title: "",
    date: "",
    summary: "",
    content: "",
    skills: ""
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state)
  }

  // Create a new experience and store it in the database
  const saveExperience = () => {

    // Retrieve user data from browser local storage
    const userData = window.localStorage.getItem('user')
    const jsonUserData = JSON.parse(userData)

    // Make a POST request to the server with the correspondent 
    // experience data to be stored in the database
    axios.post(`/api/user/${jsonUserData._id}/experience`, {
       title: state.title,
       date: state.date,
       summary: state.summary,
       content: state.content,
       skills: state.skills
    }).then(response => {
      // If the experience was successfully created, then notify the user
      if (response.statusText == "Created") {
        snackbar.showAlert('success', 'Experience created successfully')
      }
    }).catch(error => {
      // Notify the user if an error occured
      console.log(error)
      snackbar.showAlert('error', 'Error creating experience')
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

        <JourneySideBar />

         
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
            Add Experience
          </Typography>

            <Toolbar/>
            <TextField 
              id="title" 
              name="title"
              label="Title" 
              variant="standard" 
              fullWidth
              onChange={handleChange}
              value={state.title}
            />

            <Toolbar />

            <TextField 
              id="date" 
              name="date"
              label="yyyy/mm/dd" 
              variant="standard" 
              fullWidth
              onChange={handleChange}
              value={state.date}
            />

            <Toolbar />            

            <TextField 
              id="skills" 
              name="skills"
              label="Skills" 
              variant="standard" 
              fullWidth
              onChange={handleChange}
              value={state.skills}
            />

            <Toolbar />

            <TextField 
              id="summary"
              name="summary"
              label="Summary" 
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              onChange={handleChange}
              value={state.summary}
            />

            <Toolbar/>

            <TextField 
              id="content" 
              name="content"
              label="Describe your Experience" 
              variant="outlined" 
              multiline
              rows={20}
              fullWidth
              onChange={handleChange}
              value={state.content}
            />

            <Toolbar />
            <Button onClick={saveExperience} color="primary" variant="outlined">Save</Button>
          </Box>
          
          <Toolbar />
        </Box>
      </Main>
  );
};

export default ExperiencePage;
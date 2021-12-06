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
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useContext } from 'react'
import { SnackBarContext } from 'contexts/SnackBarContext'
import { Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const drawerWidth = 240

const PortfolioPage = () => {
    const snackbar = useContext(SnackBarContext)
    const router = useRouter()

    const user = JSON.parse(window.localStorage.getItem('user'))

    const [state, setState] = React.useState({
      biography: "",
      goal1: "",
      goal2: "",
      goal3: "",
      goal4: "",
    });

    console.log(state)

    useEffect(async () => {
        try {
            const userData = JSON.parse(window.localStorage.getItem('user'))
            const res = await axios.get(`/api/user/${router.query.id}/portfolio/`)
            console.log(res)
            setState(res.data)
        } catch (err) {
            console.log(err)
        }
    }, [])

    console.log(state)



  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state)
  }


  const savePortfolio = () => {
    console.log('saved')
    const userData = window.localStorage.getItem('user')
    console.log(userData)
    const jsonUserData = JSON.parse(userData)

    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }
    console.log({
      title: state.title,
       summary: state.summary,
       content: state.content,
       skills: state.skills
    })

    axios.put(`/api/user/${jsonUserData._id}/portfolio/${router.query.id}`, {
      biography: state.biography,
      goal1: state.goal1,
      goal2: state.goal2,
      goal3: state.goal3,
      goal4: state.goal4
    }).then(response => {
      console.log(response.data)
      if (response.statusText == "OK") {
          snackbar.showAlert('success', 'Portfolio updated successfully')
      }
    }).catch(error => {
      console.log(error)
      snackbar.showAlert('error', 'Error updating portfolio')
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

    {/* Wrapped button in a grid to be able to move the icon button */}
    <Grid container spacing={-4} justifyContent={'flex-start'} alignItem={'flex-star'}>
        <Button href="/portfolio-page" color="primary" variant="text"><ArrowBackIosIcon/>My Profile</Button>
        </Grid>


     
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
          label="Goal 1" 
          variant="standard" 
          fullWidth
          onChange={handleChange}
          value={state.goal1}
          disabled={state.user_id !== user._id}
        />

        <Toolbar />

        <TextField 
          id="goal2" 
          name="goal2"
          label="Goal 2" 
          variant="standard" 
          fullWidth
          onChange={handleChange}
          value={state.goal2}
          disabled={state.user_id !== user._id}
        />

        <Toolbar />

        <TextField 
          id="goal3" 
          name="goal3"
          label="Goal 3" 
          variant="standard" 
          fullWidth
          onChange={handleChange}
          value={state.goal3}
          disabled={state.user_id !== user._id}
        />

        <Toolbar/>

        <TextField 
          id="goal4" 
          name="goal4"
          label="Goal 4" 
          variant="standard" 
          fullWidth
          onChange={handleChange}
          value={state.goal4}
          disabled={state.user_id !== user._id}
        />

        <Toolbar/>

        <TextField 
          id="biography" 
          name="biography"
          label="Biography" 
          variant="outlined" 
          multiline
          rows={20}
          fullWidth
          onChange={handleChange}
          value={state.biography}
          disabled={state.user_id !== user._id}
        />

        <Toolbar />
        <Button onClick={savePortfolio} color="primary" variant="outlined">Save</Button>
      </Box>
      
      <Toolbar />
    </Box>
  </Main>
  );
};

export default PortfolioPage;
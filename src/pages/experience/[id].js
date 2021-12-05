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


const drawerWidth = 240

const ExperiencePage = () => {
    const snackbar = useContext(SnackBarContext)
    const router = useRouter()

    const user = JSON.parse(window.localStorage.getItem('user'))

    const [state, setState] = React.useState({
      title: "",
      date: "",
      summary: "",
      content: "",
      skills: ""
    });

    console.log(state)

    useEffect(async () => {
        try {
            const userData = JSON.parse(window.localStorage.getItem('user'))
            const res = await axios.get(`/api/user/${userData._id}/experience/${router.query.id}`)
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


  const saveExperience = () => {
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
       date: state.date,
       summary: state.summary,
       content: state.content,
       skills: state.skills
    })

    axios.put(`/api/user/${jsonUserData._id}/experience/${router.query.id}`, {
       title: state.title,
       date: state.date,
       summary: state.summary,
       content: state.content,
       skills: state.skills
    }).then(response => {
      console.log(response.data)
      if (response.statusText == "OK") {
          snackbar.showAlert('success', 'Experience updated successfully')
      }
    }).catch(error => {
      console.log(error)
      snackbar.showAlert('error', 'Error updating experience')
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
            Edit Your Experience
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
              disabled={state.user_id !== user._id}
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
              disabled={state.user_id !== user._id}
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
              disabled={state.user_id !== user._id}
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
              disabled={state.user_id !== user._id}
            />

            <Toolbar/>

            <TextField 
              id="content" 
              name="content"
              label="Describe your Experience" 
              variant="outlined" 
              multiline
              disabled={true}
              rows={20}
              fullWidth
              onChange={handleChange}
              value={state.content}
              disabled={state.user_id !== user._id}
            />

            <Toolbar />
            {state.user_id !== user._id ?
            null :
            <Button onClick={saveExperience} color="primary" variant="outlined">Save</Button>
            }
          </Box>
          
          <Toolbar />
        </Box>
      </Main>
  );
};

export default ExperiencePage;
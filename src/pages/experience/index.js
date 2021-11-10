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


const drawerWidth = 240

const ExperiencePage = () => {

  const [state, setState] = React.useState({
    title: "",
    category: "",
    content: "",
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }
    await axios
      .post("{Formeezy-Endpoint}", formData)
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      })
      .catch((e) => {
        window.location.href = e.response.data.redirect;
      });
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

    axios.post(`/api/user/${jsonUserData._id}/experience`, {
       title: state.title,
       category: state.category,
       content: state.content
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

            <TextField 
              id="title" 
              name="title"
              label="Title" 
              variant="standard" 
              onChange={handleChange}
              value={state.title}
            />

            <TextField 
              id="category"
              name="category"
              label="Category" 
              variant="standard"
              onChange={handleChange}
              value={state.category}
            />

            <TextField 
              id="content" 
              name="content"
              label="Describe your Experience" 
              variant="standard" 
              multiline
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
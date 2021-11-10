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


const drawerWidth = 240

const ExperiencePage = () => {
  return (
      <Main>
        <Box >
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

            <TextField id="title" label="Title" variant="standard" />
            <TextField id="category" label="Category" variant="standard" />

            <TextField id="content" label="Describe your Experience" variant="standard" multiline />
            <Toolbar />
            <Button color="primary" variant="outlined">Save</Button>
          </Box>
          
          <Toolbar />
        </Box>
      </Main>
  );
};

export default ExperiencePage;
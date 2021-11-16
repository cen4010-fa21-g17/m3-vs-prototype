import React from 'react';
import { useState, useEffect } from 'react'
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button'


import Main from 'layouts/Main';
// import Container from 'components/Container';
import { PageReferences, Hero } from './components';
import Form from './components/Form'

import JourneySideBar from 'components/JourneySideBar';

import axios from 'axios'
import { Category, ConstructionRounded } from '@mui/icons-material';

import { useContext } from 'react'
import { useRouter } from 'next/router'
import { SnackBarContext } from 'contexts/SnackBarContext'
import { SnackbarContent } from '@mui/material';

const Home = () => {
  const [experiences, setExperiences] = useState([])
  const router = useRouter()

  const snackbar = useContext(SnackBarContext)

  useEffect(async () => {
    try {
      const res = await axios.get(`/api/user/${router.query.id}/experience`)
      console.log(res.data)
      setExperiences(res.data)

    } catch (error) {
      console.log(error)
    }
    
  }, [])

  console.log(experiences)


  const drawerWidth = 240

  return (
    <Main>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Toolbar/>

      <JourneySideBar />      


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        


        {/* {categories.map(category => (
          <div>
          <h1>{category.name}</h1> */}


          <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
          
          >


          {experiences.map((experience, index) => (
            <Card variant="outlined" sx={{ minWidth: 275, margin: 1}}>
              
            <CardContent>
              <Typography variant="h4" component="div">
                {experience.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {experience.skills}
              </Typography>
              <Typography variant="body2">
                {experience.summary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={`/experience/${experience._id}`} size="medium">More details</Button>
            </CardActions>
          </Card>
          ))}

        </Box>
        <Toolbar/>
        {/* </div>

        ))} */}
      {console.log(experiences.length)}
        {experiences.length == 0 ? 
        
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
          <Typography>
            User did not share any experiences yet
          </Typography>
        </Box>
        :   
        <></>
        }



        {/* <h1>Experienghdgfsgdsfgces</h1>
        <button onClick={addExperience}>Add Experience</button>
        <Form shouldRenderForm={shouldRenderForm} /> */}
      </Box>
    </Box>
    </Main>
  );
};

export default Home;

async function getExperiences() {
  const userData = JSON.parse(window.localStorage.getItem('user'))
  const experiences = await axios.get(`/api/user/${userData._id}/experience`)

  return experiences.data
}
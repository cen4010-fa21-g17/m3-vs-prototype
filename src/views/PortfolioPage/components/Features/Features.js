/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardHeader, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { useContext } from 'react'

import axios from 'axios'

//Hard coded values for the names of the Bio and Goal section
const mock = {
  biography: {
    title: 'Biography',
  },
  goals: {
    title: 'Goals',
    
  },
};


const Features = () => {
  const [portfolio, setPortfolio] = useState([])
  const [user, setUser] = useState([])
  

  
useEffect(async () => {
  try {
    const userData = window.localStorage.getItem('user')
    const jsonUserData = JSON.parse(userData)

    console.log("Getting portfolio data")
    const res = await axios.get(`/api/user/${jsonUserData._id}/portfolio`)
    //const res = await axios.get(`/api/user/${router.query.id}/portfolio`)
    setPortfolio(res.data)

    const userRes = await axios.get(`/api/user/${jsonUserData._id}`)
    //const userRes = await axios.get(`/api/user/${router.query.id}`)
    setUser(userRes.data)

   } catch (error) {
    console.log(error)
  }
    
  }, [])
  
  return (

    //This is where the biography card is
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={2}>

            {/* displays "Biography" to screen*/}
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              {mock.biography.title}
              <IconButton href ={'../../portfolio/'}>
                <EditIcon/>
              </IconButton>
            </Typography>
          </Box>
          {/* This is what displays the user's biography info from the database */}
          {portfolio.map((portfolio, index) => (
          <Card 
            variant="outlined" 
            sx={{ 
              minWidth: 275, margin: 1,
              cursor: 'pointer',
                '&:hover': {
                boxShadow: 2,
              },
              }}>
              
            <CardContent>
              <Typography variant="h6" component="div" fontWeight={700} >
                {portfolio.biography + " "}
                <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'}>
                  <EditIcon/>
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
          
          ))}
        </Grid>


        {/* This is where the goals cards are*/}
        <Grid item xs={12} md={6}>
          <Box marginBottom={2}>
            
            {/* displays "Goals" to screen*/}
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              {mock.goals.title}
              <IconButton href ={'../../portfolio/'}>
                <EditIcon/>
              </IconButton>
            </Typography>
          </Box>

          {/* This is what displays the user's goals info from the database */}
          {portfolio.map((portfolio, index) => (
          <Box>
            
            <Card 
              variant="outlined" 
              sx={{ minWidth: 275, margin: 1,
                cursor: 'pointer',
                '&:hover': {
                boxShadow: 2,
              },
              }}>
             <CardContent>
              <Typography variant="h6" component="div" fontWeight={700}>
                {"Goal 1 : " + portfolio.goal1 + "  "}
                <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'}>
                  <EditIcon/>
                </IconButton>
              </Typography>
             </CardContent>
            </Card>
            
            <Card 
              variant="outlined" 
              sx={{ minWidth: 275, margin: 1,
                cursor: 'pointer',
                '&:hover': {
                boxShadow: 2,
              },
              }}>
             <CardContent>
              <Typography variant="h6" component="div" fontWeight={700}>
                {"Goal 2 : " + portfolio.goal2 + "  "}
                <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'}>
                  <EditIcon/>
                </IconButton>
              </Typography>
             </CardContent> 
            </Card>

            <Card 
              variant="outlined" 
              sx={{ minWidth: 275, margin: 1,
                cursor: 'pointer',
                '&:hover': {
                boxShadow: 2,
              },
              }}>
            <CardContent>
              <Typography variant="h6" component="div" fontWeight={700}>
                {"Goal 3 : " + portfolio.goal3 + "  "}
                <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'}>
                  <EditIcon/>
                </IconButton>
              </Typography>
             </CardContent>  
            </Card>

            <Card 
              variant="outlined" 
              sx={{ minWidth: 275, margin: 1,
                cursor: 'pointer',
                '&:hover': {
                boxShadow: 2,
              },
              }}>
            <CardContent>
              <Typography variant="h6" component="div" fontWeight={700}>
                {"Goal 4: " + portfolio.goal4 + "  "}
                <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'}>
                  <EditIcon/>
                </IconButton>
              </Typography>
             </CardContent>  
            </Card>                               
          </Box>
          
          ))}

        </Grid>
     </Grid>
    </Box>
  );
};


export default Features;

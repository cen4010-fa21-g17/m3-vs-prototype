import React, { useEffect } from 'react';
import {Component} from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import axios from 'axios';


import Container from 'components/Container';

//hard coded information for the user profile
const mock = [
  {
    name: 'First and Last Name',
    avatar: '',
  },
];



const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }
      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  

  const user = JSON.parse(window.localStorage.getItem('user'))
  console.log('Hello');
  

  const theme = useTheme();

  return (
    
    
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      {/* This box contains the background photo for the profile page*/}
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            'url(https://lamp.cse.fau.edu/~lcasals2014/COP3813/projects/p2/assets/img/blueBackgroundPhoto.jpg)',
          filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
        }}
      />
      {/* This container holds user profile and followers*/}
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Grid container spacing={12}>
        {/* This maps to the hard code in "const mock" */}  
        {mock.map((item) => (
          <Grid item xs={4} md={4} >
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={5}
              variant={'outlined'}
              bgcolor={'alternate.main'}
              textAlign ={'center'}
              align={'center'}
            >
              {/* This is for the User profile */}
              <CardContent sx={{ padding: 3 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar sx={{ marginRight: 3 }} >
                    <Avatar
                      src={item.avatar}
                      variant={'rounded'}
                      sx={{ 
                        marginLeft: 12,
                        width: 100, 
                        height: 100, 
                        borderRadius: 3,
                        marginBottom: 3,
                       }}
                    />
                    
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                    sx={{ margin: 0, marginBottom: 3, }}
                    marginTop={5}
                    primary={user.firstname}
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                  
              </CardContent>
            </Box>
          </Grid>
        ))}
          

      </Grid>
        </Box>
      </Container>
      </Box>
   
  );
};



export default Hero;

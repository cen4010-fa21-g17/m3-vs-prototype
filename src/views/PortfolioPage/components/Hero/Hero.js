import React, { useEffect } from 'react';
import {Component} from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import axios from 'axios';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import Container from 'components/Container';
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';

import EditIcon from '@mui/icons-material/Edit';


//hard coded information for the user profile
const mock = [
  {
    name: 'First and Last Name',
    avatar: '',
  },
];

const avatar = null;

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

  //parsing the JSON file to get all of the user's data 
  const user = JSON.parse(window.localStorage.getItem('user'));
  console.log(user)
  console.log(user.firstName)
 
  

  const theme = useTheme();

  const updateProfilePic = () => {

  }
  
  return (

    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display={'flex'}
      alignItems={'center'}
      marginTop={-15}
      paddingTop={13}
      //This is what makes the user's name go in the center of the page
      justifyContent = {'center'}
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
      <Container 
        position = {'relative'}
        zIndex={2}
        minWidth = {1580}
        justifyContents = {'center'}
      >
        <Box>
          <Grid container spacing={12} justifyContent = {'center'}>

        {/* Everything inside of the box */}  
        
          <Grid item xs={5} md={5} justifyContent={'center'}>
            <Box
              width={1}
              height={1}
              component={Card}
              bgcolor={'alternate.main'}
              textAlign ={'center'}
            >
              {/* This is for the User profile */}
                <ListItem component="div" disableGutters >
                  <ListItemAvatar>
                    <Avatar
                      src={`/uploads/${user.profilePicture}`}
                      sx={{ 
                        width: 100, 
                        height: 100, 
                        marginLeft: 30,
                        marginTop: 3,
                        marginBottom:2,
                        
                       }}
                    />
                    <div align="center">
                     
                      <Button onClick={updateProfilePic}><EditIcon/></Button>
                    
                    </div>
                  </ListItemAvatar>
                </ListItem>
                {/*Output the user's firt and last name frtom JSON file */}
                <ListItemText
                    sx={{ margin: 0, marginBottom: 3, }}
                    marginTop={5}
                    primary={user.firstName + " " + user.lastName}
                    primaryTypographyProps={{ variant: 'h4', fontWeight: 600, }}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
            </Box>
          </Grid>
        </Grid>
       </Box>
      </Container>
    </Box>
   
  );
};

export default Hero;

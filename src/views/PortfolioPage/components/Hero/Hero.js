import React, { useEffect, useState } from 'react';
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

import { useContext } from 'react'
import { SnackBarContext } from 'contexts/SnackBarContext'


//hard coded information for the user profile
const mock = [
  {
    name: 'First and Last Name',
    avatar: '',
  },
];

const avatar = null;

const Hero = () => {
  const snackbar = useContext(SnackBarContext)

  const [state, setState] = useState({})
  const [profilePic, setProfilePic] = useState('')

  useEffect(() => {
      const user1 = window.localStorage.getItem('user')
      const userJsonData1 = JSON.parse(user1)
      setState(userJsonData1)
      setProfilePic(userJsonData1.profilePicture)
  }, [])

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

  const handleChangeProfilePic = async (event) => {
    if (!event.target.files?.length) {
        return;
      }
  
    const formData = new FormData();
    const user = window.localStorage.getItem('user')
    const userJsonData = JSON.parse(user)

    formData.append("user_id", userJsonData._id)

    const filename = Date.now() + event.target.files[0].name
    formData.append('profilePicture', filename)

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });


    console.log('handling change')
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };
    console.log('sending post request')

      
      

    const response = await axios.post('/api/uploads', formData, config);

    console.log('got response')
    console.log('response', response.data);

    if (response.statusText === "OK") {

      const oldProfilePic = userJsonData.profilePicture

      const res = await axios.put(`/api/user/${userJsonData._id}`, {
          profilePicture: filename
      })

      if (res.statusText == "OK")
        snackbar.showAlert('success', 'Profile picture updated successfully')

      //const deleteRes = await axios.delete(`/api/uploads`, oldProfilePic)

      console.log('data...')
      console.log(res.data)
      setProfilePic(filename)
      console.log(JSON.stringify(res.data))
      window.localStorage.setItem('user', JSON.stringify(res.data))
      setState(res.data)
    }

    const form = document.getElementById('profile-file-input')
    form.value = ''
      
  };
  
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
                  </ListItemAvatar>
                  <input
                    style={{ display: 'none' }}
                    type="file" 
                    id='profile-file-input'
                    label="avatar"
                    name="theFiles"
                    accept="image/png, image/jpeg"
                    onChange={handleChangeProfilePic} 
                    
                  />
                    
                  <Button onClick={() => document.getElementById('profile-file-input').click()}><EditIcon/></Button>
                </ListItem>  
                {/* <Button onClick={async () => {
                  const res = await axios.delete(`/api/uploads/${user.profilePicture}`)
                  if (res.statusText == "OK")
                    console.log('success deleting picture')
                }}>delete</Button> */}
                    
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

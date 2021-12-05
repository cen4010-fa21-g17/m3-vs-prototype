/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardHeader, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';


//hard coded information for testing bio + goal cards
const mock = {
  biography: {
    title: 'Biography',
    items: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        
      },
      
    ],
  },
  goals: {
    title: 'Goals',
    items: [
      {
        title: 'Goal 1',
      },
      {
        title: 'Goal 2',
      },
      {
        title: 'Goal 3',
      },
      {
        title: 'Goal 4',
      },
    ],
  },
};


const Features = () => {

  
  const renderFeaturesBox = (title = '',) => (
    //This box makes the card and adds a shadow when the cursor hovers over
    <Box
      component={Card}
      variant={'outlined'}
      bgcolor={'transparent'}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 2,
        },
      }}
    >
      <CardContent>
      <CardHeader

          //This is where I added the edit icon
          //goal is to be able to click on the icon and edit the cards directly
          //action={
            //<IconButton href = "../../"onClick={() => console.log('edit', mock.biography.title )}>
             // <EditIcon />
              
           // </IconButton> 
             
         // }
          />
        
          <IconButton href ={'../../portfolio35'}>
            <EditIcon/>
          </IconButton>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', sm: 'row' }}
          flex={'1 1 100%'}
          justifyContent={{ sm: 'space-between' }}
          alignItems={{ sm: 'center' }}
        >
          <Typography fontWeight={700} sx={{ marginBottom: { xs: 1, sm: 0 } }}>
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
  return (
    //This is where the biography card is
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={2}>

            {/* displays "Biography" to screen*/}
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {mock.biography.title}
            </Typography>

          
          </Box>
          {/* This where it maps back to bio to recieve the title*/}
          <Grid container spacing={2}>
            {mock.biography.items.map((item) => (
              <Grid item xs={12}>
                {renderFeaturesBox(item.title, `Last updated ${item.updated}`)}
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* This is where the goals cards are*/}
        <Grid item xs={12} md={6}>
          <Box marginBottom={2}>
            
            {/* displays "Goals" to screen*/}
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {mock.goals.title}
            </Typography>
          </Box>

          {/* This where it maps back to goals to recieve the title*/}
          <Grid container spacing={2}>
            {mock.goals.items.map((item, index) => (
              <Grid item xs={12} key={index}>
                {renderFeaturesBox(item.title, `Last updated ${item.updated}`)}
              </Grid>
            ))}
          </Grid>
        </Grid>
     </Grid>
    </Box>
  );
};


export default Features;
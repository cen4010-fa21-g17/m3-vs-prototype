/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { CardHeader, colors, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';

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
        updated: '1 week ago',
      },
      {
        title: 'Goal 2',
        updated: 'a day ago',
      },
      {
        title: 'Goal 3',
        updated: '2 month ago',
      },
      {
        title: 'Goal 4',
        updated: '4 days ago',
      },
    ],
  },
};


const Features = () => {
  const renderFeaturesBox = (title = '', subtitle = '') => (
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
              action={
              <IconButton onClick={() => console.log('edit', mock.biography.title )}>
                <EditIcon />
               </IconButton>  
          }
          />
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
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={2}>
            
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {mock.biography.title}
            
            </Typography>

          
          </Box>
          <Grid container spacing={2}>
            {mock.biography.items.map((item) => (
              <Grid item xs={12}>
                {renderFeaturesBox(item.title, `Last updated ${item.updated}`)}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box marginBottom={2}>
            
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {mock.goals.title}
            </Typography>
          </Box>
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
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const mock = [
  {
    //image: 'https://assets.maccarianagency.com/backgrounds/img48.jpg',
    description: 'nothing',
    title: 'Focus',
    color: '#183167',
  },
  {
    //image: 'https://assets.maccarianagency.com/backgrounds/img45.jpg',
    description: 'nothing',
    title: 'Tags',
    color: '#CE371F',
  },

];

const Folio = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={'outlined'}
              bgcolor={'alternate.main'}
              align={'center'}
            >
              
              
                <Typography
                  variant={'h4'}
                  fontWeight={700}
                  sx={{ color: 'primary' }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ color: 'primary' }}
                  gutterBottom
                >
                  {item.description}
                </Typography>
                
              </Box>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Folio;

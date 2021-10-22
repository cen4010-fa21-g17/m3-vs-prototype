/* eslint-disable react/no-unescaped-entities */
//Who we are page on the About page
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Who are we?
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              CITDL (pronounced "citadel") is a team of undergraduate engineering students at
              Florida Atlantic University. We are working together to produce a product
              that connects the user's experiences into a Journey that is dynamically presented
              in chronological order.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our process
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              Over the course of the Fall 2021 semester we have been tasked with completing various
              milestones simulating working in a real-world environment. Currently, we are working on milestone 3, which encompasses creating a vertical prototype of
              our product. This assignments main purpose is to test the infrastructure and 
              chosen framework. 
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;

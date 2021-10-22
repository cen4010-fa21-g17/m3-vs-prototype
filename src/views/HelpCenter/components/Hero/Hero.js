/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  }); 
  

  return (
    <Box
      minHeight={{ xs: 300, sm: 600 }}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          'url(https://assets.maccarianagency.com/backgrounds/img52.jpg) no-repeat center',
        backgroundSize: 'cover',
        marginTop: -12,
        paddingTop: 12,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.4),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={4} data-aos="fade-up">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              We are here to help.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'common.white',
              }}
            >
              Check out our FAQ page to see our most commonly asked questions
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent={'center'}
            alignItems={{ xs: 'stretched', sm: 'center' }}
           >
          <Button
               sx={{ height: 54, whiteSpace: 'nowrap' }}
               variant="contained"
               color="primary"
               size="medium"
               fullWidth={!isMd}
             >
             <Link
               underline="none"
               component="a"
               href="/faq"
               color="common.white"
               variant={'subtitle2'}
             >
                Frequently Asked Questions (FAQs)
            </Link>
          </Button> 
         </Box> 
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

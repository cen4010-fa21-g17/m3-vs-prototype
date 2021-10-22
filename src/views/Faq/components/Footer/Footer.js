/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Footer = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          sx={{
            fontWeight: 'medium',
          }}
        >
          Have more Questions?
        </Typography>
        <Typography variant="h6" align={'center'} color={'textSecondary'}>
        Email to chat with us today!
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'center'}
        alignItems={{ xs: 'stretched', sm: 'center' }}
      >
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          fullWidth={!isMd}
          marginTop={{ xs: 1, sm: 0 }}
          marginLeft={{ sm: 2 }}
        >
          <Link
                underline="none"
                component="a"
                href="/help-center"
                color="text.primary"
                variant={'subtitle2'}
              >
                Contact us
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

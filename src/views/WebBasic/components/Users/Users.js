import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/slack.svg',
    name: 'Slack',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/mailchimp.svg',
    name: 'Mailchimp',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/dropbox.svg',
    name: 'Dropbox',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
    name: 'Google Drive',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
    name: 'Google Ad Manager',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
    name: 'Atlassian',
  },
];

const Users = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          BUILD YOUR JOURNEY
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Follow your path to a career
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          For students, self-learners, and engineers.
          <br />
          Build a beautiful, modern, and dynamic profile to display your journey
        </Typography>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          maxWidth: 800,
          margin: '0 auto',
        }}
        data-aos="fade-up"
      >
        {mock.map((item, index) => (
          <Grid
            item
            container
            key={index}
            xs={4}
            direction={index < 3 ? 'row' : 'row-reverse'}
          >
            <Grid item xs={6}>
              <Avatar
                src={item.logo}
                sx={{
                  width: { xs: 60, md: 80 },
                  height: { xs: 60, md: 80 },
                  padding: 2,
                  boxShadow: 4,
                  marginTop: 1,
                }}
                data-aos="zoom-in"
                data-aos-once="false"
              />
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Users;

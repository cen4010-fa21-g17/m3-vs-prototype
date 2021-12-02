import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, Hero, Services } from './components';

//Hero - User profile box and Followers box
//Services - Timeline
//Features - Biography card and Goals card

const PortfolioPage = () => (
  <Main colorInvert={true}>
    <Box bgcolor ={'alternate.main'}>
    <Hero />
    </Box>
    <Box bgcolor={'primary'}>
      <Container>
        <Services />
      </Container>
    </Box>
    <Box >
      <Container>
        <Features />
      </Container>
    </Box>

  </Main>
);

export default PortfolioPage;


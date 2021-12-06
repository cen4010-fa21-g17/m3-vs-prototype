import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, Hero, Services } from './components';

import HorizontalTimeline from "react-horizontal-timeline";
import Grid from '@mui/material/Grid';
import axios from "axios";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'


//Hero - User profile box and Followers box
//Services - Timeline
//Features - Biography card and Goals card

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




const PortfolioPage = () => {

  const [value, setValue] = React.useState(0);

  const [experiences, setExperiences] = useState([])
 
  
  useEffect(async () => {
    const userData = JSON.parse(window.localStorage.getItem('user'))
    const res = await axios.get(`/api/user/${userData._id}/experience`)
    
    setExperiences(res.data)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Main colorInvert={true}>
      <Box bgcolor ={'alternate.main'}>
      <Hero />
      </Box>
  
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Bio and Goals" {...a11yProps(0)} />
            <Tab label="Experiences" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
          
          >
        {experiences.map((experience, index) => (
            <Card variant="outlined" sx={{ minWidth: 275, margin: 1}}>
              
            <CardContent>
              <Typography variant="h4" component="div">
                {experience.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {experience.skills}
              </Typography>
              <Typography variant="body2">
                {experience.summary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={`/experience/${experience._id}`} size="medium">More details</Button>
            </CardActions>
          </Card>
          ))}
          </Box>

        </TabPanel>
  
  
    </Main>
  );
}


export default PortfolioPage;


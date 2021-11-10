
// import React from 'react';
// import { alpha, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';

// import Main from 'layouts/Main';
// import Container from 'components/Container';
// import { PageReferences, Hero } from './components';

// const Home = () => {
//   const theme = useTheme();
//   return (
//     <Main>
//       <Container
//         sx={{
//           position: 'relative',
//           '&::after': {
//             position: 'absolute',
//             content: '""',
//             width: '20%',
//             zIndex: 1,
//             top: 0,
//             left: 0,
//             height: '100%',
//             backgroundSize: '18px 18px',
//             backgroundImage: `radial-gradient(${alpha(theme.palette.primary.dark, 0.4)} 20%, transparent 20%)`,
//             opacity: 0.2,
//           },
//         }}
//       >
//         <Box position={'relative'} zIndex={2}>
//           <Hero />
//         </Box>
//       </Container>
//       <Box
//         position={'relative'}
//         sx={{
//           backgroundColor: theme.palette.alternate.main,
//         }}
//       >
//         <Container>
//           <PageReferences />
//         </Container>
//         <Box
//           component={'svg'}
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//           x="0px"
//           y="0px"
//           viewBox="0 0 1920 100.1"
//           sx={{
//             width: '100%',
//             marginBottom: theme.spacing(-1),
//           }}
//         >
//           <path
//             fill={theme.palette.background.paper}
//             d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
//           ></path>
//         </Box>
//       </Box>
//     </Main>
//   );
// };

// export default Home;


import React from 'react';
import { useState } from 'react'
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button'


import Main from 'layouts/Main';
// import Container from 'components/Container';
import { PageReferences, Hero } from './components';
import Form from './components/Form'

import JourneySideBar from 'components/JourneySideBar';

const Home = () => {
  const theme = useTheme();
  const [shouldRenderForm, setShouldRenderForm] = useState(false)
  
  const addExperience = () => {
    setShouldRenderForm(true)
    // call api
  }

  const categories = [
    {
      name: 'HTML',
      experiences: [
        {
          name: 'experience 1',
          preview: 'this is a descriptsadfsadfdsafasdfasfasdion/preview of the details of the experience'
        },
        {
          name: 'experience 2',
          preview: 'this is a descriptsadfsadfdsafasdfasfasdion/preview of the details of the experience'
        }
      ]
    },
    {
      name: 'C++',
      experiences: [
        {
          name: 'experience 1',
          preview: 'this is a descriptsadfsadfdsafasdfasfasdion/preview of the details of the experience'
        },
        {
          name: 'experience 2',
          preview: 'this is a descriptsadfsadfdsafasdfasfasdion/preview of the details of the experience'
        },
        {
          name: 'experience 3',
          preview: 'this is a descriptsadfsadfdsafasdfasfasdion/preview of the details of the experience'
        }
      ]
    }
  ]

  const drawerWidth = 240;


  return (
    <Main>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Toolbar/>

      <JourneySideBar />      


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />


        {categories.map(category => (
          <div>
          <h1>{category.name}</h1>

          {console.log(category.name)}

          <Box
          display="flex"
          flexDirection="row"
          
          >


          {category.experiences.map((experience, index) => (
            <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {experience.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">More details</Button>
            </CardActions>
          </Card>
          ))}

        </Box>
        <Toolbar/>
        <Divider/>
        </div>

        ))}

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography>
            Add your first experience
          </Typography>
           
          <Fab color="primary">
            <AddIcon />
          </Fab>
        
        </Box>



        {/* <h1>Experienghdgfsgdsfgces</h1>
        <button onClick={addExperience}>Add Experience</button>
        <Form shouldRenderForm={shouldRenderForm} /> */}
      </Box>
    </Box>
    </Main>
  );
};

export default Home;

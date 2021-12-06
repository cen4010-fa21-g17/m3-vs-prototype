import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { useTheme } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import EditIcon from '@mui/icons-material/Edit'
import { CardHeader, IconButton } from '@mui/material';
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
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { SnackBarContext } from 'contexts/SnackBarContext'
  
  const Features = (props) => {
    const [portfolio, setPortfolio] = useState([])
    const [user, setUser] = useState([])
    
  useEffect(async () => {
    try {
      console.log("Getting portfolio data")
      console.log('CONSOLE LOGGIGN USER')
      console.log(props.user)
      const res = await axios.get(`/api/user/61ae6f71c5d419f91bdbec39/portfolio`)
      console.log(res)
      //const res = await axios.get(`/api/user/${router.query.id}/portfolio`)
      setPortfolio(res.data)
  
      const userRes = await axios.get(`/api/user/61ae6f71c5d419f91bdbec39`)
      //const userRes = await axios.get(`/api/user/${router.query.id}`)
      setUser(userRes.data)
  
     } catch (error) {
      console.log(error)
    }
      
    }, [props?.user])
    
    return (
  
      //This is where the biography card is
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box marginBottom={2}>
  
              {/* displays "Biography" to screen*/}
              <Typography variant={'h5'} fontWeight={700} gutterBottom>
                {/* {mock.biography.title} */}
                <IconButton href ={'../../portfolio/'}>
                  <EditIcon/>
                </IconButton>
              </Typography>
            </Box>
            {/* This is what displays the user's biography info from the database */}
            {portfolio.map((portfolio, index) => (
            <Card 
              variant="outlined" 
              sx={{ 
                minWidth: 275, margin: 1,
                cursor: 'pointer',
                  '&:hover': {
                  boxShadow: 2,
                },
                }}>
                
              <CardContent>
                <Typography variant="h6" component="div" fontWeight={700} >
                  {portfolio.biography + " "}
                  <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'}>
                    <EditIcon/>
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
            
            ))}
          </Grid>
  
  
          {/* This is where the goals cards are*/}
          <Grid item xs={12} md={6}>
            <Box marginBottom={2}>
              
              {/* displays "Goals" to screen*/}
              <Typography variant={'h5'} fontWeight={700} gutterBottom>
                {/* {mock.goals.title} */}
                <IconButton href ={'../../portfolio/'}>
                  <EditIcon/>
                </IconButton>
              </Typography>
            </Box>
  
            {/* This is what displays the user's goals info from the database */}
            {portfolio.map((portfolio, index) => (
            <Box>
              
              <Card 
                variant="outlined" 
                sx={{ minWidth: 275, margin: 1,
                  cursor: 'pointer',
                  '&:hover': {
                  boxShadow: 2,
                },
                }}>
               <CardContent>
                <Typography variant="h6" component="div" fontWeight={700}>
                  {"Goal 1 : " + portfolio.goal1 + "  "}
                  <Grid container spacing={4} justifyContent={'flex-end'} alignItem={'flex-end'}>
                  <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'} >
                    <EditIcon/>
                  </IconButton>
                  </Grid>
                </Typography>
               </CardContent>
              </Card>
              
              <Card 
                variant="outlined" 
                sx={{ minWidth: 275, margin: 1,
                  cursor: 'pointer',
                  '&:hover': {
                  boxShadow: 2,
                },
                }}>
               <CardContent>
                <Typography variant="h6" component="div" fontWeight={700}>
                  {"Goal 2 : " + portfolio.goal2 + "  "}
                  <Grid container spacing={4} justifyContent={'flex-end'} alignItem={'flex-end'}>
                  <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'} >
                    <EditIcon/>
                  </IconButton>
                  </Grid>
                </Typography>
               </CardContent> 
              </Card>
  
              <Card 
                variant="outlined" 
                sx={{ minWidth: 275, margin: 1,
                  cursor: 'pointer',
                  '&:hover': {
                  boxShadow: 2,
                },
                }}>
              <CardContent>
                <Typography variant="h6" component="div" fontWeight={700}>
                  {"Goal 3 : " + portfolio.goal3 + "  "}
                  <Grid container spacing={4} justifyContent={'flex-end'} alignItem={'flex-end'}>
                  <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'} >
                    <EditIcon/>
                  </IconButton>
                  </Grid>
                </Typography>
               </CardContent>  
              </Card>
  
              <Card 
                variant="outlined" 
                sx={{ minWidth: 275, margin: 1,
                  cursor: 'pointer',
                  '&:hover': {
                  boxShadow: 2,
                },
                }}>
              <CardContent>
                <Typography variant="h6" component="div" fontWeight={700}>
                  {"Goal 4: " + portfolio.goal4 + "  "}
                  <Grid container spacing={4} justifyContent={'flex-end'} alignItem={'flex-end'}>
                  <IconButton href ={'../../portfolio/'+portfolio._id} size = {'small'} >
                    <EditIcon/>
                  </IconButton>
                  </Grid>
                </Typography>
               </CardContent>  
              </Card>                               
            </Box>
            
            ))}
  
          </Grid>
       </Grid>
      </Box>
    );
  };


  const mock = [
    {
      name: 'First and Last Name',
      avatar: '',
    },
  ];
  
  const avatar = null;
  
  const Hero = (props) => {
      console.log(props)
    const snackbar = useContext(SnackBarContext)
    const router = useRouter()
  
    useEffect(() => {
    
      const jarallaxInit = async () => {
        const jarallaxElems = document.querySelectorAll('.jarallax');
        if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
          return;
        }
        const { jarallax } = await import('jarallax');
        jarallax(jarallaxElems, { speed: 0.2 });
      };
  
      jarallaxInit();
    });
   
    
  
    const theme = useTheme();
    
    return (
  
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={{ xs: 400, sm: 500, md: 600 }}
        display={'flex'}
        alignItems={'center'}
        marginTop={-15}
        paddingTop={13}
        //This is what makes the user's name go in the center of the page
        justifyContent = {'center'}
        id="agency__portfolio-item--js-scroll"
      >
        {/* This box contains the background photo for the profile page*/}
        <Box
          className={'jarallax-img'}
          sx={{
            position: 'absolute',
            objectFit: 'cover',
            /* support for plugin https://github.com/bfred-it/object-fit-images */
            fontFamily: 'object-fit: cover;',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage:
              'url(https://lamp.cse.fau.edu/~lcasals2014/COP3813/projects/p2/assets/img/blueBackgroundPhoto.jpg)',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
  
  
  
        {/* This container holds user profile and followers*/}
        <Container 
          position = {'relative'}
          zIndex={2}
          minWidth = {1580}
          justifyContents = {'center'}
        >
          <Box>
            <Grid container spacing={12} justifyContent = {'center'}>
  
          {/* Everything inside of the box */}  
          
            <Grid item xs={5} md={5} justifyContent={'center'}>
              <Box
                width={1}
                height={1}
                component={Card}
                bgcolor={'alternate.main'}
                textAlign ={'center'}
              >
                {/* This is for the User profile */}
                  <ListItem component="div" disableGutters >
                    <ListItemAvatar>
                       
                        <Avatar
                           src={`/uploads/${props.user.profilePic}`}
                          sx={{ 
                            width: 100, 
                            height: 100, 
                            marginLeft: 30,
                            marginTop: 3,
                            marginBottom:2,
                            
                           }}
                        />
                    </ListItemAvatar>
                  </ListItem>  
                  {/* <Button onClick={async () => {
                    const res = await axios.delete(`/api/uploads/${user.profilePicture}`)
                    if (res.statusText == "OK")
                      console.log('success deleting picture')
                  }}>delete</Button> */}
                      
                  {/*Output the user's firt and last name frtom JSON file */}
                  <ListItemText
                      sx={{ margin: 0, marginBottom: 3, }}
                      marginTop={5}
                      primary={props.user.firstName + " " + props.user.lastName}
                      primaryTypographyProps={{ variant: 'h4', fontWeight: 600, }}
                      secondaryTypographyProps={{ variant: 'subtitle1' }}
                    />
              </Box>
            </Grid>
          </Grid>
         </Box>
        </Container>
      </Box>
     
    );
  };


  
  function Services(props) {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
  
    const [experiences, setExperiences] = useState([])
   
    
    useEffect(async () => {
      const userData = JSON.parse(window.localStorage.getItem('user'))
      const res = await axios.get(`/api/user/${userData._id}/experience`)
      
      setExperiences(res.data)
    }, [])
  
  
    // Values should be only date have to be in the format YYYY/MM/DD to work properly
    // Hard code to test the timeline
    const EVENT_DATES = [];//["2020/01/01", "2020/02/04", "2020/06/15", "2020/09/27", "2021/02/13", "2021/03/22","2021/02/13",];
    experiences.forEach(experience => {
      EVENT_DATES.push(experience.date)
    })
  
  
    // Description array corresponding to values of titles
    //array of strings
    const EVENT_TITLES = [
      /*"The event of 1 Jan 2020 : Mastering C++",
      "The event of 4 Feb 2020 : Data Structures",
      "The event of 15 Jun 2020 : Internship",
      "The event of 27 Sep 2020 : HTML, CSS, and JS",
      "The event of 13 Feb 2021 : Python",
      "The event of 22 March 2021 : GitHub",*/
    ];
  
    experiences.forEach(experience => {
      EVENT_TITLES.push(experience.title)
    })
    
  
  
    // Description array corresponding to values of titles
    // array of strings
    const EVENT_DESCRIPTIONS = [
      /*"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."*/
    ];
    
    experiences.forEach(experience => {
      EVENT_DESCRIPTIONS.push(experience.summary)
    })
  
    return (
      <box>
        <Box sx={{ width: '100%' }}>
        <Grid item xs={12} md={12} >   
          <div>
            <div style={{ width: "80%",
                          height: "100px", 
                          margin: "0 auto",
                          fontSize: "14px",    
                          }}>
              {/* This is where the timline starts*/}             
              <HorizontalTimeline
                styles={{ outline: "#DFA867", foreground: "#0b7bbd", margin: "5" }}
                index={value}
                //This is what lets you click on the dots to display info from different dates
                indexClick={(index) => {
                  setValue(index);
                  setPrevious(value);
                }}
                //This places the value of the date above the dot
                values={EVENT_DATES}
              />
            </div>
            {/* This is where the title is + styling*/}
            <div style={{
                          textAlign: "center",
                          fontSize: "25px", 
                          fontWeight: "700",   
                          }}>
            {EVENT_TITLES[value]}
            </div>
            {/* This is where the description is + syling*/}
            <div style={{
                          marginTop: "15px",
                          textAlign: "center",
                          fontSize: "20px",    
                          }}>
            {EVENT_DESCRIPTIONS[value]}
            </div>
          </div>  
        </Grid>  
      </Box>
      </box>
    );
  }

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
    const router = useRouter()

  const [value, setValue] = React.useState(0);
  const [user, setUser] = useState({})

  const [experiences, setExperiences] = useState([])
 
  
  useEffect(async () => {
    const userData = JSON.parse(window.localStorage.getItem('user'))
    const res = await axios.get(`/api/user/${router.query.id}/experience`)
    const user = await axios.get(`/api/user/${router.query.id}`)
    setUser(user)
    
    setExperiences(res.data)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Main colorInvert={true}>
      <Box bgcolor ={'alternate.main'}>
      <Hero user={user} />
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
          <Services user={user} />
        </Container>
      </Box>
      <Box >
        <Container>
          <Features user={user} />
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


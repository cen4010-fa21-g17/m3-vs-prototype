import React, { useEffect, useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import Grid from '@mui/material/Grid';
import axios from "axios";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


//Websites to create the timeline:
//https://www.npmjs.com/package/react-horizontal-timeline
//https://www.geeksforgeeks.org/what-is-horizontal-timeline-in-reactjs/



  
function App() {
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
  
export default App;


import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

  
function App() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  
  // Values should be only date
  const EVENT_DATES = ["2021/01/01", "2021/01/15", "2021/02/15", "2021/03/15", "2021/04/15", "2021/03/22"];

  // Description array corresponding to values
  const EVENT_TITLES = [
    "1 The event of 1 Jan 2021 : Happy New Year",
    "2 The event of 15 Jan 2021 : Festival",
    "3 The event of 22 March 2021 : Board Exam",
    "4 The event of 1 Jan 2021 : Happy New Year",
    "5 The event of 15 Jan 2021 : Festival",
    "6 The event of 22 March 2021 : Board Exam",
  ];

  const EVENT_DESCRIPTIONS = [
    "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  ];
  
  return (
    <box>
      <Grid item xs={12} md={12} >   
        <div>
          <div style={{ width: "80%",
                        height: "100px", 
                        margin: "0 auto",
                        fontSize: "14px",    
                        }}>
            <HorizontalTimeline
              styles={{ outline: "#DFA867", foreground: "#19295C", margin: "5" }}
              index={value}
              indexClick={(index) => {
                setValue(index);
                setPrevious(value);
              }}
              values={EVENT_DATES}
            />
          </div>
          <div style={{
                        textAlign: "center",
                        fontSize: "25px", 
                        fontWeight: "700",   
                        }}>
          {EVENT_TITLES[value]}
          </div>
          <div style={{
                        textAlign: "center",
                        fontSize: "20px",    
                        }}>
          {EVENT_DESCRIPTIONS[value]}
          </div>
        </div>  
      </Grid>  
    </box>
  );
}
  
export default App;


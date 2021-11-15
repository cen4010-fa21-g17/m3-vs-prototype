import React, { useEffect, useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import Grid from '@mui/material/Grid';

import axios from "axios";
import { useFormik } from 'formik';
import { useRouter } from 'next/router'
  
function App() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  

  
  const Form = () => {
    const router = useRouter()
  
    const initialValues = {
      dates: '',
    };

  // Values should be only date
  const EVENT_DATES = (values) => {
    axios.post('api/user/[id]/experience', {
      dates: values.dates
    }).then(response => {
      console.log(response)
      if (response.status == 202)
        //userService.userValue = response.data
        window.localStorage.setItem('USER', JSON.stringify(response.data))
        //router.push('/home')
    })
  };

  const formik = useFormik({
    initialValues,
    EVENT_DATES,
  });
 
  



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
              value={formik.values.dates}
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
}

// return (
//   <div>
//     <h1 className="title">Timeline</h1>
//     <VerticalTimeline>
//       {timelineElements.map(element => {
//         return (
//           <VerticalTimelineElement
//             key={element.key}
//             date={element.date}
//             dateClassName="date"
//           >
//             <h3 className="vertical-timeline-element-title">
//               {element.title}
//             </h3>
//             <h5 className="vertical-timeline-element-subtitle">
//               {element.location}
//             </h5>
//             <p id="description">{element.description}</p>
//           </VerticalTimelineElement>
//         )
//       })}
//     </VerticalTimeline>
//   </div>
// )

  
export default App;


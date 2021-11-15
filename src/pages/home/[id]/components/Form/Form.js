// /* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';


const Form = (props) => {
  const theme = useTheme();
//   const isMd = useMediaQuery(theme.breakpoints.up('md'), {
//     defaultMatches: true,
//   });
    if (props.shouldRenderForm) {
        console.log(props.shouldRenderForm)
        return (
            <Box>
                <form>
                    <h1>Add Experience</h1>

                    <h2>title</h2>
                    <input type="text"></input>

                    <h2>Content</h2>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Describe your experience...">
                    </textarea>

                    <br/>
                    <button type="submit">Add</button>
                </form>
            </Box>
        );
    } else
        return (<Box></Box>)
};

export default Form;

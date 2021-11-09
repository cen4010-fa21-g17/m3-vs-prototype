import { React, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from  '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { AddCircleOutlineOutlinedIcon } from '@mui/icons-material/AddCircleOutlineOutlined';

import { Box } from '@mui/material/Box';

const profiles = ['David','Laura','Ignacio','Carlos','Thiago'];

const ariaLabel = { 'aria-label': 'description' };

export default function SearchBar() {
  const [results, setResults] = useState();

  return (
    // Card Container
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
      data-aos="fade-up"
    >
      {/* Card Input Field */}
      <InputBase 
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Metaspace"
        inputProps={ariaLabel}
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import('fuse.js')).default;
          const fuse = new Fuse(profiles);
          setResults(fuse.search(value));
        }}
      />
      {/* Input Field Decoration: Search Icon (Outlined) */}
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* Card */}
      {
        <Card
          style={{position: 'absolute',
          top: 60,
          left: 1

        }}
        sx={{
          width: 400,
          alignItems: 'center',
        }}  
        >
          {/* Card Content */}
          <CardContent>

            <Typography>
              Results: {JSON.stringify(results, null, 2)}
            </Typography>
          </CardContent>
          {/* End Card Content */}
          
          {/* Card Actions */}
          <CardActions>

          </CardActions>
          {/* End Card Actions */}
        </Card> 
        // End Card
      }
    </Paper>
    
      
  );
}


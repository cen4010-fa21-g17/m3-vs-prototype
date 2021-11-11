import { React, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from  '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import profiles from './profiles-mock';
import { Avatar } from '@mui/material';
import axios from 'axios';

const ariaLabel = { 'aria-label': 'description' };

export default function SearchBar() {
  // const [results, setResults] = useState();
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const res = await axios.get('/api/user')

    setUsers(res.data)
  },[])

  console.log(users)
  
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

          // Search by user's first and last name
          const options = {
            keys: ['name']
          }
          const fuse = new Fuse(profiles,options);
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
     
             {JSON.stringify(profiles, null,2)} 
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


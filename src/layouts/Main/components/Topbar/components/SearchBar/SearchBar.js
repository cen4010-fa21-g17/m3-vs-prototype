import { React, useState } from 'react';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from  '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import profiles from './profiles-mock';



const ariaLabel = { 'aria-label': 'description' };

  const SearchProfile = results.map(function(profile) {
      return (
        <div>
          <Link href={profile.href}>
            <ListItem
            key={profile.id}
            >
              <ListItemAvatar>
                {profile.avatar}
              </ListItemAvatar>
              <Typography
                variant="subtitle1"
                noWrap
                >
                {profile.about}
              </Typography>
            </ListItem>
          </Link>
          <Divider />
        </div>
      );
    })

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
            <List
              sx={{
                width: 400,
                maxWidth: 400,
                bgcolor: 'Background.paper',
              }}
            >
              {results != null ? <SearchProfile/> : ''}
            </List>
            {/* {JSON.stringify(results, null,2)} */}
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


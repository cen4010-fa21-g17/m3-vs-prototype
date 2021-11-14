import { React, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from  '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';

import { SearchData } from '..';


const ariaLabel = { 'aria-label': 'description' };

export default function SearchBar() {
  
const data = SearchData();
const [results,setResults] = useState();

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
            keys: ['firstName','lastName']
          }
          const fuse = new Fuse(data.users, options);
          setResults(fuse.search(value));
        }}
      />
      {/* Search Icon (Outlined) */}
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* Card */}
      { 
        <Card
          style={{position: 'absolute',
          top: 60,
          left: 1,
        }}
          sx={{
            width: 400,
            alignItems: 'center',
        }}  
        >
          {/* Card Content */}
          <CardContent>
            {JSON.stringify(results,null,2)}
            <List
              sx={{
                width: '100%',
                maxWidth: 400,
                bgcolor: 'Background.paper',
              }}
            >
              {results !== undefined ? results.map((user) =>(
                <div>
                  <ListItem
                    key={user.item._id}
                    component={'a'}
                    // href={user.item.href}
                    button
                  >
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText primary={user.item.firstName + " " + user.item.lastName} secondary={user.item.profileContent} />
                  </ListItem>
                  <Divider component="li"/>
                </div>
              )) : ""
            }
            </List>
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


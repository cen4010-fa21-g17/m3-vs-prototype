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
import Fade from '@mui/material/Fade';

import { SearchData } from '..';


const ariaLabel = { 'aria-label': 'description' };

export default function SearchBar() {
  
  // Simple state change for fuse.js search feature
  const data = SearchData();
  const [results,setResults] = useState();

  // Search results simple fade for change in search bar
  const [open, setOpen] = useState(false);

  // Search bar click handler fucntions.
  const handleClick = () => {
    setOpen ((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    // Entire card container fades out (disappears) whent he user clicks
    //  away from the search bar
    <ClickAwayListener onClickAway={
      handleClickAway

      }>
      {/* Card Container */}
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
            // Set search state
            const fuse = new Fuse(data.users, options);
            setResults(fuse.search(value));
            handleClick();
          }}
        />
        {/* Search Icon (Outlined) */}
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/* Card */}
        { 
        // Card disappears when the user click away from the search bar.
          <Fade in={open}>
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
                        href={`/home/${user.item._id}`}
                        // Need link to user profile here.
                        // href={user.item.href}
                        button
                      >
                        <ListItemAvatar>
                          <Avatar />
                        </ListItemAvatar>
                        <ListItemText 
                          primary={user.item.firstName + " " + user.item.lastName} 
                          secondary={user.item.profileContent} 
                        />
                      </ListItem>
                      {/* Divider is omitted if the number of listings is less than 2 */}
                      {user.item.length < 2 ?
                        <Divider component="li"/>: <div></div>
                      }
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
          </Fade>
          // End Card  
        }
      </Paper>
    </ClickAwayListener>
  );
}


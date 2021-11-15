



import React from 'react';
import Main from 'layouts/Main'

import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar  from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox'
import MailIcon from '@mui/icons-material/Mail'
import Drawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText'

import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'

const drawerWidth = 240

const JourneySideBar = () => {
  return (
    <Drawer
    display="block"
    variant="permanent"
    sx={{
      zIndex: 0,
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar/>
    <Toolbar/>

    <Box 
        
    >
      <Button href="/home" fullWidth variant="text">
        <Typography textAlign="center" variant="h3">
          Journey
        </Typography>
      </Button>
    </Box>

    <Divider/>
    
    <Box sx={{ overflow: 'auto' }}>
        <Toolbar />
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContetn="center"
        >

            <Typography>
                Add experience
            </Typography>
            
            <Fab href="./experience" color="primary">
                <AddIcon />
            </Fab>

        </Box>
        
    </Box>
  </Drawer>
  );
};

export default JourneySideBar;
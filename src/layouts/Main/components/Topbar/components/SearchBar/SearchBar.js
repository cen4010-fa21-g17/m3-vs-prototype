import { React, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const profiles = ['David','Laura','Ignacio','Carlos','Thiago'];

const ariaLabel = { 'aria-label': 'description' };

export default function SearchBar() {
  const [results, setResults] = useState();

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
      data-aos="fade-up"
    >

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
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
      
  );
}


import { Input } from '@mui/material';
import { React, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const profiles = ['David','Laura','Ignacio','Carlos','Thiago'];


export default function SearchBar() {
  const [results, setResults] = useState();

  return (
    <div>
      <Input 
        id="outlined-basic"
        type="text"
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        }
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import('fuse.js')).default;
          const fuse = new Fuse(profiles);
          setResults(fuse.search(value));
        }}
      />
      {/* <pre>Results: {JSON.stringify(results, null, 2)}</pre> */}
    </div>
  );
}
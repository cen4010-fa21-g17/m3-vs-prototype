import { Input } from '@mui/material';
import { useState } from 'react';

const profiles = ['David','Laura','Ignacio','Carlos','Thiago']


export default function SearchBar() {
    const [results, setResults] = useState()

    return (
        <div>
            <Input 
                type='text'
                placeholder='Search' color='secondary' focused 
                onChange={async (e) => {
                    const { value } = e.currentTarget
                    // Dynamically load fuse.js
                    const Fuse = (await import('fuse.js')).default
                    const fuse = new Fuse(profiles)
                    setResults(fuse.search(value))
                }}
            />
            <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
    )
}
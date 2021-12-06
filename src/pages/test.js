import React from 'react';
import axios from 'axios'

import { useState, useEffect} from 'react'


import Image from 'next/image'

const TestPage = () => {
    const [state, setState] = useState({})
    const [profilePic, setProfilePic] = useState('')

    useEffect(() => {
        const user1 = window.localStorage.getItem('user')
        const userJsonData1 = JSON.parse(user1)
        setState(userJsonData1)
        setProfilePic(userJsonData1.profilePicture)
    }, [])

    const handleChange = async (event) => {
        if (!event.target.files?.length) {
            return;
          }
      
          const formData = new FormData();
          const user = window.localStorage.getItem('user')
         const userJsonData = JSON.parse(user)

          formData.append("user_id", userJsonData._id)

          const filename = Date.now() + event.target.files[0].name
          formData.append('profilePicture', filename)
      
          Array.from(event.target.files).forEach((file) => {
            formData.append(event.target.name, file);
          });


          console.log('handling change')
          const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
              console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
          };
          console.log('sending post request')

          
          

          const response = await axios.post('/api/uploads', formData, config);

          console.log('got response')
          console.log('response', response.data);

          if (response.statusText === "OK") {

            const res = await axios.put(`/api/user/${userJsonData._id}`, {
                profilePicture: filename
            })
            console.log('data...')
            console.log(res.data)
            setProfilePic(filename)
             console.log(JSON.stringify(res.data))
            window.localStorage.setItem('user', JSON.stringify(res.data))
            setState(res.data)
          }

          const form = document.getElementById('my-file-input')
          form.value = ''
          
      };
    

  return <div>

    <label htmlFor="avatar">Choose a profile picture:</label>

    <input type="file" 
        id='my-file-input'
        label="avatar"
        name="theFiles"
        accept="image/png, image/jpeg"
        onChange={handleChange}>
        
    </input>
    {state.profilePicture ? 
    <Image
    src={`/uploads/${state.profilePicture}`}
    alt="Picture of the author"
    width={500} automatically provided
    height={500} automatically provided
    blurDataURL="data:..." automatically provided
    placeholder="blur" // Optional blur-up while loading
    />
        : null}

    </div>;
};

export default TestPage;
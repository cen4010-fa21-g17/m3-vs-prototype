import { useEffect, useState } from 'react';
import axios from 'axios';

// Fetches data from data API for user data
export default function SearchData() {

  const [users, setUsers] = useState();

  useEffect(() => {
    function getFetchUrl() {
      return '/api/user';
    }
    async function fetchData() {
      const result = await axios.get(getFetchUrl());
      setUsers(result.data);
    }
    fetchData();
  },[]);

  return (
    {users}
  );
}


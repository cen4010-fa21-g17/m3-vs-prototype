import { useEffect, useState } from 'react';
import axios from 'axios';

// Fetches data from data API for user data
export default function SearchData() {

  const [timeline, setTimeline] = useState();

  useEffect(() => {
    function getFetchUrl() {
      return '/api/user/[id]/experience';
    }
    async function fetchData() {
      const result = await axios.get(getFetchUrl());
      setTimeline(result.data);
    }
    fetchData();
  },[]);

  return (
    {timeline}
  );
}
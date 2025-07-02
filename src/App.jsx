import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';

function App() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);

  const fetchdata = async () => {
    setloading(true);
    try {
      const apikey = 'd0fd3f73';
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apikey}&s=${search}`
      );
      const result = await response.json();
      setdata(result.Search || []);
    } catch (err) {
      console.log('Error fetching data:', err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (search.trim() !== '') {
      fetchdata();
    }
  }, [search]);

  return (
    <div>
      <Nav search={search} setsearch={setsearch} />
      <Card data={data} loading={loading} />
    </div>
  );
}

export default App;

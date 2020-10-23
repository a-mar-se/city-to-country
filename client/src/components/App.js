import React, { useState } from 'react';
import { getData } from '../lib/get-data';

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setLocation(value);
    // console.log({ value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getData(location);
    console.log(data);
    setData(data);
  };
  return (
    <>
      <h1>City Infromation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">City</label>
        <input
          type="search"
          id="location"
          placeholder="Search city"
          name="location"
          onChange={handleChange}
          value={location}
        />
        <button type="submit">Search</button>
      </form>
      <h1>{data}klf</h1>
    </>
  );
}

export default App;

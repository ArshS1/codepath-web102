import React, { useState, useEffect } from 'react';
// get api key from .env
const API_KEY = process.env.REACT_APP_API_KEY;

import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [abv, setAbv] = useState([0, 100]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.openbrewerydb.com/breweries' + API_KEY);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const filteredData = data
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(item => type ? item.type === type : true)
    .filter(item => item.abv >= abv[0] && item.abv <= abv[1]);

  const totalItems = data.length;
  const totalFilteredItems = filteredData.length;

  return (
    <div>
      <h1>Brewery Dashboard</h1>
      <p>Total breweries: {totalItems}</p>
      <p>Filtered breweries: {totalFilteredItems}</p>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="">All types</option>
        <option value="micro">Micro</option>
        <option value="nano">Nano</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
      </select>
      <input
        type="range"
        min="0"
        max="100"
        value={abv[0]}
        onChange={e => setAbv([Number(e.target.value), abv[1]])}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={abv[1]}
        onChange={e => setAbv([abv[0], Number(e.target.value)])}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.type}</p>
            <p>ABV: {item.abv}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
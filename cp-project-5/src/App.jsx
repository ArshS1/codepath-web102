import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.openbrewerydb.com/breweries');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const filteredData = data
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(item => filter ? item.type === filter : true);

  const totalItems = data.length;
  const totalFilteredItems = filteredData.length;

  return (
    <div>
      <h1>Brewery Dashboard</h1>
      <p>Total breweries: {totalItems}</p>
      <p>Filtered breweries: {totalFilteredItems}</p>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="micro">Micro</option>
        <option value="nano">Nano</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
      </select>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
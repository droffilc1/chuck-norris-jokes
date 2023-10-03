import React, { useState } from 'react';
import './chuckNorrisSearch.css';

const ChuckNorrisSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const apiUrl = 'https://api.chucknorris.io/jokes/search';

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() === '') {
      alert('Please enter a search query.');
      return;
    }

    fetch(`${apiUrl}?query=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) => {
        // Limit to 2 results
        setResults(data.result.slice(0, 2) || []);
        setQuery(''); // Clear the search query
      })
      .catch((error) => console.error('Error fetching Chuck Norris jokes:', error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search query"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChuckNorrisSearch;

import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [input, setInput] = useState(() => {
    return localStorage.getItem('input') || '';
  });
  const [asciiValues, setAsciiValues] = useState(() => {
    return localStorage.getItem('asciiValues') ? JSON.parse(localStorage.getItem('asciiValues')) : [];
  });

  // Function to convert string to ASCII values
  const convertToAscii = (str) => {
    return str.split('').map(char => char.charCodeAt(0));
  };

  // Handle input change
  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    const asciiArr = convertToAscii(value);
    setAsciiValues(asciiArr);
    localStorage.setItem('input', value);
    localStorage.setItem('asciiValues', JSON.stringify(asciiArr));
  };

  // Reset everything
  const resetEverything = () => {
    setInput('');
    setAsciiValues([]);
    localStorage.removeItem('input');
    localStorage.removeItem('asciiValues');
  };

  return (
    <>
      <h1>String to ASCII Converter</h1>
      <div className="card">
        <input 
          type="text" 
          value={input} 
          onChange={handleChange} 
          placeholder="Enter a string" 
        />
        <p>ASCII Values: {asciiValues.join(', ')}</p>
        <button onClick={resetEverything} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;

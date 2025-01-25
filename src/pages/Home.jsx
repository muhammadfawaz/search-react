import React, { useState } from "react";
import VirtualKeyboard from "../components/VirtualKeyboard";
import dummyData from "../data/dummyData";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredData = dummyData.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredData);
  };

  const handleKeyClick = (key) => {
    setSearchTerm((prev) => prev + key);
  };

  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Malayalam sentence..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
      {/* Move the keyboard outside the main container */}
      <VirtualKeyboard onKeyClick={handleKeyClick} />
    </>
  );
}

export default Home;

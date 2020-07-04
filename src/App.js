/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Header, CharacterGrid, Search } from "./components";
import axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchItem = async () => {
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    setItems(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItem();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

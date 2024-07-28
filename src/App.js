import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

// 04e4e1e56ab1474f9595bcfaf4c6d783

function App() {
  const [query, setQuery] = useState('');
  const getQuery = (q) => {
    setQuery(q);
  }

  return (
    <>
    <Navbar getQuery={getQuery}/>
    <Outlet/>
    </>
  );
}

export default App;

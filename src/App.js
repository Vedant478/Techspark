import React from "react";
import './App.css';
import Navbar from "./components/Navbar";

import { BrowserRouter as Router,Routes,Route, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
function App() {
  return (
    <Router>

      {/* <Navbar/> */}
      <HomePage />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;

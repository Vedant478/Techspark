import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import ComingSoon from "./components/ComingSoon";
import { BrowserRouter as Router,Routes,Route, RouterProvider } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <ComingSoon/> */}
      <Navbar/>
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;

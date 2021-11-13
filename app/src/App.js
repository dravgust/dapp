import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dapp from "./pages/Dapp";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home/>} />
          <Route path="/dapp" element={<Dapp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dapp from "./pages/Dapp";
import NotFound from "./pages/NotFound";
import DefaultLayout from './pages/_layouts/DefaultLayout';
import TestPage from './pages/TestPage';
import Dapp2 from './pages/Dapp2';
import ChakraUI from './pages/ChakraUI';

const App = () => {
  return (
      <Router> 
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home/>} />
            <Route path='/test' element={<TestPage/>} />
            <Route
              path="/dapp"
              element={
                <DefaultLayout> 
                  <Dapp/>
                </DefaultLayout>
              }
              />
              <Route
              path="/dapp2"
              element={
                  <Dapp2/>
              }
              />
              <Route
              path="/chakraui"
              element={
                  <ChakraUI/>
              }
              />
          </Routes>
       
      </Router>
  );
}

export default App;

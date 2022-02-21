import React, {Component} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

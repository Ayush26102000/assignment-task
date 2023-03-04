import React from 'react';
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login/>}  />
        <Route exact path="/Dashboard" element={<Dashboard/>}  />
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;

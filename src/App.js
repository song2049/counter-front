// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import ButtonPlay from './playground/ButtonPlay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ButtonPlay/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

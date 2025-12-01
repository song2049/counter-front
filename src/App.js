// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import ButtonPlay from './playground/ButtonPlay';
import Main from "./playground/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/counter" element={<ButtonPlay/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

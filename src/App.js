// import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Counter from './components/Counter';
import Main from "./playground/Main";
import NotFound from "./NotFound";
import Header from './layouts/Header';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

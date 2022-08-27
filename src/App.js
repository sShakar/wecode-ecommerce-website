import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import ItemsLayout from './Layout/ItemsLayout/ItemsLayout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="/items" element={<ItemsLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

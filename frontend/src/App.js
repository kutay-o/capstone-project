import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import ProductResult from './pages/ProductResult/ProductResult';
import ProductSearch from './pages/ProductSearch/ProductSearch';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product-search' element={<ProductSearch />} />
        <Route path = '/p/:productId' element={<ProductResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

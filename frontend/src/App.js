import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddProductPage from './pages/AddProductPage/AddProductPage';
import AddRecordToProduct from './pages/AddRecordToProductPage/AddRecordToProduct';
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
        <Route path = '/product-add' element={<AddProductPage />} /> // metamask interaksiyonun olmadan gidememeli
        <Route path = '/product-record-add' element={<AddRecordToProduct />} /> // metamask interaksiyonun olmadan gidememeli
        //belki producta record girme sayfası urlden productId alabilir ?
      </Routes>
    </BrowserRouter>
  );
}

export default App;

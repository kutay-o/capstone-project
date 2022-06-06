import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddProductPage from './pages/AddProductPage/AddProductPage';
import AddRecordToProduct from './pages/AddRecordToProductPage/AddRecordToProduct';
import FetchProducts from './pages/FetchProducts/FetchProducts';
import FirstRegistrationPage from './pages/FirstRegistrationPage/FirstRegistrationPage';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import ProductResult from './pages/ProductResult/ProductResult';
import ProductSearch from './pages/ProductSearch/ProductSearch';
// metamask interaksiyonun olmadan gidememeli
// metamask interaksiyonun olmadan gidememeli
//belki producta record girme sayfası urlden productId alabilir ?
function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product-search' element={<ProductSearch />} />
        <Route path = '/p/:productId' element={<ProductResult />} />
        <Route path = '/product-add' element={<AddProductPage />} /> 
        <Route path = '/product-record-add' element={<AddRecordToProduct />} /> 
        <Route path = '/first-register' element={<FirstRegistrationPage />} /> 
        <Route path = '/products' element={<FetchProducts />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProductSearch from '../pages/ProductSearch/ProductSearch';
import ProductResult from '../pages/ProductResult/ProductResult';
import AddProductPage from '../pages/AddProductPage/AddProductPage';
import AddRecordToProduct from '../pages/AddRecordToProductPage/AddRecordToProduct';
import FirstRegistrationPage from '../pages/FirstRegistrationPage/FirstRegistrationPage';
import FetchProducts from '../pages/FetchProducts/FetchProducts';
import Login from '../pages/LoginPage/Login';

import './content.css';

const Content = () => {
    return ( 
        <section className='content'>
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
      </section>
     );
}
 
export default Content;
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
import FetchProductRecords from '../pages/FetchProductRecords/FetchProductRecords';
import UpdateRecord from '../pages/UpdateRecordPage/UpdateRecord';
import UpdateProduct from '../pages/UpdateProductPage/UpdateProduct';
import FetchEmployee from '../pages/FetchEmployeePage/FetchEmployee';
import AddEmployee from '../pages/AddEmployeePage/AddEmployee';

const Content = () => {
    return ( 
        <section className='content'>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product-search' element={<ProductSearch />} />
                <Route path = '/p/:productId' element={<ProductResult />} />
                <Route path = '/product-add' element={<AddProductPage />} /> 
                <Route path = '/product-record-add/:productId' element={<AddRecordToProduct />} /> 
                <Route path = '/update-record/:recordId' element={<UpdateRecord />} /> 
                <Route path = '/update-product/:productId' element={<UpdateProduct />} /> 
                <Route path = '/fetch-product-records/:productId' element={<FetchProductRecords />} /> 
                <Route path = '/first-register' element={<FirstRegistrationPage />} /> 
                <Route path = '/products' element={<FetchProducts />} /> 
                <Route path = '/fetch-employee' element={<FetchEmployee />} /> 
                <Route path = '/add-employee' element={<AddEmployee />} /> 
            </Routes>
      </section>
     );
}
 
export default Content;
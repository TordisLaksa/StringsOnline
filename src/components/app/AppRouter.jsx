import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login';
import { Shopping } from '../../pages/Shopping/Shopping';
import { Sales } from '../../pages/Sales/Sales';
import { NoPage } from '../../pages/NoPage';
import { ProductList } from '../../pages/Products/ProductList';
import { LeftNav } from '../Partials/Nav/LeftNav';
import { ProductDetails } from '../../pages/Products/ProductDetails';

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shopping' element={<Shopping />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='productlist' element={<ProductList />}>
                <Route path=':id' element={<ProductList />}>
                    <Route path=':subid' element={<ProductList />}> 
                        <Route path=':id' element={<ProductDetails />}></Route> 
                    </Route>  
                </Route>
            </Route>
            <Route path='leftnav' element={<LeftNav />} ></Route>
            <Route path='*' element={<NoPage />} />
        </Routes>
    )
}
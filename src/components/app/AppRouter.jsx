import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login';
import { Shopping } from '../../pages/Shopping/Shopping';
import { NoPage } from '../../pages/NoPage';

// const Redirect = ({ to }) => {
//     let navigate = useNavigate();
//     useEffect(() => {
//         navigate(to);
//     });
//     return null;
// }

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shopping' element={<Shopping />} />
            
            <Route path='*' element={<NoPage />} />
        </Routes>
    )
}
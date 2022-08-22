import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home/Home'
// import { About } from "../../Pages/About/About";
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
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='*' element={<NoPage />} />
        </Routes>
    )
}
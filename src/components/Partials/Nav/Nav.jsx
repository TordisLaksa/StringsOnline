import { NavLink } from "react-router-dom"
import './Nav.scss'

export const Nav = () => {
    return (
        <nav>
            <NavLink to={'/'}><img src={require ('../../../Assets/Images/header-bg.png')} alt="Logo"></img></NavLink>
            <ul>
                <li><NavLink to={'/'}>Forside</NavLink></li>
                <li><NavLink to={'/sales'}>Salgs- og handelsbetingelser</NavLink></li>
                <button><NavLink to={'/login'}>Login</NavLink></button>
            </ul>
        </nav>
    )
}
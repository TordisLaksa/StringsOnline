import { Nav } from "../Nav/Nav"
import { NavContact } from "../NavContact/NavContact"
import './Header.scss'

export const Header = () => {
    return (
        <header>
            <Nav />
            <NavContact />
        </header>
    )
}
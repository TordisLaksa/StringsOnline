import MailIcon from '../../../Assets/Images/mail-icon.png'
import PhoneIcon from '../../../Assets/Images/phone-icon.png'
import CartIcon from '../../../Assets/Images/cart-icon.png'
import './NavContact.scss'
import { Link } from 'react-router-dom'
export const NavContact = () => {
    return(
        <article>
            <div className='contactWrapper'>
                <p><img src={MailIcon} alt='mail-icon' /> SALES@STRINGSONLINE.COM</p>
                <p><img src={PhoneIcon} alt='phone-icond'/> +45 98 12 22 68</p>
                <Link to={'/shopping'}><img src={CartIcon} alt='phone-icond' /></Link>
            </div>
            <div className='searchWrapper'>
                <input type="text" placeholder='Indtast søgeord'/>
                <button><span className="material-symbols-outlined">arrow_forward</span></button>
            </div>
        </article>
    )
}
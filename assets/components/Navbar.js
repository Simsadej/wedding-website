import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../public/wedding-logo.png';
import '../styles/Navbar.css';

function Navbar() {
    const [click, setIsClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);
    const toggleNavbar = () => setIsOpen(!isOpen);

    const clicked = () => setIsClicked(!click);



    return(
        <>
            <nav className='navbar'>
                <Link to='/wedding/home' className='logo' onClick={closeMenu}>
                    <img src={logo} alt='' className='wedding-logo'/>
                </Link>
                <div className='menu-icon'>
                    <button className='btn btn-outline navbar-toggle' data-toggle="collapse" data-target=".navbar-collapse"
                            onClick={toggleNavbar}>
                        <i className={isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'}/>
                    </button>
                </div>

                <div className={`links-container ${isOpen && clicked ? 'active': ''}`} >
                    <ul className={`nav-menu ${isOpen && clicked ? 'active' : ''}`}>

                        <li>
                            <Link to='/wedding/home' onClick={closeMenu} className='nav-links'>Home</Link>
                        </li>

                        <li>
                            <Link to='/wedding/confirm-attendance' onClick={closeMenu} className='nav-links'>RSVP</Link>
                        </li>

                        <li>
                            <Link to='/wedding/gift-registry' onClick={closeMenu} className='nav-links'>Gift
                                Registry</Link>
                        </li>
                        <li>
                            <Link to='/wedding/faqs' onClick={closeMenu} className='nav-links'>FAQs</Link>
                        </li>
                    </ul>
                </div>

                <div className={`nav-overlay ${isOpen ? 'active' : ' '}`} onClick={toggleNavbar}></div>
            </nav>
        </>
    )
}
export default Navbar;